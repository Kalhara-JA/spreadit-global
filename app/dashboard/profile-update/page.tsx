import UpdateBankDetailsFrom from '@/components/dashboard/profile-update/bank-detail-form';
import ProfileUpdateForm from '@/components/dashboard/profile-update/profile-update-form';
import React from 'react';

function ProfileUpdate() {
  return (
    <div className="bg-slate-100">
      <div className="pl-[25px] pt-[25px] text-[28px] font-bold text-slate-800">
        Profile Update
      </div>
      <div className="m-6 rounded-xl bg-white">
        <ProfileUpdateForm />
      </div>
      <div className="m-[25px] rounded-xl bg-white">
        <UpdateBankDetailsFrom />
      </div>
    </div>
  );
}

export default ProfileUpdate;
