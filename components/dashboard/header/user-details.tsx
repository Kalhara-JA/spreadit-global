import { type AvatarProps } from '@radix-ui/react-avatar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { User as UserIcon } from 'lucide-react';
export interface UserAvatarProps extends AvatarProps {
  user: {
    name: string;
    image: string;
    email: string;
  };
}

export function UserAvatar({ user }: UserAvatarProps) {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="inline-flex items-center justify-start gap-2.5 hover:cursor-pointer md:mr-12 md:h-[50px] md:w-[232px]">
      <Avatar className="hidden h-12 w-12 border-collapse border transition-all duration-300 hover:border-[#0E0E1F] md:block">
        {user.image ? (
          <AvatarImage alt="Picture" src={user.image} />
        ) : (
          <AvatarFallback>
            <span className="sr-only">{user.name}</span>
            <UserIcon className="h-4 w-4" />
          </AvatarFallback>
        )}
      </Avatar>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Avatar className="h-12 w-12 border-collapse border transition-all duration-300 hover:border-[#0E0E1F] md:hidden">
            {user.image ? (
              <AvatarImage alt="Picture" src={user.image} />
            ) : (
              <AvatarFallback>
                <span className="sr-only">{user.name}</span>
                <UserIcon className="h-4 w-4" />
              </AvatarFallback>
            )}
          </Avatar>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex w-[264px] flex-col bg-[#0E0E1F] text-white md:hidden"
        >
          <div className="flex h-full flex-col gap-4">
            <div className="flex gap-2">
              <Avatar className="hover:border-solid-black h-[50px] w-[50px] border-collapse border transition-all duration-300">
                {user.image ? (
                  <AvatarImage alt="Picture" src={user.image} />
                ) : (
                  <AvatarFallback>
                    <span className="sr-only">{user.name}</span>
                    <UserIcon className="h-12 w-12" />
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="hide-scrollbar w-[256px] overflow-y-auto">
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="text-sm font-semibold text-white transition-all duration-300 hover:underline md:text-base">
                    {user.name}
                  </p>
                  <p className="text-xs font-normal text-white md:text-sm">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/notification"
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
              className={cn(
                buttonVariants({}),
                'group relative mr-0 flex h-12 justify-start rounded-r-none bg-white/10 pr-0 text-sm font-normal',
              )}
            >
              <Image
                src="/icons/settings.svg"
                alt="Logo"
                width={20}
                height={20}
              />
              <span className={cn('absolute left-12 text-sm duration-200')}>
                Settings
              </span>
            </Link>
            <Link
              href="/settings"
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
              className={cn(
                buttonVariants({}),
                'group relative mr-0 flex h-12 justify-start rounded-r-none bg-white/10 pr-0 text-sm font-normal',
              )}
            >
              <Image
                src="/icons/notification.svg"
                alt="Logo"
                width={20}
                height={20}
              />
              <span className={cn('absolute left-12 text-sm duration-200')}>
                Notification{' '}
              </span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:block">
        <p className="text-sm font-semibold text-slate-800 hover:underline md:text-base">
          {user.name}
        </p>
        <p className="text-xs font-normal text-slate-600 md:text-sm">
          {user.email}
        </p>
      </div>
    </div>
  );
}
