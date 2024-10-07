import React from 'react';
import Products from './Products';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const Navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
  <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Online Store!</h1>
  <p className="text-lg text-gray-600 mb-8">Your one-stop shop for the best products.</p>
  
  <div className="text-center">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">See Now!</h2>
    <button 
      onClick={() => Navigate('/Products')} 
      className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-500 transition"
    >
      Explore Products
    </button>
  </div>
</div>

  );
};

export default Welcome;
