'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "How do you price your moving services?",
    answer: "We believe in 100% transparency. Our pricing is based on the volume of items, the distance of the move, and the specific services required (like packing or heavy item handling). We provide free, upfront quotes with no hidden fees."
  },
  {
    question: "Do you handle specialty appliances and heavy furniture?",
    answer: "Yes. \"Heavy Haulers\" isn't just a name. We are fully equipped with the right dollies, straps, and muscle to safely move refrigerators, washers, dryers, safes, and large custom furniture pieces without damaging your property."
  },
  {
    question: "Are my items protected during the move?",
    answer: "Absolutely. We wrap and protect your furniture before it goes onto the truck, and we secure everything tightly for transit. Care, Strength, and Reliability are our core values."
  },
  {
    question: "How far in advance should I book my move?",
    answer: "We recommend booking at least 2-4 weeks in advance, especially for end-of-month moves. However, if you have an urgent or next-day requirement, call us directly at (575) 386-7198 and we'll do our best to accommodate you."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-dark" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-brand-light uppercase tracking-tighter">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-brand-orange mx-auto mt-4 mb-6"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`bento-card overflow-hidden transition-all ${
                  isOpen ? 'border-brand-orange bg-brand-orange/5' : 'hover:border-brand-steel/50'
                }`}
              >
                <button
                  id={`faq-button-${index}`}
                  aria-controls={`faq-content-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl font-black uppercase text-brand-light pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 transition-colors ${
                    isOpen ? 'border-brand-orange bg-brand-orange text-brand-dark' : 'border-brand-steel text-brand-muted'
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-brand-muted font-bold text-lg leading-relaxed border-t border-brand-steel/30 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
