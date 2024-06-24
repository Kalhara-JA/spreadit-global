'use client';

import React from 'react';
import SearchPage from './order-table-search';
import TableData from './table-components/table';
import Products from './table-components/products.json';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

function MoreOrders() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-row items-center justify-between p-[25px]">
        <div className="text-center text-xl font-bold text-slate-800">
          {Products.Product.length} Products
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="text-[13px] font-normal text-slate-500">
            Show entries
          </div>
          <SearchPage />
        </div>
      </div>
      <div>
        <TableData />
      </div>
      {/* total cost of order */}
      <div className="flex flex-col gap-4 border border-slate-200 p-[25px]">
        <div>
          <div className="text-lg font-bold text-slate-800">
            Total Cost of Order:
          </div>
          <div className="text-base text-slate-600">
            ¥423.50 Yuan or $60.50 USD or ₦23,292.50 Naira
          </div>
        </div>
      </div>
      {/* estimated cost of order */}

      <div className="flex flex-col gap-4 border border-slate-200 p-[25px]">
        <div className="text-lg font-bold text-slate-800">
          Estimated Cost of Order:
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-20 text-base text-slate-950">
            <p className="w-72">Domestic Shipping Cost within China:</p> $0.10
          </div>
          <div className="flex gap-20 text-base text-slate-950">
            <p className="w-72">International Shipping Cost:</p> $0.10
          </div>
          <div className="flex gap-20 text-base text-slate-600">
            $2.20 USD or ₦1,870.00 Naira
          </div>
        </div>
        {/* important notice */}
        <div>
          <div className="text-sm font-semibold text-red-400">
            Important Notice:
          </div>
          <div className="text-sm font-normal text-red-400">
            If this cost is higher than the actual cost which will be determined
            later at the China office, we will refund you. If the actual cost is
            higher than this estimated cost, you will be required to make a
            balance payment.
          </div>
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 border border-slate-200 p-[25px]">
        <div className="flex gap-20">
          <p className="w-64">Estimated Total Weight of Order:</p> <p>0.2 Kg</p>
        </div>
        <div className="flex gap-20">
          <p className="w-64"> Shipping Cost:</p>
          <p>China Air Freight</p>
        </div>
        <div className="flex gap-20">
          <p className="w-64"> Rate:</p>
          <p>$10.5 (per Kg)</p>
        </div>
        <div className="flex gap-20">
          <p className="w-64">Destination Country:</p>
          <p>Nigeria</p>
        </div>
        <div className="flex gap-20">
          <p className="w-64">Port of Exit:</p>
          <p>HONG KONG</p>
        </div>
      </div>
      <div className="flex items-center gap-4 border border-slate-200 p-[25px]">
        <p className="pr-[84px]">Grand total cost:</p>
        <div>
          <span className="text-2xl font-bold text-indigo-800">$99.75 USD</span>{' '}
          Or{' '}
          <span className="text-2xl font-bold text-green-500">
            ₦84,783.25 Naira
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-[25px]">
        <p>
          15% Service Charge of{' '}
          <span className="font-semibold text-slate-600">$12.60 USD</span>{' '}
          inclusive.<span></span>
        </p>
        <p>
          7.5% VAT of{' '}
          <span className="font-semibold text-slate-600">$0.95 USD</span>{' '}
          inclusive.
        </p>
        <p>
          Exchange Rate (Naira):
          <span className="font-semibold text-slate-600"> $1 USD </span>
          <span className="font-semibold text-slate-600"> = ₦850 Naira</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-between border border-slate-200 p-[25px] lg:flex-row">
        <div className="flex flex-col items-center text-base text-slate-800 lg:items-start">
          <div>
            Agree to <span className="text-indigo-800">Terms & Condition</span>
          </div>
          <div className="flex items-center text-center text-sm text-slate-800 lg:gap-2">
            <Checkbox />
            You must agree to our Terms & Conditions before proceeding
          </div>
        </div>
        <div className="flex flex-col gap-[15px] lg:flex-row">
          <Button className="flex items-center gap-2 bg-slate-400">
            <Image
              loading="lazy"
              src="/icons/bank.svg"
              alt="Logo"
              width={20}
              height={20}
              className="items-center self-center"
            />
            Payment via Paystack
          </Button>
          <Button className="flex items-center gap-2">
            <Image
              loading="lazy"
              src="/icons/bank.svg"
              alt="Logo"
              width={20}
              height={20}
              className="items-center self-center"
            />
            Bank Deposit & Int’t Payments
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 border border-slate-200 p-[25px] lg:flex-row">
        <div className="flex flex-col gap-3">
          <div>Your order is Comprehensively Insured.</div>
          <div className="flex">
            <Image
              alt="secure"
              src="/images/secure.png"
              width={90}
              height={36}
            />
            <Image
              alt="secure"
              src="/images/cards.png"
              width={346}
              height={36}
            />
          </div>
        </div>
        <div className="relative flex h-20 justify-end rounded-[14px] border border-dashed border-indigo-800 bg-slate-100 lg:w-[581px]">
          <div className="flex items-center">
            <Image
              loading="lazy"
              src="/icons/cupon.svg"
              alt="Logo"
              width={20}
              height={20}
              className="absolute ml-8"
            />
            <Input
              className="m-[10px] h-[60px] w-72 rounded-[10px] bg-white pl-16 lg:w-[561px]"
              placeholder="Enter coupon code"
            />
          </div>
          <Button type="submit" className="absolute m-5">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MoreOrders;
