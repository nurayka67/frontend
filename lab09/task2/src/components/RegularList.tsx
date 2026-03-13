import { useMemo } from 'react';
import { generateItems } from '../utils/generateItems';

interface RegularListProps {
  itemCount?: number;
}

export function RegularList({ itemCount = 1000 }: RegularListProps) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);
  
  return (
    <div style={{ 
      height: '500px', 
      overflow: 'auto', 
      border: '2px solid red',
      padding: '10px'
    }}>
      <h3>Regular List (all items rendered)</h3>
      <p>Total items: {items.length}</p>
      {items.map(item => (
        <div 
          key={item.id} 
          className="list-item"
          style={{
            padding: '15px',
            margin: '5px 0',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}
        >
          <h4 style={{ margin: '0 0 5px 0' }}>{item.title}</h4>
          <p style={{ margin: '0 0 5px 0' }}>{item.description}</p>
          <span style={{ 
            background: '#e0e0e0', 
            padding: '2px 8px',
            borderRadius: '3px',
            fontSize: '12px'
          }}>
            {item.category}
          </span>
        </div>
      ))}
    </div>
  );
}