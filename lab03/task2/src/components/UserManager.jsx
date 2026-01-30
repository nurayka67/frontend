import {useState} from 'react';
import UserProfile from './UserProfile';

const UserManager = () => {
    const [userId, setUserId] = useState(1);
    const users = [1, 2  ,3 ,4, 5];

    return (
        <div className="manager">
            <h1>User Browser</h1>

            <div className="user-button">
                {users.map(id => (
                    <button
                    key={id}
                    className={userId === id ? 'active' : ''}
                    onClick={() => setUserId(id)}
                    >
                        User {id}
                    </button>
                ))}
                <button onClick={() => setUserId(Math.floor(Math.random() * 10) +1)}>
                    Random
                </button>
            </div>
            <UserProfile userId={userId} />

            <p className="info">
                <strong>Why depency</strong> useEffect re-runs when userId changes
            </p>
        </div>
    );
};

export default UserManager;