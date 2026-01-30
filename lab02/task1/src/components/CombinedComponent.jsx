import React from 'react';

const CombinedComponent = () => {
    const items = [
        { id: 1, name: 'Book 1' },
        { id: 2, name: 'Book 2' },
        { id: 3, name: 'Book 3' }
    ];
    return  (
        <>
          <h2>My Items</h2>
          <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <p>Total: {items.length} items</p>
        </>
    );
};

export default CombinedComponent;