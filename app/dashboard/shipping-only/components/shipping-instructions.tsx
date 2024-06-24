import React from 'react';
import Image from 'next/image';

function ShippingInstructions() {
  return (
    <div className="relative flex min-h-[860px] justify-center xl:h-[860px] xl:w-[567px]">
      <div className="96 absolute my-3 h-80 w-80 rounded-[10px] md:bottom-56 md:w-[500px] lg:ml-2 lg:w-[527px]">
        <div className="flex flex-col gap-3">
          <div className="flex gap-10 rounded-[10px] border border-slate-100 bg-white pl-4 pt-5 max-md:w-80 xl:h-[115px] xl:w-[527px] xl:gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-800/10">
              <Image
                src="/icons/specialsourcing/location2.svg"
                alt="Paystack"
                width={27}
                height={27}
              />
            </div>
            <div className="flex flex-col flex-wrap">
              <div className="text-sm font-semibold text-slate-800 md:text-base">
                China address in english
              </div>
              <div className="text-sm font-normal text-slate-600 max-md:w-56 md:text-base lg:w-[419px]">
                Room 323 3/F Mingsheng Business Centre 12-20 Guangyang road, M.
                Baiyun District, Guangzhou, China.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10 rounded-[10px] border border-slate-100 bg-white pl-4 max-md:w-80 lg:w-[527px] xl:h-[115px] xl:gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-400/10">
              <Image
                src="/icons/specialsourcing/location.svg"
                alt="Paystack"
                width={27}
                height={27}
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800 md:text-base">
                China address in Chinese
              </div>
              <div className="flex w-[419px] flex-wrap text-sm font-normal text-slate-600 max-md:w-56 md:text-base">
                广州市白云区广源中路18号明圣商贸城明圣商贸城323档
              </div>
            </div>
          </div>
          <div className="flex items-center gap-10 rounded-[10px] border border-slate-100 bg-white pl-4 max-md:w-80 lg:w-[527px] xl:h-[115px] xl:gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
              <Image
                src="/icons/specialsourcing/phone.svg"
                alt="Paystack"
                width={27}
                height={27}
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800 md:text-base">
                Phone No.
              </div>
              <div className="w-[419px] text-sm font-normal text-slate-600 max-md:w-56 md:text-base">
                +86 135 4442 9491
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap gap-[20px] rounded-[10px] border border-slate-100 bg-slate-50 p-2 pl-[20px] pt-[20px] text-sm font-normal leading-normal text-slate-600 max-md:w-80 lg:text-base xl:h-[156px] xl:w-[527px]">
            <div>
              Kindly note that you are responsible for making sure your supplier
              sends your goods to us and that your goods actually get to us.
            </div>
            <div>
              We will also NOT verify the correctness of what was sent to us as
              we would if we handled procurement for you.
            </div>
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

export default ShippingInstructions;
