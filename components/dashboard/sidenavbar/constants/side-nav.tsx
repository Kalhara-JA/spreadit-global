'use client';

import { BookOpenCheck } from 'lucide-react';
import {
  Category,
  Frame,
  Pay,
  SpecialSource,
  Shipping,
  BuyPhones,
  Shop,
  Message,
  Profile,
  Update,
  Logout,
} from '../components/icons/category';
import { type NavItem } from '../types';

export const NavItems: NavItem[] = [
  {
    title: 'Videos',
    icon: Category,
    href: '/',
    color: 'text-white',
    isChidren: true,
    children: [
      {
        title: 'Example-01',
        icon: BookOpenCheck,
        color: 'text-white',
        href: '/',
      },
    ],
  },
  {
    title: 'Procurement & Shipping',
    icon: Frame,
    href: '/dashboard/procurement',
    color: 'text-white',
  },
  {
    title: 'Pay Supplier',
    icon: Pay,
    href: '/dashboard/pay-supplier',
    color: 'text-white',
  },
  {
    title: 'Special Sourcing',
    icon: SpecialSource,
    href: '/dashboard/special-sourcing',
    color: 'text-white',
  },
  {
    title: 'Shipping only',
    icon: Shipping,
    href: '/dashboard/shipping-only',
    color: 'text-white',
  },
  {
    title: 'Buy Phones',
    icon: BuyPhones,
    href: '/',
    color: 'text-white',
    isChidren: true,
    children: [
      {
        title: 'Example-01',
        icon: BookOpenCheck,
        color: 'text-white',
        href: '/',
      },
    ],
  },
  {
    title: 'Shop',
    icon: Shop,
    href: '/shop',
    color: 'text-white',
  },
  {
    title: 'Messages',
    icon: Message,
    href: '/dashboard/message',
    color: 'text-white',
  },
  {
    title: 'Profile Update',
    icon: Profile,
    href: '/dashboard/profile-update',
    color: 'text-white',
  },
  {
    title: 'Update Password',
    icon: Update,
    href: '/dashboard/update-password',
    color: 'text-white',
  },
  {
    title: 'Logout',
    icon: Logout,
    href: '/logout',
    color: 'text-white',
  },
];
