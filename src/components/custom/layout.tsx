import React, { ReactNode, useState } from 'react';
import NavigationMenu from '@/components/custom/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 p-4">
        <button className="text-black" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <NavigationMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="flex-1 bg-gray-200 p-10 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
