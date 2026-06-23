import Image from 'next/image';

export function About() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden" id="about">
      {/* Abstract orange slash in background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-steel/5 skew-x-12 translate-x-1/4 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border-2 border-brand-steel btn-shadow">
              <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1516528387618-afa90b13e000?auto=format&fit=crop&w=800&h=1000&q=80" 
                alt="Movers carrying box" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark to-transparent p-8 z-20">
                <div className="inline-flex gap-1 mb-2">
                  {[1, 2, 3].map((star) => (
                    <svg key={star} className="w-5 h-5 text-brand-orange fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-orange font-black text-xl uppercase tracking-widest">
                  Zachary McPherson
                </p>
                <p className="text-brand-light font-bold uppercase tracking-widest text-xs">Owner & Operator</p>
              </div>
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[image:var(--background-image-hazard)] -z-10 border-2 border-brand-steel hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange text-brand-dark mb-6 border-2 border-brand-steel btn-shadow">
              <span className="text-xs font-black tracking-widest uppercase">
                Local. Reliable. Strong.
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-brand-light uppercase tracking-tighter mb-6">
              Built on <span className="text-brand-orange">Trust</span> & Heavy Lifting
            </h2>
            
            <div className="h-1 w-24 bg-brand-orange mb-8"></div>
            
            <div className="space-y-6 text-lg text-brand-muted">
              <p>
                Located right here in <strong className="text-brand-light">Las Cruces, NM</strong>, Heavy Haulers Moving Company was built to solve one simple problem: moving is a pain. We take the stress, the sweat, and the heavy lifting out of your transition.
              </p>
              <p>
                As a local owner-operated business, Zachary McPherson puts his name on the line with every job. We don&apos;t just move boxes; we treat your home and your belongings with the utmost care and respect. 
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-brand-steel/30">
                {[
                  "On-Time Arrival Guarantee",
                  "Upfront, Transparent Pricing",
                  "Careful Furniture Wrapping",
                  "Fully Equipped Trucks"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-black uppercase text-xs tracking-widest text-brand-light">
                    <div className="flex-shrink-0 w-6 h-6 border-2 border-brand-orange flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
