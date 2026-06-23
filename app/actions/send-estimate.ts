'use server';

import { z } from 'zod';

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

export async function sendEstimateAction(prevState: any, formData: FormData) {
  try {
    const rawData = {
      jobType: formData.get('jobType'),
      pickupZip: formData.get('pickupZip'),
      destZip: formData.get('destZip'),
      estimatedDate: formData.get('estimatedDate'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const validatedData = estimateSchema.parse(rawData);

    // In a real app, you would integrate Resend here:
    // await resend.emails.send({
    //   from: 'Heavy Haulers <onboarding@resend.dev>',
    //   to: ['heavyhaulersmoving@yahoo.com'],
    //   subject: `New Lead: ${validatedData.jobType} from ${validatedData.name}`,
    //   text: `...`,
    // });
    
    // Simulating network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: "Your estimate request has been sent! We will contact you shortly." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.issues[0].message };
    }
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
