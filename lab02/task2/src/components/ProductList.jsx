import React from 'react';
import Card from './Card';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Widget', price: 9.99 },
    { id: 2, name: 'Gadget', price: 19.99 },
    { id: 3, name: 'Thingy', price: 29.99 }
  ];

  return (
    <div>
      {products.map(product => (
        <Card key={product.id} title={product.name}>
          <p>Price: ${product.price}</p>
          <p>ID: {product.id}</p>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;