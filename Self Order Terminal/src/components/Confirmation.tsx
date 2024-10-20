import React from 'react';
import { Check } from 'lucide-react';

interface ConfirmationProps {
  onNewOrder: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ onNewOrder }) => {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 max-w-md mx-auto text-center backdrop-filter backdrop-blur-sm">
      <div className="mb-6 flex justify-center">
        <div className="bg-green-500 rounded-full p-3 animate-bounce">
          <Check size={48} className="text-white" />
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-purple-300">Order Confirmed!</h2>
      <p className="mb-6 text-gray-300">
        Thank you for your royal order. Your feast will be prepared with the utmost care and delivered to your table shortly.
      </p>
      <button
        onClick={onNewOrder}
        className="bg-yellow-500 text-purple-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
      >
        Place New Order
      </button>
    </div>
  );
};

export default Confirmation;