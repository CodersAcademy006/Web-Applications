import React from 'react';
import { BarChart2, Battery, DollarSign, Leaf } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Energy Production"
          value="250 kWh"
          icon={<Battery className="text-blue-500" size={24} />}
        />
        <DashboardCard
          title="Energy Consumption"
          value="180 kWh"
          icon={<BarChart2 className="text-orange-500" size={24} />}
        />
        <DashboardCard
          title="Surplus Energy"
          value="70 kWh"
          icon={<Leaf className="text-green-500" size={24} />}
        />
        <DashboardCard
          title="Earnings"
          value="$35.00"
          icon={<DollarSign className="text-yellow-500" size={24} />}
        />
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Energy Usage Chart</h2>
        {/* Placeholder for energy usage chart */}
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          Energy usage chart will be implemented here
        </div>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="bg-gray-100 rounded-full p-3">{icon}</div>
      </div>
    </div>
  );
};
export default Dashboard;
