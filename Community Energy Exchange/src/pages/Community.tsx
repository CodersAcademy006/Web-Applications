import React from 'react';
import { Users, Heart, Award, Zap } from 'lucide-react';

const Community: React.FC = () => {
  const communityStats = [
    { title: 'Total Members', value: 1250, icon: <Users className="text-blue-500" size={24} /> },
    { title: 'Energy Donated', value: '5,000 kWh', icon: <Heart className="text-red-500" size={24} /> },
    { title: 'Top Contributors', value: 50, icon: <Award className="text-yellow-500" size={24} /> },
    { title: 'CO2 Saved', value: '2.5 tons', icon: <Zap className="text-green-500" size={24} /> },
  ];

  const charityProjects = [
    { name: 'Local School Solar Project', goal: 10000, current: 7500 },
    { name: 'Community Center Energy Upgrade', goal: 5000, current: 3200 },
    { name: 'Eco-Park Wind Turbine', goal: 15000, current: 9800 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Community Impact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityStats.map((stat, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className="bg-gray-100 rounded-full p-3">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Charity Energy Projects</h2>
        <div className="space-y-4">
          {charityProjects.map((project, index) => (
            <div key={index} className="border-t pt-4 first:border-t-0 first:pt-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{project.name}</h3>
                <span className="text-sm text-gray-600">
                  {((project.current / project.goal) * 100).toFixed(0)}% Funded
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${(project.current / project.goal) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {project.current.toLocaleString()} kWh / {project.goal.toLocaleString()} kWh goal
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
