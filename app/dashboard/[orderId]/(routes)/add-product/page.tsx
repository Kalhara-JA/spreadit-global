import AddProductModal from '@/components/dashboard/procurement/view-saved/add-product/add-product-modal';
import React from 'react';

function AddProduct() {
  return (
    <div className="bg-slate-100">
      <div className="flex flex-col pl-6 pt-6 text-[28px] font-bold text-slate-800 lg:flex-row lg:items-center lg:gap-3">
        Add product
        <span className="text-base font-normal text-slate-800">
          (Procurement & Shipping)
        </span>
      </div>
      <div className="m-6 rounded-xl bg-white">
        <div>
          <AddProductModal />
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
