'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import React, { useState } from 'react';
import CreateOrderForm from './create-order-form';

function CreateOrder() {
  const [isOpen, setIsOpen] = useState<{ isOpen: boolean }>({ isOpen: false });

  const handleOpenChange = (open: boolean) => {
    setIsOpen({ isOpen: open });
  };

  return (
    <Dialog open={isOpen.isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="h-[49px] px-[30px] py-[15px] font-normal xl:w-[162px]">
          Create Order
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col overflow-auto lg:min-w-[1027px]">
        <DialogHeader>
          <DialogTitle className="border-b text-[28px] text-slate-800">
            Create New Order
          </DialogTitle>
        </DialogHeader>
        <CreateOrderForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default CreateOrder;
