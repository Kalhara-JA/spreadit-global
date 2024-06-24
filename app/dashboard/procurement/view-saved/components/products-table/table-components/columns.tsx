'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export type Products = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  unitPrice: number;
  unitWeight: number;
};

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: 'id',
    header: 'SR No.',
    cell: ({ row }) => <div>#{row.original.id}</div>,
  },
  {
    accessorKey: 'product.name',
    header: 'PRODUCT NAME',
    cell: ({ row }) => (
      <div>
        <div className="flex items-center gap-3">
          <Image
            src={row.original.image}
            alt="product"
            className="h-12 w-12 rounded-md"
            width={12}
            height={12}
          />
          <div className="flex flex-col">
            <div className="text-center text-base font-normal text-slate-800">
              {row.original.name}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'quantity',
    header: 'QUANTITY',
    cell: ({ row }) => {
      return <div>{row.original.quantity} Pieces</div>;
    },
  },
  {
    accessorKey: 'unitPrice',
    header: 'UNIT PRICE',
    cell: ({ row }) => {
      return <div className="">${row.original.unitPrice}</div>;
    },
  },
  {
    accessorKey: 'unitWeight',
    header: 'UNIT WEIGHT',
    cell: ({ row }) => {
      return <div>{row.original.unitWeight} Kg</div>;
    },
  },
  {
    id: 'totalPrice',
    accessorKey: 'TOTAL PRICE',
    cell: ({ row }) => {
      const totalPrice = row.original.unitPrice * row.original.quantity;

      return <div>${totalPrice}</div>;
    },
  },
  {
    id: 'actions',
    accessorKey: 'ACTIONS',
    cell: ({ row }) => {
      return (
        <div className="flex gap-2">
          <Button className="item-ceneter flex h-11 w-11 justify-center rounded-full bg-blue-100 p-0 font-normal hover:bg-blue-200">
            <Image
              src="/icons/edit.svg"
              alt="delete"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Button>
          <Button className="item-ceneter flex h-11 w-11 justify-center rounded-full bg-red-100 p-0 font-normal hover:bg-red-200">
            <Image
              src="/icons/delete.svg"
              alt={`${row.original.name}`}
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Button>
        </div>
      );
    },
  },
];
