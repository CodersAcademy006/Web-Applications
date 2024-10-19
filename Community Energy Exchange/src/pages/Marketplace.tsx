import React, { useState } from 'react';
import { Sun, Wind, Battery, ArrowUpDown } from 'lucide-react';

const Marketplace: React.FC = () => {
  const [energyListings, setEnergyListings] = useState([
    { id: 1, type: 'Solar', amount: 50, price: 0.12, seller: 'John D.' },
    { id: 2, type: 'Wind', amount: 30, price: 0.10, seller: 'Emma S.' },
    { id: 3, type: 'Solar', amount: 25, price: 0.11, seller: 'Michael R.' },
    { id: 4, type: 'Battery', amount: 40, price: 0.13, seller: 'Sarah L.' },
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Energy Marketplace</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Available Energy Listings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount (kWh)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price ($/kWh)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Seller
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {energyListings.map((listing) => (
                <tr key={listing.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {listing.type === 'Solar' && <Sun className="text-yellow-500 mr-2" size={18} />}
                      {listing.type === 'Wind' && <Wind className="text-blue-500 mr-2" size={18} />}
                      {listing.type === 'Battery' && <Battery className="text-green-500 mr-2" size={18} />}
                      {listing.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{listing.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${listing.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{listing.seller}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
                      <ArrowUpDown size={16} className="mr-2" />
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
