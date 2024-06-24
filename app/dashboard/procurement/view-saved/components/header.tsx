'use client';

import OrderTypes from './order-types-bar';
import CreateOrder from '../../create-order/components/createOrder';
function Header() {
  return (
    <div className="px-[25px] py-[25px] 2xl:max-w-screen-2xl 2xl:px-48">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-[28px] font-bold capitalize text-slate-800">
          General Procurement
        </div>
        <CreateOrder />
      </div>
      <div>
        <OrderTypes />
      </div>
    </div>
  );
}

export default Header;
