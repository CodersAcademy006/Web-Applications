import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const categories = [
  { id: 'burgers', name: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 'pizza', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 'pasta', name: 'Pasta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 'drinks', name: 'Drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const MenuCategoryScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="mb-4 flex items-center text-blue-500 hover:text-blue-600"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Welcome
      </motion.button>
      <h1 className="text-4xl font-bold text-center mb-8">Menu Categories</h1>
      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/items/${category.id}`)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-center">{category.name}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryScreen;