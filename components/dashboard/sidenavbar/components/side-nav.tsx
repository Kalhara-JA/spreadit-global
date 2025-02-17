'use client';

import Link from 'next/link';

import { type NavItem } from '../types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import { buttonVariants } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { useEffect, useState } from 'react';

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

export function SideNav({ items, setOpen, className }: SideNavProps) {
  const path = usePathname();
  const { isOpen } = useSidebar();
  const [openItem, setOpenItem] = useState('');
  const [lastOpenItem, setLastOpenItem] = useState('');

  useEffect(() => {
    if (isOpen) {
      setOpenItem(lastOpenItem);
    } else {
      setLastOpenItem(openItem);
      setOpenItem('');
    }
  }, [isOpen]);

  return (
    <nav className="space-y-2">
      {items.map((item) =>
        item.isChidren ? (
          <Accordion
            type="single"
            collapsible
            className="space-y-2"
            key={item.title}
            value={openItem}
            onValueChange={setOpenItem}
          >
            <AccordionItem
              value={item.title}
              className={cn(
                'rounded-r-none border-none',
                isOpen && 'w-[227px]',
              )}
            >
              <AccordionTrigger
                className={cn(
                  buttonVariants({}),
                  'group relative flex h-[50px] justify-between rounded-r-none bg-transparent py-2 pl-4 text-sm font-normal duration-200 hover:bg-white/10 hover:no-underline',
                )}
              >
                <div>
                  <item.icon />
                </div>
                <div
                  className={cn(
                    'absolute left-12 text-sm duration-200',
                    !isOpen && className,
                  )}
                >
                  {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 space-y-4 pb-1">
                {item.children?.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                    className={cn(
                      buttonVariants(),
                      'group relative flex h-12 justify-start gap-x-3 bg-transparent hover:bg-white/10',
                      path.includes(child.href) && 'bg-white/10',
                    )}
                  >
                    <child.icon />
                    <div
                      className={cn(
                        'absolute left-12 text-sm font-normal duration-200',
                        !isOpen && className,
                      )}
                    >
                      {child.title}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => {
              if (setOpen) setOpen(false);
            }}
            className={cn(
              buttonVariants({}),
              'group relative mr-0 flex h-12 justify-start rounded-r-none bg-transparent pr-0 text-sm font-normal hover:bg-white/10',
              path.includes(item.href) && 'bg-white/10',

              isOpen && 'w-[227px]',
            )}
          >
            <item.icon />
            <span
              className={cn(
                'absolute left-12 text-sm duration-200',
                !isOpen && className,
              )}
            >
              {item.title}
            </span>
          </Link>
        ),
      )}
    </nav>
  );
}
