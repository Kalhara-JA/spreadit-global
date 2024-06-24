'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react'; // Importing the spinner icon from lucide-react

interface AccountNotActivatedPageProps {}

const AccountNotActivatedPage: React.FC<AccountNotActivatedPageProps> = () => {
  const router = useRouter();
  const [isLoading, setLoading] = React.useState(false);

  const handleResendActivationEmail = async () => {
    setLoading(true);
    // Simulate an async operation (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    router.push('/auth/category-selection');
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-white">
      <Image
        loading="lazy"
        src="/images/background.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative flex w-full max-w-full flex-col items-center px-2 py-20 sm:px-16">
        <Card className="relative mx-auto flex max-w-lg flex-col justify-center rounded-3xl bg-white p-8 shadow-2xl max-md:px-5">
          <CardContent className="flex flex-col max-md:max-w-full">
            <Image
              loading="lazy"
              src="/icons/warning.svg"
              alt="Warning Icon"
              width={100}
              height={100}
              className="aspect-square w-[100px] max-w-full self-center"
            />
            <div className="mt-6 flex flex-col max-md:max-w-full">
              <div className="mx-8 flex flex-col capitalize max-md:mx-2.5">
                <div className="flex flex-col">
                  <div className="self-center text-sm font-bold text-indigo-800">
                    Oops
                  </div>
                  <div className="mt-1.5 text-center text-2xl font-[860] text-slate-800">
                    We noticed you have not activated your account.
                  </div>
                </div>
                <div className="mt-4 text-center text-sm leading-6 text-slate-600">
                  If you did not receive our activation email, kindly click the
                  button below to receive a fresh activation email.
                </div>
              </div>
              <Button
                className="mt-8 h-14 py-3.5"
                onClick={handleResendActivationEmail}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  'Resend Activation Email'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountNotActivatedPage;
