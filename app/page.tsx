import { Navigation } from '@/components/sections/navigation';
import { Hero } from '@/components/sections/hero';
import { ServicesBento } from '@/components/sections/services-bento';
import { EstimateForm } from '@/components/sections/estimate-form';
import { About } from '@/components/sections/about';
import { Faq } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col">
      <Navigation />
      <Hero />
      <ServicesBento />
      <EstimateForm />
      <About />
      <Faq />
      <Footer />
    </main>
  );
}
