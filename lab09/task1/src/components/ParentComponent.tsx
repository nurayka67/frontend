import {useState, useCallback} from 'react';
import {Button} from './Button';

export function ParentComponent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Button clicked!');
    }, []);

    const handleIncrement = useCallback(() => {
            setCount(c => c + 1);
    }, []);

    return(
        <div style={{border: '2px solid blue', padding: '20px', margin: '10px 0'}}>
            <h3>Parent Component with useCallback</h3>
            <p>Count: {count}</p>
            <Button onClick={handleClick} label="Click Me" />
            <Button onClick={handleIncrement} label="Increment" />
        </div>
    );
}