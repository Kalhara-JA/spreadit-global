import * as React from 'react';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Separator } from '../ui/separator';

type Location = {
  title: React.ReactNode;
  address: string[];
  contacts: string[];
};

type SocialLink = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
};

const socialLinks: SocialLink[] = [
  {
    src: '/icons/facebook-app-symbol.svg',
    alt: 'facebook',
    width: 24,
    height: 24,
    href: 'https://www.facebook.com/spreaditng',
  },
  {
    src: '/icons/yt-app-symbol.svg',
    alt: 'youtube',
    width: 24,
    height: 24,
    href: 'https://www.youtube.com/channel/UCQz9F5Z0a5W5L6g1H1Qjv5w',
  },
  {
    src: '/icons/tiktok-app-symbol.svg',
    alt: 'tiktok',
    width: 24,
    height: 24,
    href: 'https://www.tiktok.com/@tochukwunkwocha',
  },
  {
    src: '/icons/instagram-app-symbol.svg',
    alt: 'instagram',
    width: 24,
    height: 24,
    href: 'https://www.instagram.com/spreaditworld',
  },
];

const locations: Location[] = [
  {
    title: 'Lagos, Nigeria',
    address: [
      'Spreadit Limited',
      '5 Olutosin Ajayi Street, Ajao Estate, Lagos',
    ],
    contacts: ['+234 803 764 9956', '+234 806 458 3664', '+234 806 839 7263'],
  },
  {
    title: 'Guangzhou, China',
    address: [
      'Room 323 3/F Mingsheng Business Centre 12-20 Guangyang road',
      'M. Baiyun District, Guangzhou, China.',
      '广州市白云区广源中路18号',
      '明圣商贸城明圣商贸城323档',
    ],
    contacts: [],
  },
  {
    title: (
      <>
        Colorado, USA{' '}
        <span className="text-xs capitalize opacity-80">(Mails Only)</span>
      </>
    ),
    address: [
      'Spreadit Sourcing LLC',
      '1942 Broadway Street.',
      'Suite 314C. 80302, Boulder, Colorado',
    ],
    contacts: [],
  },
  {
    title: 'New Jersey, USA',
    address: [
      'Spreadit Limited',
      'C/o Global Ultra Logistics, LLC',
      '221 Frelinghuysen Avenue Newark NJ 07114 USA',
    ],
    contacts: [],
  },
];

const LocationDetails: React.FC<Location> = ({ title, address, contacts }) => (
  <section className="max-w-52 max-md:max-w-40 max-sm:w-36">
    <div className="text-sm font-bold uppercase text-white">{title}</div>
    <div className="mt-2 flex flex-col text-base font-normal leading-6 text-white opacity-80">
      {address.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
    <div className="mt-3 flex flex-col text-base font-normal leading-relaxed text-white opacity-80">
      {contacts.map((contact, index) => (
        <p key={index}>{contact}</p>
      ))}
    </div>
  </section>
);

const Footer: React.FC = () => (
  <div className="flex flex-col justify-center bg-[#161629] px-10 pb-10 pt-10 max-lg:pt-5 max-md:px-5 xl:px-20">
    <div className="flex w-full flex-row justify-between max-lg:flex-col max-lg:flex-wrap">
      <NavigationMenu className="self-center max-lg:w-full">
        <NavigationMenuList className="flex w-full max-md:flex-wrap">
          {[
            { name: 'Terms', href: '/terms-and-conditions' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'About Us', href: '/about-us' },
            {
              name: 'Calculator',
              href: 'https://spreaditglobal.com/calculator',
            },
          ].map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle({
                    className:
                      'text-base font-normal max-lg:px-2 max-md:text-sm',
                  })}
                  active={true}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="relative flex min-w-52 items-start justify-around self-center rounded-full bg-white px-7 py-3.5 max-md:px-5">
        {socialLinks.map((link) => (
          <Link key={link.href} href={link.href} passHref target="_blank">
            <Image
              key={link.src}
              src={link.src}
              alt={link.alt}
              width={link.width}
              height={link.height}
              className="aspect-square w-6 shrink-0 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </div>
    <Separator className="my-8 bg-white opacity-10" />
    <section className="flex flex-wrap items-start justify-between gap-6 pr-4">
      {locations.map((location, index) => (
        <LocationDetails
          key={index}
          title={location.title}
          address={location.address}
          contacts={location.contacts}
        />
      ))}
      <div className="flex flex-col whitespace-nowrap">
        <h3 className="text-sm font-bold uppercase text-white">Email</h3>
        <a
          href="mailto:admin@spreaditglobal.com"
          className="mt-2 text-base leading-6 text-white"
        >
          admin@spreaditglobal.com
        </a>
      </div>
    </section>
    <Separator className="my-8 bg-white opacity-10" />
    <footer className="self-center text-base leading-6 text-white opacity-80 max-md:text-xs">
      Copyright © Spreadit Limited 2024. All Rights Reserved.
    </footer>
  </div>
);

export default Footer;
