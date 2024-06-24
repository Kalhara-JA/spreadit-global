'use client';

import Footer from '@/components/home/Footer';
import NavBar from '@/components/home/NavBar';
import { ReactNode } from 'react';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="relative">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
