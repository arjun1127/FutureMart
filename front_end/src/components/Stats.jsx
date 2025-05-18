import React from 'react';
import CountUp from 'react-countup';
import { FaShoppingCart, FaUsers, FaGlobe, FaBoxOpen } from 'react-icons/fa';

const statsData = [
  {
    id: 1,
    label: 'Products Sold',
    value: 12,
    suffix: '+',
    icon: <FaShoppingCart className="text-indigo-400 text-3xl mb-2" />,
    percentage: 60,
  },
  {
    id: 2,
    label: 'Registered Sellers',
    value: 15,
    suffix: '+',
    icon: <FaUsers className="text-green-400 text-3xl mb-2" />,
    percentage: 75,
  },
  {
    id: 3,
    label: 'Countries Served',
    value: 5,
    suffix: '+',
    icon: <FaGlobe className="text-yellow-400 text-3xl mb-2" />,
    percentage: 30,
  },
  {
    id: 4,
    label: 'Orders Delivered',
    value: 10,
    suffix: '+',
    icon: <FaBoxOpen className="text-pink-400 text-3xl mb-2" />,
    percentage: 50,
  },
];

export default function Stats() {
  return (
    <div className="bg-[#1a1a1a] py-20 px-6 mt-24 mb-24">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
        Platform Stats
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#2a2a2a] rounded-xl py-10 px-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex justify-center">{stat.icon}</div>
            <div className="text-3xl font-bold text-white mt-2">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
            </div>
            <div className="text-gray-400 text-sm mb-4">{stat.label}</div>
            {/* Progress Bar */}
            <div className="h-2 w-full bg-gray-700 rounded-full">
              <div
                className="h-2 bg-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${stat.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
