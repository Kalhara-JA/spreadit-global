import AffiliateSection from '@/components/home/AffiliateSection';
import MiniHeaderSection from '@/components/home/about-us/miniHeader';
import TermsConditions from '@/components/home/terms-conditions/termsConditions';

const TermsAndConditionsPage = () => {
  return (
    <div>
      <MiniHeaderSection
        imageUrl="/home/mini-header-bg.png"
        altText="Terms & Conditions"
        title="Terms & Conditions"
      />
      <div className="mt-14 flex justify-center">
        <TermsConditions />
      </div>

      <AffiliateSection />
    </div>
  );
};

export default TermsAndConditionsPage;
