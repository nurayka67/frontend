import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementByFive = () => setCount(count + 5);
  const decrementByFive = () => setCount(count - 5);

  return (
    <div className="App">
      <header>
        <h1>React Counter Application</h1>
        <p className="subtitle">Demonstrating React View Layer Architecture</p>
      </header>
      
      <main>
        <div className="counter-container">
          <div className="counter-display">
            <span className="count-value">{count}</span>
            <p className="count-label">Current Count</p>
          </div>
          
          <div className="controls">
            <div className="button-group">
              <button onClick={decrementByFive} className="btn btn-danger">
                -5
              </button>
              <button onClick={decrement} className="btn btn-warning">
                -1
              </button>
              <button onClick={reset} className="btn btn-secondary">
                Reset
              </button>
              <button onClick={increment} className="btn btn-success">
                +1
              </button>
              <button onClick={incrementByFive} className="btn btn-info">
                +5
              </button>
            </div>
          </div>
          
          <div className="stats">
            <div className="stat-item">
              <span className="stat-label">Status:</span>
              <span className={`stat-value ${count > 0 ? 'positive' : count < 0 ? 'negative' : 'neutral'}`}>
                {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Zero'}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Even/Odd:</span>
              <span className="stat-value">
                {count % 2 === 0 ? 'Even' : 'Odd'}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Counter;