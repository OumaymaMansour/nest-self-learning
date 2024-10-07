import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product/allproducts');
        console.log(response.data) 
        setProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  
    return (
      <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="flex space-x-6">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600 mb-2">Price: ${product.price}</p>
            <p className="text-sm text-gray-600 mb-4">Quantity: {product.quantity}</p>
            <div className="flex space-x-4">
              {product.images &&
                product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.url}
                    alt={product.name}
                    className="w-24 rounded-md"
                  />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
    ) }
    
    export default Products