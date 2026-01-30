import { useState } from 'react';

const StepCounter = ({ initialValue = 0, step = 1 }) => {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([initialValue]);
    const [ops, setOps] = useState(0);

    const update = (change) => {
        const newCount = count + change;
        setCount(newCount);
        setHistory(h => [...h, newCount]);
        setOps(o => o + 1);
    };

    const reset = () => {
        setCount(initialValue);
        setHistory([initialValue]);
        setOps(0);
    };

    const lastFive = history.slice(-5);

    return (
        <div className="counter-card">
            <h3>Counter (Step: {step})</h3>
            <p className="counter-display">Count: {count}</p>
            <div className="button-group">
                <button onClick={() => update(step)}>+{step}</button>
                <button onClick={() => update(-step)}>-{step}</button>
                <button onClick={reset}>Reset</button>
            </div>

            <div className="stats">
                <p>Operations: {ops}</p>
                <p>Last 5 values: {lastFive.join(', ')}</p>
            </div>
        </div>
    );
};

export default StepCounter;