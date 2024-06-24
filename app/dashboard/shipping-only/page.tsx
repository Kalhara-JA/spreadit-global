import React from 'react';
import ShippingOnlyForm from './components/shipping-sourcing-form';
import ShippingInstructions from './components/shipping-instructions';

function ShippingOnly() {
  return (
    <div className="2xl:ml-72">
      <div className="p-[25px]">
        <div className="text-[28px] font-bold text-slate-800">
          Shipping Only
        </div>
        <div className="text-base font-normal text-slate-600 xl:w-[930px]">
          You have already bought your goods yourself or you wish to handle
          procurement yourself? No problem. We can handle only shipping for you
          and we have an address in China where you can send your goods to.
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-slate-50 px-[25px] xl:flex-row xl:items-start">
        <div>
          <ShippingOnlyForm />
        </div>
        <div>
          <ShippingInstructions />
        </div>
      </div>
    </div>
  );
}

export default ShippingOnly;
