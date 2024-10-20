import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { ArrowLeft } from 'lucide-react';
import paymentProcessingAnimation from '../animations/paymentProcessingAnimation.json';

const PaymentScreen: React.FC = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsProcessing(false);
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {!isProcessing && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/cart')}
          className="mb-4 flex items-center text-blue-500 hover:text-blue-600"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Cart
        </motion.button>
      )}
      <h1 className="text-4xl font-bold text-center mb-8">Payment</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Select Payment Method</h2>
          <div className="space-y-4">
            {['Credit Card', 'Apple Pay', 'Google Pay', 'Cash'].map((method) => (
              <motion.div
                key={method}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPaymentMethod(method)}
                className={`p-4 border rounded-lg cursor-pointer ${
                  paymentMethod === method ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'
                }`}
              >
                {method}
              </motion.div>
            ))}
          </div>
          {isProcessing ? (
            <div className="mt-6">
              <Lottie
                animationData={paymentProcessingAnimation}
                loop
                className="w-64 h-64 mx-auto"
              />
              <p className="text-center text-lg font-semibold">Processing Payment...</p>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePayment}
              disabled={!paymentMethod}
              className={`mt-6 w-full text-white text-lg font-semibold py-3 px-4 rounded-lg transition duration-300 ${
                paymentMethod ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Pay Now
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;