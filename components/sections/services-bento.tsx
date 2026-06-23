'use client';

import { motion } from 'motion/react';
import { Home, Building2, UserCircle2, Truck, Trash2, Box } from 'lucide-react';

const services = [
  {
    title: "Residential Moving",
    description: "Homes, Apartments, Condos, Downsizing & More",
    icon: <Home className="w-8 h-8" />,
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Commercial Moving",
    description: "Office & Business relocation handled with precision",
    icon: <Building2 className="w-8 h-8" />,
    span: "col-span-1",
  },
  {
    title: "Labor Services",
    description: "Loading & Unloading with elite care",
    icon: <UserCircle2 className="w-8 h-8" />,
    span: "col-span-1",
  },
  {
    title: "Hauling & Delivery",
    description: "From point A to point B, we haul it all",
    icon: <Truck className="w-8 h-8" />,
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Trash & Junk Removal",
    description: "Junk, Debris, Old Furniture, Garage, Yard",
    icon: <Trash2 className="w-8 h-8" />,
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Cleanouts",
    description: "Garages, Storage Units, Estates",
    icon: <Box className="w-8 h-8" />,
    span: "col-span-1",
  },
];

export function ServicesBento() {
  return (
    <section className="py-24 bg-brand-dark text-brand-light" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
            Services We Provide
          </h2>
          <div className="h-1 w-24 bg-brand-orange mb-6"></div>
          <p className="text-lg text-brand-muted font-bold uppercase tracking-widest">
            You lift enough in life. Let Heavy Haulers handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-fr">
          {services.map((service, index) => {
            const isOrange = index === 4; // Make Trash & Junk Removal orange
            const spanClass = index === 0 ? "md:col-span-2 md:row-span-1" 
                            : index === 1 ? "md:col-span-1 md:row-span-2" 
                            : index === 2 ? "md:col-span-1 md:row-span-1" 
                            : index === 3 ? "md:col-span-1 md:row-span-1" 
                            : index === 4 ? "md:col-span-2 md:row-span-1" 
                            : "md:col-span-1 md:row-span-1";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bento-card p-8 flex flex-col justify-between hover:bg-white/5 ${spanClass} ${isOrange ? 'bg-brand-orange text-brand-dark hover:bg-brand-orange/90' : ''} ${index === 1 ? 'border-t-4 border-t-brand-orange' : ''}`}
              >
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                  {service.icon && <div className="w-32 h-32">{service.icon}</div>}
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm font-bold mt-auto ${isOrange ? 'text-brand-dark/80' : 'text-brand-muted'}`}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
