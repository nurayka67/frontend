import { useState, useEffect} from 'react';

const UserProfile = ({ userID = 1}) => {
    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUser = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`, { signal: controller.signal });
                const data = await res.json();
                setUser(data);
                setError(null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError('Failed to fetch');
            }
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
        return () => controller.abort();}, [userID]);
        
        if (loading) return <div className="loading">Loading...</div>;
        if (error) return <div className="error">{error}</div>;

        return (
            <div className="profile-card">
                <h2>User {userId}</h2>
                <p><strong>Name:</strong>{user.name}</p>
                <p><strong>Email:</strong>{user.email}</p>
                <p><strong>City:</strong>{user.address.city}</p>

                <div className="note">
                    <small>useEffect depends on userId prop for updates</small>
                </div>
            </div>
        );
    };

export default UserProfile;