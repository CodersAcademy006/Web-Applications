import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

const CustomizationScreen: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Simulated item data
  const item = {
    id: itemId,
    name: 'Deluxe Burger',
    basePrice: 10.99,
    image: 'https://source.unsplash.com/featured/?burger',
  };

  const customizationOptions: CustomizationOption[] = [
    { id: 'cheese', name: 'Extra Cheese', price: 1.5 },
    { id: 'bacon', name: 'Bacon', price: 2 },
    { id: 'avocado', name: 'Avocado', price: 1.5 },
    { id: 'egg', name: 'Fried Egg', price: 1 },
  ];

  const toggleOption = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const calculateTotalPrice = () => {
    const optionsPrice = selectedOptions.reduce((total, optionId) => {
      const option = customizationOptions.find((opt) => opt.id === optionId);
      return total + (option?.price || 0);
    }, 0);
    return (item.basePrice + optionsPrice).toFixed(2);
  };

  const handleAddToCart = () => {
    // Here you would typically dispatch an action to add the item to the cart
    console.log('Added to cart:', {
      ...item,
      selectedOptions,
      specialInstructions,
      totalPrice: calculateTotalPrice(),
    });
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-blue-500 hover:text-blue-600"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Items
      </motion.button>
      <h1 className="text-4xl font-bold text-center mb-8">Customize Your {item.name}</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Customization Options</h2>
          <div className="space-y-4">
            {customizationOptions.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleOption(option.id)}
                className={`p-4 border rounded-lg cursor-pointer ${
                  selectedOptions.includes(option.id) ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{option.name}</span>
                  <span>${option.price.toFixed(2)}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-2">
              Special Instructions
            </label>
            <textarea
              id="specialInstructions"
              rows={3}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Any special requests?"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-6">
            <p className="text-xl font-bold">Total Price: ${calculateTotalPrice()}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="mt-6 w-full bg-blue-500 text-white text-lg font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CustomizationScreen;