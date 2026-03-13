import { useState, useMemo, useCallback } from 'react';
import { FixedSizeList } from 'react-window'; // Убираем "as List"

interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
}

// Функция для генерации элементов
function generateItems(count: number): Item[] {
  const categories = ["Tech", "Science", "Business", "Sports", "Entertainment"];
  const items: Item[] = [];
  
  for (let i = 0; i < count; i++) {
    items.push({
      id: i,
      title: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
      category: categories[Math.floor(Math.random() * categories.length)]
    });
  }
  
  return items;
}

// Компонент для каждого ряда
const Row = ({ index, style, data }: { index: number; style: React.CSSProperties; data: Item[] }) => {
  const item = data[index];
  return (
    <div style={{ 
      ...style, 
      padding: '15px',
      borderBottom: '1px solid #ddd',
      background: index % 2 === 0 ? '#f9f9f9' : 'white'
    }}>
      <h4 style={{ margin: '0 0 5px 0' }}>{item.title}</h4>
      <p style={{ margin: '0 0 5px 0' }}>{item.description}</p>
      <span style={{ 
        background: '#646cff', 
        color: 'white',
        padding: '2px 8px',
        borderRadius: '3px',
        fontSize: '12px'
      }}>
        {item.category}
      </span>
    </div>
  );
};

// Основной компонент
export function VirtualList({ itemCount = 10000, height = 500 }: { itemCount?: number; height?: number }) {
  const [filter, setFilter] = useState('');
  
  const items = useMemo(() => generateItems(itemCount), [itemCount]);
  
  const filteredItems = useMemo(() => {
    if (!filter) return items;
    return items.filter(item => 
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div style={{ 
      border: '2px solid green',
      padding: '10px',
      borderRadius: '5px'
    }}>
      <h3>Virtualized List (only visible items)</h3>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
        style={{ 
          width: '100%', 
          padding: '8px', 
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ddd'
        }}
      />
      <p>Showing {filteredItems.length} of {items.length} items</p>
      <FixedSizeList
        height={height}
        itemCount={filteredItems.length}
        itemSize={100}
        width="100%"
        itemData={filteredItems}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}