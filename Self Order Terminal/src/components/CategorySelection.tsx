import React from 'react';
import { Coffee, Pizza, Salad, IceCream, Burger, Sandwich, Sushi, Cocktail } from 'lucide-react';

const categories = [
  { name: 'Drinks', icon: Coffee },
  { name: 'Main Courses', icon: Pizza },
  { name: 'Salads', icon: Salad },
  { name: 'Desserts', icon: IceCream },
  { name: 'Burgers', icon: Burger },
  { name: 'Sandwiches', icon: Sandwich },
  { name: 'Sushi', icon: Sushi },
  { name: 'Cocktails', icon: Cocktail },
];

interface CategorySelectionProps {
  onSelectCategory: (category: string) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelectCategory }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onSelectCategory(category.name)}
          className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center backdrop-filter backdrop-blur-sm"
        >
          <category.icon size={48} className="mb-4 text-purple-300" />
          <span className="text-lg font-semibold text-white">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;