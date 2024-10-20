import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// This would typically come from your Redux store
const cartItems = [
  { id: '1', name: 'Deluxe Burger', price: 12.99, quantity: 1 },
  { id: '2', name: 'Fries', price: 3.99, quantity: 1 },
  { id: '3', name: 'Soda', price: 1.99, quantity: 1 },
];

const CartScreen: React.FC = () => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/categories')}
        className="mb-4 flex items-center text-blue-500 hover:text-blue-600"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Menu
      </motion.button>
      <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
            </motion.div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCheckout}
            className="mt-6 w-full bg-green-500 text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Proceed to Checkout
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;