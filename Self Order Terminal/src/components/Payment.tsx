import React, { useState } from 'react';
import { CreditCard, DollarSign, QrCode } from 'lucide-react';
import { PaymentMethod } from '../App';

interface PaymentProps {
  totalAmount: number;
  onPaymentComplete: () => void;
  onCancel: () => void;
}

const Payment: React.FC<PaymentProps> = ({ totalAmount, onPaymentComplete, onCancel }) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      onPaymentComplete();
    }, 1500);
  };

  return (
    <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 max-w-md mx-auto backdrop-filter backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Royal Payment</h2>
      <p className="mb-6 text-xl text-center text-yellow-400">Total Amount: ${totalAmount.toFixed(2)}</p>
      
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setPaymentMethod('credit_card')}
          className={`p-3 rounded-full ${paymentMethod === 'credit_card' ? 'bg-purple-600' : 'bg-purple-800'} transition-colors duration-300`}
        >
          <CreditCard size={24} />
        </button>
        <button
          onClick={() => setPaymentMethod('cash')}
          className={`p-3 rounded-full ${paymentMethod === 'cash' ? 'bg-purple-600' : 'bg-purple-800'} transition-colors duration-300`}
        >
          <DollarSign size={24} />
        </button>
        <button
          onClick={() => setPaymentMethod('upi')}
          className={`p-3 rounded-full ${paymentMethod === 'upi' ? 'bg-purple-600' : 'bg-purple-800'} transition-colors duration-300`}
        >
          <QrCode size={24} />
        </button>
      </div>

      {paymentMethod === 'credit_card' && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-purple-300">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 block w-full rounded-md bg-purple-900 border-purple-600 text-white focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-purple-300">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="mt-1 block w-full rounded-md bg-purple-900 border-purple-600 text-white focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-purple-300">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="mt-1 block w-full rounded-md bg-purple-900 border-purple-600 text-white focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                placeholder="123"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-purple-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-300"
            >
              Pay Now
            </button>
          </div>
        </form>
      )}

      {paymentMethod === 'cash' && (
        <div className="text-center">
          <p className="text-purple-300 mb-4">Please pay at the counter.</p>
          <button
            onClick={onPaymentComplete}
            className="bg-yellow-500 text-purple-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-300"
          >
            Confirm Cash Payment
          </button>
        </div>
      )}

      {paymentMethod === 'upi' && (
        <div className="text-center">
          <p className="text-purple-300 mb-4">Scan the QR code to pay via UPI</p>
          <div className="bg-white p-4 rounded-lg inline-block mb-4">
            <QrCode size={150} />
          </div>
          <button
            onClick={onPaymentComplete}
            className="bg-yellow-500 text-purple-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors duration-300"
          >
            Confirm UPI Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;