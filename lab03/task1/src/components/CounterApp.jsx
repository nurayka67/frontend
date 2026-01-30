import StepCounter from "./StepCounter";
const CounterApp = () => {
    return (
        <div className="app">
            <h1>Multi Counter Demo</h1>

            <StepCounter initialValue={0} step={1} />
            <StepCounter initialValue={10} step={5} />

            <div className="explanation">
                <p><strong>Props</strong> configure from outside (initialValue, steps)</p>
                <p><strong>State</strong> manages internal changes (count, history, ops)</p>
                <p>Each counter has independent state</p>
            </div>
        </div>
    );
};

export default CounterApp;