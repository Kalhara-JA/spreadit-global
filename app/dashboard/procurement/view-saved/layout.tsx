'use client';

import Header from './components/header';
type UserLayoutProps = {
  children: React.ReactNode;
};

const ProcurementLayout = (props: UserLayoutProps) => {
  return (
    <main className="bg-slate-50">
      <Header />
      {props.children}
    </main>
  );
};

export default ProcurementLayout;
