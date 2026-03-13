import {useMemo} from 'react';

interface AnalyticsChartProps {
    items: string[];
}

function expensiveCalculation(items: string[]): number {
    console.log('Expensive calculation running...');
    let result = 0;
    for (let i = 0; i <5000000; i++) {
        result += Math.sqrt(i);
    }
    return result + items.length;
}

export function AnalyticsChart({items} : AnalyticsChartProps) {
    console.log('AnalyticsChart render');
    const calculationResult = useMemo(() => expensiveCalculation(items), [items]);

    return (
        <div className = "chart" style={{border: '1px solid #ccc', padding: '10px', margin: '10px 0'}}>
            <h3>Analytics Chart</h3>
            <p>Calculation value: {calculationResult}</p>
        </div>
    );
}