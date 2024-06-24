'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import Stores from '@/components/dashboard/procurement/stores';
import { useRouter } from 'next/navigation';
import CreateOrder from './create-order/components/createOrder';

function Procurement() {
  const router = useRouter();
  return (
    <div className="bg-slate-50 px-[25px] py-[25px] 2xl:px-48">
      <div className="flex flex-col gap-[25px]">
        <div className="flex flex-col items-center justify-start xl:flex-row xl:justify-between">
          <div className="flex w-10/12 flex-col gap-[8px] xl:w-[704px]">
            <div className="text-[28px] font-bold capitalize text-slate-800">
              General Procurement
            </div>
            <p className="text-base font-normal text-slate-600">
              Visit any of the hundreds of e-commerce websites in China to
              search for products. When you find what you want, create an order
              for the products, we buy and ship to you.
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-3 md:flex-row xl:pt-0">
            <Button
              onClick={() => {
                router.push('/dashboard/procurement/view-saved');
              }}
              className="inline-flex h-[49px] items-center justify-center gap-2.5 rounded-xl bg-white px-[30px] py-[15px] text-base text-slate-600 hover:bg-[#161629]/10 xl:w-[201px]"
            >
              Visit saved orders
            </Button>
            <CreateOrder />
          </div>
        </div>
        <div className="mb-[20px] flex w-full justify-center">
          <div className="flex h-[60px] w-full items-center justify-center rounded-xl bg-white px-3 text-sm font-semibold uppercase leading-[21px] text-slate-950 shadow">
            These are some of the stores we can buy products from…
          </div>
        </div>
      </div>
      <Stores />
    </div>
  );
}

export default Procurement;
