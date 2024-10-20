import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-purple-900 text-white py-4 relative z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onMenuToggle} className="mr-4">
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-bold">Royal Self Order Terminal</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">About</a></li>
            <li><a href="#" className="hover:text-purple-300 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;