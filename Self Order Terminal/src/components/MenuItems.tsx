import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { MenuItem } from '../App';

const menuItems: MenuItem[] = [
  { id: 1, name: 'Espresso', price: 2.5, category: 'Drinks', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Rich and bold espresso shot' },
  { id: 2, name: 'Cappuccino', price: 3.5, category: 'Drinks', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Espresso with steamed milk and foam' },
  { id: 3, name: 'Margherita Pizza', price: 10, category: 'Main Courses', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Classic pizza with tomato, mozzarella, and basil' },
  { id: 4, name: 'Caesar Salad', price: 8, category: 'Salads', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Romaine lettuce with Caesar dressing and croutons' },
  { id: 5, name: 'Chocolate Cake', price: 5, category: 'Desserts', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Rich chocolate cake with ganache' },
  { id: 6, name: 'Cheeseburger', price: 9, category: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Juicy beef patty with cheese and fresh veggies' },
  { id: 7, name: 'Club Sandwich', price: 7, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Triple-decker sandwich with turkey, bacon, and lettuce' },
  { id: 8, name: 'California Roll', price: 12, category: 'Sushi', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Sushi roll with crab, avocado, and cucumber' },
  { id: 9, name: 'Mojito', price: 8, category: 'Cocktails', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', description: 'Refreshing cocktail with rum, mint, and lime' },
];

interface MenuItemsProps {
  category: string;
  onAddToCart: (item: MenuItem) => void;
  onViewCart: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ category, onAddToCart, onViewCart }) => {
  const filteredItems = menuItems.filter(item => item.category === category);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 backdrop-filter backdrop-blur-sm">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-purple-300">{item.name}</h3>
              <p className="text-gray-300 mb-2">{item.description}</p>
              <p className="text-yellow-400 font-bold">${item.price.toFixed(2)}</p>
              <button
                onClick={() => onAddToCart(item)}
                className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onViewCart}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
      >
        <ShoppingCart size={24} />
      </button>
    </div>
  );
};

export default MenuItems;