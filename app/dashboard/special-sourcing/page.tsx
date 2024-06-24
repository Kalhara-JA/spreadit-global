import React from 'react';
import SpecialSourcingForm from './components/special-sourcing-form';
import SpecialInstructions from './components/special-instructions';

function SpecialSourcing() {
  return (
    <div className="2xl:ml-72">
      <div className="p-[25px]">
        <div className="text-[28px] font-bold text-slate-800">
          Special Sourcing
        </div>
        <div className="text-base font-normal text-slate-600 xl:w-[930px]">
          Just tell us what you want to buy from China, pay a refundable product
          sourcing commitment fee, and we get started. We will refund you when
          you go ahead with the order.{' '}
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-slate-50 px-[25px] xl:flex-row xl:items-start">
        <div>
          <SpecialSourcingForm />
        </div>
        <div>
          <SpecialInstructions />
        </div>
      </div>
    </div>
  );
}

export default SpecialSourcing;
