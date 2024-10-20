import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ItemSelectionScreen: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, [category, page]);

  const fetchItems = async () => {
    setLoading(true);
    // Simulating API call
    const newItems: MenuItem[] = Array.from({ length: 10 }, (_, i) => ({
      id: `${category}-${Date.now()}-${i}`,
      name: `${category} Item ${page * 10 + i + 1}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: Math.floor(Math.random() * 20) + 5,
      image: `https://source.unsplash.com/featured/?${category},food&${Date.now()}${i}`,
    }));
    setItems((prevItems) => [...prevItems, ...newItems]);
    setLoading(false);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8" onScroll={handleScroll}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/categories')}
        className="mb-4 flex items-center text-blue-500 hover:text-blue-600"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Categories
      </motion.button>
      <h1 className="text-4xl font-bold text-center mb-8 capitalize">{category}</h1>
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/customize/${item.id}`)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more items...</p>}
    </div>
  );
};

export default ItemSelectionScreen;