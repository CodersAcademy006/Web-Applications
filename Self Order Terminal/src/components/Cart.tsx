import React from 'react';
import { CartItem } from '../App';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
  onRemoveItem: (itemId: number) => void;
  onContinueShopping: () => void;
  onProceedToPayment: () => void;
  totalAmount: number;
}

const Cart: React.FC<CartProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onProceedToPayment,
  totalAmount,
}) => {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Your Royal Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-300">Your cart is empty, Your Highness.</p>
      ) : (
        <>
          <ul className="divide-y divide-purple-400">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300">{item.name}</h3>
                    <p className="text-yellow-400">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="text-purple-300 hover:text-purple-100 transition-colors duration-300"
                    disabled={item.quantity === 1}
                  >
                    <Minus size={20} />
                  </button>
                  <span className="mx-2 font-semibold text-purple-300">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="text-purple-300 hover:text-purple-100 transition-colors duration-300"
                  >
                    <Plus size={20} />
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="ml-4 text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-2xl font-bold text-yellow-400">Total: ${totalAmount.toFixed(2)}</p>
            <div>
              <button
                onClick={onContinueShopping}
                className="bg-purple-600 text-white px-4 py-2 rounded-full mr-2 hover:bg-purple-700 transition-colors duration-300"
              >
                Continue Shopping
              </button>
              <button
                onClick={onProceedToPayment}
                className="bg-yellow-500 text-purple-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-300"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;