import AffiliateSection from '@/components/home/AffiliateSection';
import MiniHeaderSection from '@/components/home/about-us/miniHeader';
import Section1 from '@/components/home/about-us/section1';
import Section2 from '@/components/home/about-us/section2';
import Section3 from '@/components/home/about-us/section3';

const AboutUsPage = () => {
  return (
    <div>
      <MiniHeaderSection
        imageUrl="/home/mini-header-bg.png"
        altText="About Spreadit Limited"
        title="About Spreadit Limited"
      />

      <Section1
        imageUrl="/home/about-us/section-1.svg"
        imageAlt="Spreadit Limited "
        linkHref="/auth/login"
        title="Spreadit Limited "
        paragraphs={[
          'is a leading product sourcing company with a global presence, specializing in facilitating the procurement and shipping of goods from China, the USA, South Korea, and the UAE.',
          'With a diverse clientele of over 30,000 individuals and businesses worldwide, Spreadit Limited has established itself as a trusted partner in the international trade arena.',
        ]}
        linkText="Get Started"
      />
      <Section2 />
      <Section3 />
      <AffiliateSection />
    </div>
  );
};

export default AboutUsPage;
