import React from 'react';

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={`fixed top-5 right-5 p-4 rounded shadow-lg text-white ${getBgColor()}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-xl font-bold">&times;</button>
      </div>
    </div>
  );
};

export default Notification;
