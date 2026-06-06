import TrustBar from '@/components/TrustBar';
import ProblemSection from '@/components/ProblemSection';
import DomainsSection from '@/components/DomainsSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import CalculatorSection from '@/components/CalculatorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      
      <main>
        <Hero/>
        <TrustBar />
        <ProblemSection />
        <DomainsSection />
        <HowItWorks />
        <PricingSection />
        <CalculatorSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}
