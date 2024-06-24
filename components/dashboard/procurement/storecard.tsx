import Image from 'next/image';
import React from 'react';

interface StoreItems {
  title: string;
  icon: string;
  href?: string;
}

function Storecard({ title, icon }: StoreItems) {
  return (
    <div className="flex h-[210px] w-[274px] flex-col items-center justify-center rounded-xl bg-white shadow hover:cursor-pointer">
      <div className="flex h-[152px] w-[250px] items-center justify-center rounded-md border border-slate-100 bg-slate-50">
        <Image src={icon} alt="store" width={250} height={152} />
      </div>
      <div className="mt-[11px] text-center text-base font-semibold text-slate-950">
        {title}
      </div>
    </div>
  );
}

export default Storecard;
