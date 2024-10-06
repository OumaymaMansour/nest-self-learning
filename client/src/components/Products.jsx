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
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
               <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <div>
              {product.images && product.images.map(image => (
                <img key={image.id} src={image.url} alt={product.name} style={{ width: '100px', height: 'auto' }} />
              ))}
            </div>
            </li>
          ))}
        </ul>
      </div>
    );
  
}

export default Products
