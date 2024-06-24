import * as React from 'react';
import HeaderSection from '@/components/home/HeaderSection';
// import StreamlineSourcingSection from '@/components/home/streamlineSourcing/StreamlineSourcingSection';
import AffiliateSection from '@/components/home/AffiliateSection';
import TrustedBySection2 from '@/components/home/trustedBySection/TrustedBySection2';
import TestimonialsSection from '@/components/home/testimonialsSection/TestimonialsSection';
import StreamlineSourcingSection from '@/components/affiliate/landing/streamlineSourcing/StreamlineSourcingSection';

const AffiliatePage: React.FC = () => (
  <div className="flex flex-col">
    <HeaderSection />
    <TrustedBySection2 />
    <TestimonialsSection />
    <StreamlineSourcingSection />
    <AffiliateSection />
  </div>
);

export default AffiliatePage;
