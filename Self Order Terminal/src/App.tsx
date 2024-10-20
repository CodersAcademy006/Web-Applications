import React, { useState, useEffect } from 'react';
import { Menu, ShoppingCart, CreditCard, Check, DollarSign, QrCode } from 'lucide-react';
import Header from './components/Header';
import CategorySelection from './components/CategorySelection';
import MenuItems from './components/MenuItems';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import BackgroundAnimation from './components/BackgroundAnimation';
import LoadingSpinner from './components/LoadingSpinner';

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export type CartItem = MenuItem & { quantity: number };

export type PaymentMethod = 'credit_card' | 'cash' | 'upi';

const App: React.FC = () => {
  const [step, setStep] = useState<'category' | 'menu' | 'cart' | 'payment' | 'confirmation'>('category');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleStepChange = (newStep: typeof step) => {
    setIsLoading(true);
    setTimeout(() => {
      setStep(newStep);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white flex flex-col relative overflow-hidden">
      <BackgroundAnimation />
      <Header onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {step === 'category' && (
              <CategorySelection
                onSelectCategory={(category) => {
                  setSelectedCategory(category);
                  handleStepChange('menu');
                }}
              />
            )}
            {step === 'menu' && (
              <MenuItems
                category={selectedCategory}
                onAddToCart={addToCart}
                onViewCart={() => handleStepChange('cart')}
              />
            )}
            {step === 'cart' && (
              <Cart
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
                onContinueShopping={() => handleStepChange('category')}
                onProceedToPayment={() => handleStepChange('payment')}
                totalAmount={getTotalAmount()}
              />
            )}
            {step === 'payment' && (
              <Payment
                totalAmount={getTotalAmount()}
                onPaymentComplete={() => handleStepChange('confirmation')}
                onCancel={() => handleStepChange('cart')}
              />
            )}
            {step === 'confirmation' && (
              <Confirmation
                onNewOrder={() => {
                  setCart([]);
                  handleStepChange('category');
                }}
              />
            )}
          </>
        )}
      </main>
      <footer className="bg-purple-900 text-white py-4 text-center relative z-10">
        <p>&copy; 2024 Royal Self Order Terminal. All rights reserved.</p>
      </footer>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white text-purple-900 p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul>
              <li><a href="#" className="block py-2 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#" className="block py-2 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#" className="block py-2 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;