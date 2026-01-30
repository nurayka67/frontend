import React from 'react';

const ItemList = () => {
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana'},
        { id: 3, name: 'Cherry'}
    ];
    return (
        <div>
            <h2>Fruits List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;