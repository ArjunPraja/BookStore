import React from 'react';

const CartTotal = ({ cartItems, onPlaceOrder }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mt-8 text-right">
      <h2 className="text-2xl font-semibold mb-4">Total: ₹{calculateTotal()}</h2>
      <button
        className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold"
        onClick={onPlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartTotal;
