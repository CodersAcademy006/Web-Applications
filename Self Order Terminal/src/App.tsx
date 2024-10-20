import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import MenuCategoryScreen from './components/MenuCategoryScreen';
import ItemSelectionScreen from './components/ItemSelectionScreen';
import CustomizationScreen from './components/CustomizationScreen';
import CartScreen from './components/CartScreen';
import PaymentScreen from './components/PaymentScreen';
import OrderConfirmationScreen from './components/OrderConfirmationScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/categories" element={<MenuCategoryScreen />} />
          <Route path="/items/:category" element={<ItemSelectionScreen />} />
          <Route path="/customize/:itemId" element={<CustomizationScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/confirmation" element={<OrderConfirmationScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;