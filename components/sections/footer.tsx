import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';
import { BrandIcon } from '@/components/ui/brand-icon';

export function Footer() {
  return (
    <footer className="bg-brand-dark/90 border-t border-brand-steel px-8 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[image:var(--background-image-hazard)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <BrandIcon className="w-10 h-10 text-brand-orange" />
              <div className="leading-none">
                <h1 className="text-xl font-black text-brand-light uppercase tracking-tighter">Heavy Haulers</h1>
                <p className="text-[10px] uppercase tracking-widest text-brand-orange font-bold">Moving Company</p>
              </div>
            </div>
            <p className="text-brand-muted text-sm font-bold uppercase">
              Big jobs. Small jobs. We haul it all. You relax. We haul. Las Cruces&apos; premier moving and hauling experts.
            </p>
            <div className="flex gap-1">
              {[1, 2, 3].map((star) => (
                <div key={star} className="w-8 h-8 border border-brand-steel flex items-center justify-center text-brand-orange">★</div>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-[10px] uppercase text-brand-muted font-bold mb-6 tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:5753867198" className="flex items-center gap-3 text-brand-muted hover:text-brand-orange transition-colors group min-h-[44px]">
                  <div className="w-8 h-8 border border-brand-steel flex items-center justify-center group-hover:border-brand-orange group-hover:text-brand-orange transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-black text-brand-light text-lg tracking-wide">(575) 386-7198</span>
                </a>
              </li>
              <li>
                <a href="mailto:heavyhaulersmoving@yahoo.com" className="flex items-center gap-3 text-brand-muted hover:text-brand-orange transition-colors group min-h-[44px]">
                  <div className="w-8 h-8 border border-brand-steel flex items-center justify-center group-hover:border-brand-orange group-hover:text-brand-orange transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm">heavyhaulersmoving@yahoo.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-muted pt-2">
                <div className="w-8 h-8 border border-brand-steel flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                </div>
                <div className="pt-1 font-bold text-sm uppercase tracking-wider">
                  <span className="text-brand-light">Las Cruces, NM</span><br/>
                  Serving the surrounding areas
                </div>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-[10px] uppercase text-brand-muted font-bold mb-6 tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Residential Moving", href: "#services" },
                { label: "Commercial Moving", href: "#services" },
                { label: "Trash & Junk Removal", href: "#services" },
                { label: "Get a Free Quote", href: "#estimate-form" },
                { label: "About Us", href: "#about" },
                { label: "FAQ", href: "#faq" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-brand-muted font-bold text-sm uppercase tracking-wider hover:text-brand-orange hover:underline decoration-brand-orange underline-offset-4 transition-all min-h-[44px] flex items-center">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Col */}
          <div>
            <h4 className="text-[10px] uppercase text-brand-muted font-bold mb-6 tracking-widest">Connect</h4>
            <a 
              href="https://instagram.com/heavyhaulersmovingco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-brand-steel hover:border-brand-orange transition-all text-brand-light min-h-[44px] bento-card hover:bg-white/5"
            >
              <Instagram className="w-5 h-5 text-brand-orange" />
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-muted font-bold uppercase tracking-widest mb-0.5">Follow Us</span>
                <span className="font-bold text-xs italic tracking-wide">@heavyhaulersmovingco</span>
              </div>
            </a>
            
            <div className="mt-8 flex items-start gap-3 text-brand-muted">
              <div className="w-8 h-8 border border-brand-steel flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-4 h-4 text-brand-orange" />
              </div>
              <div className="pt-1">
                <p className="font-bold text-brand-light uppercase tracking-widest text-[10px] mb-1">Hours of Operation</p>
                <p className="text-xs font-bold uppercase">Monday - Sunday</p>
                <p className="text-xs font-bold uppercase">Available 24/7</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-brand-steel">
          <p className="text-[10px] uppercase font-bold text-brand-muted">© {new Date().getFullYear()} Heavy Haulers Moving Company.</p>
          <div className="flex gap-8">
            <p className="text-[10px] uppercase font-bold text-brand-muted">Las Cruces, New Mexico</p>
            <p className="text-[10px] uppercase font-bold text-brand-muted text-right"><span className="underline decoration-brand-orange">Fully Insured & Licensed</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
