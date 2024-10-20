import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import orderConfirmationAnimation from '../animations/orderConfirmationAnimation.json';

const OrderConfirmationScreen: React.FC = () => {
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState<number>(0);
  const [counterNumber, setCounterNumber] = useState<number>(0);
  const [orderProgress, setOrderProgress] = useState<number>(0);

  useEffect(() => {
    // Generate random order and counter numbers
    setOrderNumber(Math.floor(Math.random() * 1000) + 1);
    setCounterNumber(Math.floor(Math.random() * 5) + 1);

    // Simulate order progress updates
    const interval = setInterval(() => {
      setOrderProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleReturnToMain = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center"
      >
        <Lottie
          animationData={orderConfirmationAnimation}
          loop={false}
          className="w-64 h-64 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-2xl font-semibold mb-2">Order Number: {orderNumber}</p>
        <p className="text-xl mb-6">Please collect your order from Counter {counterNumber}</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <motion.div
            className="bg-green-500 h-4 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${orderProgress}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
        <p className="text-lg font-semibold mb-6">
          {orderProgress < 100 ? 'Preparing your order...' : 'Your order is ready!'}
        </p>
        {orderProgress === 100 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReturnToMain}
            className="bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Return to Main Menu
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default OrderConfirmationScreen;