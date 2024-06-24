'use client';

import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

interface PaySupplierSectionProps {
  imageUrl: string;
  imageAlt: string;
  linkHref: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  linkText: string;
  linkhref2: string;
  linktext2: string;
  images: ImageProps[];
  imageWrapperClasses?: string;
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, className = '' }) => (
  <div className={`relative h-14 ${className}`} style={{ height: '56px' }}>
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      layout="fill"
      objectFit="contain"
      className="rounded-full object-contain"
      quality={100}
    />
  </div>
);

const GeneralProcurement: React.FC<PaySupplierSectionProps> = ({
  title,
  paragraphs,
  images,
  imageWrapperClasses,
}) => {
  // const router = useRouter();

  return (
    <div>
      <div className="flex flex-col rounded-3xl bg-white px-5 pb-5 pt-6 shadow-xl transition-transform duration-300 hover:scale-105 sm:ml-0">
        <div className="my-auto flex flex-col justify-center self-stretch text-base tracking-normal max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex flex-col items-center justify-start xl:justify-center">
              <h2 className="text-2xl font-[860] capitalize text-slate-900 max-md:max-w-full">
                {title}
              </h2>
              <p className="mt-3 text-left text-base font-normal leading-6 text-slate-600 max-lg:px-0 max-md:max-w-full lg:px-0 xl:px-4 xl:text-center">
                {paragraphs[0]}
              </p>
            </div>
            <div
              className={`mt-3 flex flex-col flex-wrap content-start pl-0 max-lg:pl-0 ${imageWrapperClasses}`}
            >
              <div className="flex flex-wrap gap-2 md:gap-0 xl:gap-5">
                {images.map((img, idx) => (
                  <ImageComponent key={idx} {...img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralProcurement;
