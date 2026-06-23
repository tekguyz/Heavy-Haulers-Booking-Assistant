'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import Link from 'next/link';
import { BrandIcon } from '@/components/ui/brand-icon';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Quote Estimator', href: '#estimate-form' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-steel/40 py-3 shadow-lg' 
        : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand area */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <BrandIcon className="w-10 h-10 text-brand-orange transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col text-left border-l border-brand-steel pl-2.5">
              <span className="text-sm font-black tracking-tight text-brand-light uppercase leading-none">
                Heavy <span className="text-brand-orange">Haulers</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-brand-muted uppercase leading-none mt-1">
                Moving Company
              </span>
            </div>
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className="text-xs font-black uppercase tracking-widest text-brand-light/90 hover:text-brand-orange transition-colors duration-200 py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:5753867198" 
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-muted hover:text-brand-light transition-colors min-h-[44px] px-3 border border-transparent hover:border-brand-steel rounded-sm"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              (575) 386-7198
            </a>
            
            <Link
              href="#estimate-form"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest bg-brand-orange text-brand-dark btn-shadow hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--color-brand-steel)] transition-all min-h-[44px]"
            >
              Get Free Quote
              <Truck className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden items-center justify-center w-11 h-11 border border-brand-steel text-brand-light hover:text-brand-orange hover:border-brand-orange transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-brand-dark border-b border-brand-steel/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 border-t border-brand-steel/30">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-black uppercase tracking-widest text-brand-light hover:text-brand-orange py-2 px-3 hover:bg-brand-steel/20 border-l-2 border-transparent hover:border-brand-orange transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 border-t border-brand-steel/30 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:5753867198"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-black uppercase tracking-widest text-brand-light border border-brand-steel bg-brand-dark/40 hover:bg-brand-steel/30 transition-all min-h-[44px] w-full text-center"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  (575) 386-7198
                </a>
                
                <Link
                  href="#estimate-form"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-black uppercase tracking-widest bg-brand-orange text-brand-dark btn-shadow min-h-[44px] w-full text-center"
                >
                  Get Free Quote
                  <Truck className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
