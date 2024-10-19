import React from 'react';
import { User, Mail, Phone, Home, Sun, Wind, Battery } from 'lucide-react';

const Profile: React.FC = () => {
  const user = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Green Street, Eco City, EC 12345',
    energySources: [
      { type: 'Solar', capacity: 5 },
      { type: 'Wind', capacity: 2 },
      { type: 'Battery', capacity: 10 },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-green-500 text-white rounded-full p-3">
            <User size={48} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">Community Energy Producer</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="text-gray-400 mr-2" size={18} />
                {user.email}
              </li>
              <li className="flex items-center">
                <Phone className="text-gray-400 mr-2" size={18} />
                {user.phone}
              </li>
              <li className="flex items-center">
                <Home className="text-gray-400 mr-2" size={18} />
                {user.address}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Energy Sources</h3>
            <ul className="space-y-2">
              {user.energySources.map((source, index) => (
                <li key={index} className="flex items-center">
                  {source.type === 'Solar' && <Sun className="text-yellow-500 mr-2" size={18} />}
                  {source.type === 'Wind' && <Wind className="text-blue-500 mr-2" size={18} />}
                  {source.type === 'Battery' && <Battery className="text-green-500 mr-2" size={18} />}
                  {source.type} - {source.capacity} kW
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
