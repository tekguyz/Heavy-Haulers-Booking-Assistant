'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Package, Home, Trash, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendEstimateAction } from '@/app/actions/send-estimate';

const JOB_TYPES = [
  { id: 'full-house', label: 'Full House Move', icon: Home },
  { id: 'single-item', label: 'Single Item / Haul', icon: Package },
  { id: 'junk-removal', label: 'Junk Removal', icon: Trash },
];

const estimateSchema = z.object({
  jobType: z.string().min(1, "Job type is required"),
  pickupZip: z.string().min(5, "Valid pickup zip code is required"),
  destZip: z.string().min(5, "Valid destination zip code is required"),
  estimatedDate: z.string().min(1, "Estimated date is required"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().optional(),
});

type EstimateFormData = z.infer<typeof estimateSchema>;

export function EstimateForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; message: string} | null>(null);
  
  const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = useForm<EstimateFormData>({
    resolver: zodResolver(estimateSchema),
    defaultValues: {
      jobType: '',
      pickupZip: '',
      destZip: '',
      estimatedDate: '',
      name: '',
      phone: '',
      email: '',
      message: '',
    }
  });

  const jobType = watch('jobType');

  const nextStep = async (e: React.MouseEvent) => {
    e.preventDefault();
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['jobType'];
    if (step === 2) fieldsToValidate = ['pickupZip', 'destZip', 'estimatedDate'];
    
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) {
      setStep((s) => Math.min(s + 1, 3));
    }
  };
  
  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep((s) => Math.max(s - 1, 1));
  };

  const onSubmit = async (data: EstimateFormData) => {
    setIsSubmitting(true);
    setSubmitResult(null);
    
    // Create FormData since our action expects it
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    
    try {
      const result = await sendEstimateAction(null, formData);
      setSubmitResult(result);
    } catch (error) {
      setSubmitResult({ success: false, message: "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitResult?.success) {
    return (
      <section className="py-24 bg-brand-dark" id="estimate-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="bg-brand-steel/10 border border-brand-steel/30 rounded-2xl p-12 flex flex-col items-center"
          >
            <CheckCircle2 className="w-20 h-20 text-brand-orange mb-6" />
            <h2 className="text-4xl font-bold text-brand-light mb-4">Request Received</h2>
            <p className="text-xl text-brand-steel">{submitResult.message}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-brand-dark" id="estimate-form">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-brand-light uppercase tracking-tighter">
            Get a Free Quote
          </h2>
          <div className="h-1 w-24 bg-brand-orange mx-auto mt-4 mb-6"></div>
          <p className="text-lg font-bold text-brand-muted max-w-2xl mx-auto uppercase tracking-widest">
            Tell us about your hauling needs, and we&apos;ll provide a fast, transparent estimate.
          </p>
        </div>

        <div className="bento-card p-6 md:p-10 border-l-4 border-l-brand-orange">
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-brand-steel/30 -z-10"></div>
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-orange -z-10 transition-all duration-500`} style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
            
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`w-10 h-10 flex items-center justify-center font-black text-sm transition-colors duration-300 ${
                  step >= i ? 'bg-brand-orange text-brand-dark' : 'bg-brand-steel text-brand-light'
                }`}
              >
                {i}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-black uppercase text-brand-light mb-6 tracking-wide">What do you need help with?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {JOB_TYPES.map((type) => (
                      <button 
                        key={type.id} 
                        type="button"
                        role="radio"
                        aria-checked={jobType === type.id}
                        className={`cursor-pointer flex flex-col items-center justify-center p-6 border-2 transition-all ${
                          jobType === type.id 
                            ? 'border-brand-orange bg-brand-orange text-brand-dark btn-shadow' 
                            : 'border-brand-steel bg-brand-dark text-brand-light hover:border-brand-orange hover:text-brand-orange'
                        }`}
                        onClick={() => {
                          setValue('jobType', type.id, { shouldValidate: true });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setValue('jobType', type.id, { shouldValidate: true });
                          }
                        }}
                      >
                        <type.icon className="w-10 h-10 mb-4" />
                        <span className="font-bold text-center">{type.label}</span>
                      </button>
                    ))}
                  </div>
                  {errors.jobType && <p className="text-red-400 text-sm mt-2">{errors.jobType.message}</p>}
                  
                  <div className="flex justify-end pt-6">
                    <button 
                      type="button" 
                      onClick={nextStep} 
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 font-black uppercase tracking-widest bg-brand-orange text-brand-dark btn-shadow hover:translate-y-[2px] transition-all min-h-[44px]"
                    >
                      Next Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-black uppercase tracking-wide text-brand-light mb-6">Logistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="pickupZip" className="block text-xs font-black uppercase tracking-widest text-brand-light">Pickup Zip Code</label>
                      <input 
                        type="text" 
                        id="pickupZip"
                        {...register('pickupZip')}
                        className="w-full bg-transparent border-2 border-brand-steel px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange min-h-[44px]"
                        placeholder="88001"
                        aria-required="true"
                        aria-invalid={!!errors.pickupZip}
                      />
                      {errors.pickupZip && <p className="text-red-400 text-sm">{errors.pickupZip.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="destZip" className="block text-xs font-black uppercase tracking-widest text-brand-light">Destination Zip Code</label>
                      <input 
                        type="text" 
                        id="destZip"
                        {...register('destZip')}
                        className="w-full bg-transparent border-2 border-brand-steel px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange min-h-[44px]"
                        placeholder="88011"
                        aria-required="true"
                        aria-invalid={!!errors.destZip}
                      />
                      {errors.destZip && <p className="text-red-400 text-sm">{errors.destZip.message}</p>}
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="estimatedDate" className="block text-xs font-black uppercase tracking-widest text-brand-light">Estimated Move Date</label>
                      <input 
                        type="date" 
                        id="estimatedDate"
                        {...register('estimatedDate')}
                        className="w-full bg-transparent border-2 border-brand-steel px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange min-h-[44px]"
                        aria-required="true"
                        aria-invalid={!!errors.estimatedDate}
                      />
                      {errors.estimatedDate && <p className="text-red-400 text-sm">{errors.estimatedDate.message}</p>}
                    </div>
                  </div>
                  <div className="flex justify-between pt-6">
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="px-6 py-4 font-black uppercase tracking-widest text-brand-light hover:text-brand-orange min-h-[44px]"
                    >
                      Back
                    </button>
                    <button 
                      type="button" 
                      onClick={nextStep}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 font-black uppercase tracking-widest bg-brand-orange text-brand-dark btn-shadow hover:translate-y-[2px] transition-all min-h-[44px]"
                    >
                      Next Step <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-black uppercase tracking-wide text-brand-light mb-6">Your Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-brand-light">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        {...register('name')}
                        className="w-full bg-transparent border-2 border-brand-steel px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange min-h-[44px]"
                        placeholder="John Doe"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest text-brand-light">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        {...register('phone')}
                        className="w-full bg-transparent border-2 border-brand-steel px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange min-h-[44px]"
                        placeholder="(575) 555-0123"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-brand-light">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        {...register('email')}
                        className="w-full bg-transparent border-2 border-brand-steel px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange min-h-[44px]"
                        placeholder="john@example.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="message" className="block text-xs font-black uppercase tracking-widest text-brand-light">Additional Details (Optional)</label>
                      <textarea 
                        id="message"
                        {...register('message')}
                        rows={3}
                        className="w-full bg-transparent border-2 border-brand-steel px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange"
                        placeholder="Tell us about any stairs, heavy items like pianos, etc."
                        aria-invalid={!!errors.message}
                      ></textarea>
                    </div>
                  </div>
                  
                  {submitResult?.success === false && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 font-medium">
                      {submitResult.message}
                    </div>
                  )}

                  <div className="flex justify-between pt-6">
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="px-6 py-4 font-black uppercase tracking-widest text-brand-light hover:text-brand-orange min-h-[44px]"
                    >
                      Back
                    </button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? "Submitting quote request" : "Submit quote request"}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 font-black uppercase tracking-widest bg-brand-orange text-brand-dark btn-shadow hover:translate-y-[2px] disabled:opacity-70 disabled:hover:translate-y-0 transition-all min-h-[44px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Request <CheckCircle2 className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
