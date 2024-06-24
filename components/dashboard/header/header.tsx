import { cn } from '@/lib/utils';
import { MobileSidebar } from '../sidenavbar/components/mobile-sidenav';
import { UserNav } from './user-nav';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Search from './search';
import { useSidebar } from '@/hooks/useSidebar';

const user = {
  name: 'James Bond',
  image: '/images/avatar.png',
  email: 'jamesbond007@gmail.com',
};

export default function Header() {
  const { isOpen } = useSidebar();
  return (
    <div
      className={cn(
        'supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-10 h-[90px] bg-background/95 backdrop-blur lg:ml-[80px]',
        isOpen && 'transition-all duration-200 lg:ml-[240px]',
      )}
    >
      <nav className="mx-4 flex h-[90px] items-center justify-between py-[20px] lg:ml-0">
        <div className="flex">
          <div className={cn('flex gap-5 lg:hidden')}>
            <MobileSidebar />
            <div className="item-center flex md:hidden">
              <Image
                loading="lazy"
                src="/icons/search.svg"
                alt=""
                width={20}
                height={20}
                className="hidden h-5 w-5 shrink-0 md:absolute"
              />
            </div>
          </div>
          <div className="flex md:pl-5 lg:ml-[36px] lg:p-0">
            <Search />
          </div>
        </div>
        <div className="flex items-center gap-[23px]">
          <div className="hidden gap-[15px] md:flex">
            <Button className="h-[50px] w-[52px] rounded-[19px] bg-slate-100 hover:bg-[#161629]/10">
              <Image
                src="/icons/notification.svg"
                alt="Logo"
                width={60}
                height={60}
              />
            </Button>
            <Button className="h-[50px] w-[52px] rounded-[19px] bg-slate-100 hover:bg-[#161629]/10">
              <Image
                src="/icons/settings.svg"
                alt="Logo"
                width={60}
                height={60}
              />
            </Button>
          </div>
          <UserNav user={user} />
        </div>
      </nav>
    </div>
  );
}
