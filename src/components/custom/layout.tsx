import React, { ReactNode } from 'react';
import NavigationMenu from '@/components/custom/navigation';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <NavigationMenu />
      <div className="flex-1 bg-gray-200 p-10 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;