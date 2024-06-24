'use client';

import MessageForm from '@/components/dashboard/message/message-form';
import React from 'react';
import { useRouter } from 'next/navigation';

function Message() {
  const router = useRouter();
  return (
    <div className="bg-slate-100">
      <div
        className="pl-[25px] pt-[25px] text-[28px] font-bold text-slate-800"
        onClick={() => {
          router.push(`/dashboard/message/message-box`);
        }}
      >
        Message Box
      </div>
      <div className="m-[25px] rounded-xl bg-white">
        <MessageForm />
      </div>
    </div>
  );
}

export default Message;
