import {useState} from "react";
import {UserCard} from "./UserCard";
import {AnalyticsChart} from "./AnalyticsChart";
import {ParentComponent} from "./ParentComponent";

interface User {
    id: number;
    name: string;
    email: string;
}

export function Dashboard() {
    const [count, setCount] = useState(0);
    const [user] = useState<User>({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    });
    const items = ['Item 1', 'Item 2', 'Item 3'];

    console.log('Dashboard render');

    return (
        <div style={{padding: '20px'}}>
            <h1>Performance Optimization Demo</h1>
            <p>Count: {count} <button onClick={() => setCount (c => c +1)}>+</button></p>

            <h2> 1. React.memo Demo</h2>
            <UserCard user={user} />

            <h2>2. useMemo Demo</h2>
            <AnalyticsChart items={items}/>

            <h2>3. useCallback Demo</h2>
            <ParentComponent />
        </div>
    );
}