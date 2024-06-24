import UpdatePasswordForm from '@/components/dashboard/update-password/update-password-form';
import React from 'react';

function UpdatePassword() {
  return (
    <div className="bg-slate-100">
      <div className="pl-[25px] pt-[25px] text-[28px] font-bold text-slate-800">
        Update Password
      </div>
      <div className="m-[25px] rounded-xl bg-white">
        <UpdatePasswordForm />
      </div>
    </div>
  );
}

export default UpdatePassword;
