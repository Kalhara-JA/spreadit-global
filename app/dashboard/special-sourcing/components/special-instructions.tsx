import React from 'react';
import Image from 'next/image';

function SpecialInstructions() {
  return (
    <div className="relative flex justify-center xl:h-[860px] xl:w-[567px]">
      <div className="absolute mx-2 my-3 h-[320px] rounded-[10px] bg-white backdrop-blur-3xl md:bottom-0 md:mx-0 md:ml-2 lg:ml-0 lg:w-[527px]">
        <div className="m-5">
          <div className="text-xl font-bold text-slate-800">
            Special Instructions
          </div>
          <p className="text-base font-normal text-slate-600">
            You can pay your fee using the methods below:
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex h-[54px] items-center gap-10 rounded-[10px] border border-slate-100 bg-slate-50 pl-2 md:ml-5 xl:w-[487px] xl:gap-[125px]">
            <Image
              src="/icons/specialsourcing/paystack.png"
              alt="Paystack"
              width={38}
              height={38}
            />
            Pay with Paystack
          </div>
          <div className="flex h-[54px] items-center gap-10 rounded-[10px] border border-slate-100 bg-slate-50 pl-2 md:ml-5 xl:w-[487px] xl:gap-[115px]">
            <Image
              src={'/icons/specialsourcing/flutterwave.png'}
              alt="Flutterwave"
              width={38}
              height={38}
            />
            Pay with Flutterwave
          </div>
          <div className="flex h-[54px] items-center gap-10 rounded-[10px] border border-slate-100 bg-slate-50 pl-2 md:ml-5 xl:w-[487px] xl:gap-[137px]">
            <Image
              src={'/icons/specialsourcing/stripe.png'}
              alt="Stripe"
              width={38}
              height={38}
            />
            Pay with Stripe
          </div>
        </div>
      </div>
      <Image
        src="/images/special-sourcing.png"
        alt="Special Sourcing Instructions"
        width={567}
        height={860}
        className="h-full w-full rounded-md"
      />
    </div>
  );
}

export default SpecialInstructions;
