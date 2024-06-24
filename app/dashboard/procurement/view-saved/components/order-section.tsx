import React from 'react';
import OrderCard from './order-card';

interface Order {
  id: number;
  title: string;
  orderNumber: string;
}
const Orders: Order[] = [
  {
    id: 1,
    title: 'Nnenna’s Order',
    orderNumber: 'PSD-QDCDR-1573492493',
  },
  {
    id: 2,
    title: 'Nnenna’s Order',
    orderNumber: 'PSD-QDCDR-1573492493',
  },
  {
    id: 3,
    title: 'Nnenna’s Order',
    orderNumber: 'PSD-QDCDR-1573492493',
  },
  {
    id: 4,
    title: 'Nnenna’s Order',
    orderNumber: 'PSD-QDCDR-1573492493',
  },
];

function OrderSection() {
  return (
    <div className="flex w-full flex-col gap-3 2xl:ml-[25px]">
      {Orders.map((Order) => (
        <OrderCard key={Order.id} id={Order.id} order={Order} />
      ))}
    </div>
  );
}

export default OrderSection;
