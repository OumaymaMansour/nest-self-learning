import React from 'react';
import Products from './Products';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const Navigate = useNavigate()
  return (
    <div >
      <h1>Welcome to Our Online Store!</h1>
      <p>Your one-stop shop for the best products.</p>
      <div >
        <h2>See Now!</h2>
        <button onClick={()=>Navigate('/Products')} >Explore Products</button>
      </div>
    </div>
  );
};

export default Welcome;
