import AffiliateSection from '@/components/home/AffiliateSection';
import MiniHeaderSection from '@/components/home/about-us/miniHeader';
import PrivacyPolicy from '@/components/home/privacy-policy/privacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <MiniHeaderSection
        imageUrl="/home/mini-header-bg.png"
        altText="Privacy Policy"
        title="Privacy Policy"
      />
      <div className="mt-14 flex justify-center">
        <PrivacyPolicy />
      </div>

      <AffiliateSection />
    </div>
  );
};

export default PrivacyPolicyPage;
