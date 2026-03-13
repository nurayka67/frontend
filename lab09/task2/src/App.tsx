import { useState } from 'react';
import { VirtualList } from './components/VirtualList';
import { RegularList } from './components/RegularList';

function App() {
  const [showVirtual, setShowVirtual] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Virtualization Performance Comparison</h1>
      <button 
        onClick={() => setShowVirtual(!showVirtual)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        Switch to {showVirtual ? 'Regular' : 'Virtual'} List
      </button>
      
      {showVirtual ? (
        <VirtualList itemCount={10000} />
      ) : (
        <RegularList itemCount={1000} />
      )}
      
      <div style={{ marginTop: '20px' }}>
        <h3>Performance Tips:</h3>
        <ul>
          <li>Open Chrome DevTools (F12)</li>
          <li>Check "Elements" tab to see DOM nodes</li>
          <li>Virtual list should have ~10-20 DOM nodes vs 1000+ in regular</li>
        </ul>
      </div>
    </div>
  );
}

export default App;