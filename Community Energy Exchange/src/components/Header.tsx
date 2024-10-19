import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, BarChart2, Users, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Sun size={24} />
          <span>Community Energy Exchange</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="flex items-center space-x-1 hover:text-green-200">
                <BarChart2 size={18} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="flex items-center space-x-1 hover:text-green-200">
                <Sun size={18} />
                <span>Marketplace</span>
              </Link>
            </li>
            <li>
              <Link to="/community" className="flex items-center space-x-1 hover:text-green-200">
                <Users size={18} />
                <span>Community</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center space-x-1 hover:text-green-200">
                <User size={18} />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
