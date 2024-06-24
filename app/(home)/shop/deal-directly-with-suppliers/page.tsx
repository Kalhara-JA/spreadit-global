'use client';

import AffiliateSection from '@/components/home/AffiliateSection';
import MiniHeaderSection from '@/components/home/about-us/miniHeader';
import Section1 from '@/components/home/shop/section1';

const PaySupplierPage = () => {
  return (
    <div>
      <MiniHeaderSection
        imageUrl="/home/mini-header-bg.png"
        altText="Deal Directly With Suppliers"
        title="Deal Directly With Suppliers"
      />
      <Section1
        imageUrl="/home/services/deal-direct.svg"
        imageAlt="Spreadit Limited "
        linkHref="https://spreadit.selar.co"
        title={['Deal  ', 'Directly', 'With Suppliers']}
        paragraphs={[
          'Our teams in China and Lagos have worked tirelessly to publish the Top Ten Suppliers in China series. These documents contain the direct contacts of verified suppliers in China who sell quality products. ',
          'We have followed strict criteria in adding suppliers to these lists. All you need to do is purchase the document to get in touch with these suppliers. If you have any difficulties dealing with them, simply contact us via the WhatsApp button on our website. ',
        ]}
        linkText="Get Started"
      />
      <AffiliateSection />
    </div>
  );
};

export default PaySupplierPage;
