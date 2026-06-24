'use client';

import { motion } from 'motion/react';
import { Phone, Truck } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <>
      {/* Main Hero Screen - Guaranteed to sit beautifully above the fold */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-24 pb-10 sm:pt-28 sm:pb-16" id="home">
        {/* Background abstract elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[image:var(--background-image-hazard)] z-20"></div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-steel/20 blur-[120px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-orange/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/industrial/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl animate-fade-in"
          >
            {/* Elegant location indicator pill */}
            <div className="inline-flex items-center gap-1.5 mb-5 sm:mb-8 px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-brand-steel/60 bg-brand-dark/50 rounded-full max-w-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 shrink-0 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-light whitespace-nowrap">
                Las Cruces, NM & Surrounding Areas
              </span>
            </div>
            
            <h1 className="text-4xl min-[360px]:text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.95] md:leading-[0.9] tracking-tighter mb-4 sm:mb-6 text-balance text-brand-light">
              MOVING IS <span className="text-brand-orange">HEAVY</span>.<br />
              WE MAKE IT EASY.
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-brand-light/85 mb-6 sm:mb-8 max-w-xl md:max-w-3xl mx-auto text-balance">
              Don&apos;t break your back—call Heavy Haulers. Fast, reliable, and affordable moving services in Las Cruces.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.div
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#estimate-form"
                  className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-black uppercase bg-brand-orange text-brand-dark btn-shadow hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-steel)] transition-all w-full sm:w-auto overflow-hidden min-h-[44px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free Quote
                    <motion.div
                      variants={{
                        hover: { x: 5 }
                      }}
                    >
                      <Truck className="w-5 h-5" />
                    </motion.div>
                  </span>
                  {/* Truck exhaust/speed lines effect on hover */}
                  <motion.div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0"
                    variants={{
                      hover: { opacity: 0.3, x: 20 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-4 h-0.5 bg-brand-dark rounded-full"></div>
                    <div className="w-2 h-0.5 bg-brand-dark rounded-full"></div>
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="tel:5753867198"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-black uppercase tracking-widest bg-brand-dark text-brand-light border-2 border-brand-steel hover:bg-brand-steel/50 transition-colors w-full sm:w-auto min-h-[44px]"
                >
                  <Phone className="w-5 h-5 text-brand-orange" />
                  (575) 386-7198
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Highlight Cards Section - Strictly BELOW the fold */}
      <section className="relative bg-brand-dark border-t border-b border-brand-steel/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto"
          >
            {[
              { title: "Big Jobs. Small Jobs.", desc: "We haul it all." },
              { title: "Care. Strength.", desc: "Reliability." },
              { title: "You Relax.", desc: "We haul." },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 sm:p-8 bento-card border-t-4 border-t-brand-orange text-center">
                <div className="flex gap-1 mb-3.5">
                  {[1, 2, 3].map((star) => (
                    <div key={star} className="w-6 h-6 border border-brand-steel flex items-center justify-center text-brand-orange text-xs font-bold">★</div>
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-brand-light tracking-wide">{feature.title}</h3>
                <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mt-1.5">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
