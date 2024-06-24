import Image from 'next/image';
import React from 'react';

const BuyPhones = () => {
  return (
    <div className="flex rounded-3xl bg-white pl-6 pt-5 shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="w-full">
        <div className="flex flex-col">
          <div className="text-2xl font-[860] capitalize">
            Buy Phones From China
          </div>
          <div className="mt-3 leading-6 text-slate-600">
            We ship the best brand new and used phones from china.Phones are
            deliverd within 10 business days after payment
          </div>

          <div className="ml-0 2xl:ml-20 2xl:w-[450px]">
            <Image
              src={'/images/buyChainesPhone.png'}
              width={300}
              height={150}
              alt="china phone"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPhones;
