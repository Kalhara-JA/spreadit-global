import AffiliateSection from '@/components/home/AffiliateSection';
import MiniHeaderSection from '@/components/home/about-us/miniHeader';
import Section1 from '@/components/home/services/generalProcurement';

const BuyPhonesFromChina = () => {
  return (
    <div>
      <MiniHeaderSection
        imageUrl="/home/mini-header-bg.png"
        altText="Buy Phones From China"
        title="Buy Phones From China"
      />
      <Section1
        imageUrl="/home/services/buy-phone-from-china.svg"
        imageAlt="Spreadit Limited "
        linkHref="/auth/login"
        title="Buy Phones From China"
        subtitle="BRANDS WE DEAL WITH"
        paragraphs={[
          'At the moment, we ship only iPhones and Samsung phones from China. We will start shipping other phones when we get better deals from verified suppliers in China. ',
          'Our phones come with a one year warranty, whether used or brand new. They also come with all accessories for the model of phone you are buying and in their boxes. ',
          'Click the button below to download our price lists. Note that our prices are in Chinese RMB and includes shipping to the countries in the list. You will need to covert the prices to your currency using the prevailing exchange rate. ',
        ]}
        linkText="Download"
        linkhref2=""
        linktext2=""
        images={[
          {
            src: '/home/shop/apple-logo.svg',
            alt: '',
            className: 'w-[155px]',
          },
          {
            src: '/home/shop/samsung-logo.svg',
            alt: '',
            className: 'w-[175px]',
          },
        ]}
        imageWrapperClasses="max-md:mt-10"
      />
      <AffiliateSection />
    </div>
  );
};

export default BuyPhonesFromChina;
