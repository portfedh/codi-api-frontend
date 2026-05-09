import HeroSection from '../components/home/HeroSection';
import WhatIsCodiSection from '../components/home/WhatIsCodiSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import UseCasesSection from '../components/home/UseCasesSection';
import OpenSourceSection from '../components/home/OpenSourceSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatIsCodiSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <OpenSourceSection />
      <ContactSection />
    </div>
  );
}
