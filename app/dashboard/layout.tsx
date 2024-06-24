'use client';

import Sidebar from '@/components/dashboard/sidenavbar/components/sidebar';
import Header from '@/components/dashboard/header/header';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';

type UserLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = (props: UserLayoutProps) => {
  const { isOpen } = useSidebar();

  return (
    <div className="flex border-collapse flex-col bg-slate-50">
      <div className="a-auto z-20 flex">
        <Sidebar className="z-20 h-full bg-[#0E0E1F] text-white" />
      </div>
      <Header />
      <div className="mt-[90px] flex flex-col lg:ml-[80px]">
        <main
          className={cn(
            'hide-scrollbar h-full overflow-x-hidden overflow-y-scroll bg-secondary/10 pb-1 transition-all duration-200',
            isOpen && 'lg:ml-[160px]',
          )}
        >
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
