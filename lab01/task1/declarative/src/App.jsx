import { useState } from "react";
import "./App.css";

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div className="App">
      <header>
        <h1>Declarative Approach (React)</h1>
        <p className="subtitle">State-driven UI with automatic DOM updates</p>
      </header>
      
      <main>
        <div className="demo-area">
          <button 
            onClick={toggleHighlight}
            className={`btn-toggle ${isHighlighted ? 'btn-active' : ''}`}
          >
            {isHighlighted ? 'Remove Highlight' : 'Toggle Highlight'}
          </button>
          
          <p className={`demo-text ${isHighlighted ? 'highlight' : ''}`}>
            This paragraph demonstrates declarative programming. 
            UI updates automatically when state changes. React handles DOM updates.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;