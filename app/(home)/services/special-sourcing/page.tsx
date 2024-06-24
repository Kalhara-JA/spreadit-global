import AffiliateSection from '@/components/home/AffiliateSection';
import MiniHeaderSection from '@/components/home/about-us/miniHeader';
import Section1 from '@/components/home/services/shippingOnly';

const SpecialSourcingPage = () => {
  return (
    <div>
      <MiniHeaderSection
        imageUrl="/home/mini-header-bg.png"
        altText="Special Sourcing"
        title="Special Sourcing"
      />
      <Section1
        imageUrl="/home/services/special-sourcing.svg"
        imageAlt="Spreadit Limited "
        linkHref="/auth/login"
        title="Special Sourcing"
        paragraphs={[
          'Just tell us what you want to buy from China, pay a refundable product sourcing commitment fee, and we get started. We will refund you when you go ahead with the order. ',
          'We will create a WhatsApp group with our sourcing team in China who will handle the sourcing for you. All products we source for you are guaranteed. We will replace them or refund you if there issues. ',
          'With your cooperation, we aim to get to the product payment stage within 5 business days. We are able to negotiate, procure, brand, warehouse and ship the exact products you want from China to any country. You won’t need to lift a finger.',
        ]}
        linkText="Get Started"
      />
      <AffiliateSection />
    </div>
  );
};

export default SpecialSourcingPage;
