import React from 'react';
import Storecard from './storecard';
import { StoreItems } from './storedetails';

interface StoreItems {
  title: string;
  icon: string;
  href?: string;
}

function Stores() {
  return (
    <div className="align-center ml-6 grid gap-5 md:grid-cols-2 md:pl-10 lg:pl-0 xl:ml-0 xl:mr-0 xl:grid-cols-4 2xl:col-span-5">
      {StoreItems.map((Item) => (
        <div key={Item.title}>
          <Storecard title={Item.title} icon={Item.icon} href={Item.href} />
        </div>
      ))}
    </div>
  );
}

export default Stores;
