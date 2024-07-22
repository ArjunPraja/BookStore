import React from 'react';

const CartTotal = ({ cartItems, onPlaceOrder }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    const orderData = {
      orderItems: cartItems,
      totalPrice: calculateTotal(),
      orderStatus: 'pending', // Set initial order status
      paymentStatus: 'unpaid', // Set initial payment status
      shippingAddress: 'Default Shipping Address' // You can change this as needed
    };
    console.log(orderData)
    console.log(token)
    try {
      const response = await fetch('http://localhost:8080/api/addorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the token in the request headers
        },
        body: JSON.stringify(orderData),
      });

      console.log(response)

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Order placed successfully:', responseData);

      // Call the onPlaceOrder function to handle post-order actions
      onPlaceOrder(responseData);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mt-8 text-right">
      <h2 className="text-2xl font-semibold mb-4">Total: ₹{calculateTotal()}</h2>
      <button
        
        className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartTotal;

