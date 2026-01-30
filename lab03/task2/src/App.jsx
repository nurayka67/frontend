import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [userId, setUserId] = useState(1);
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container">
      <h1>User Profile with useEffect</h1>
      
      <div className="control-panel">
        <h2>Select User</h2>
        <div className="button-group">
          {users.map(id => (
            <button
              key={id}
              className={userId === id ? 'active-btn' : ''}
              onClick={() => setUserId(id)}
            >
              User {id}
            </button>
          ))}
          <button 
            className="random-btn"
            onClick={() => setUserId(Math.floor(Math.random() * 10) + 1)}
          >
            Random User
          </button>
        </div>
        <p>Current User: <strong>{userId}</strong></p>
      </div>
      
      <UserProfile userId={userId} />
      
      <div className="explanation">
        <h3>How useEffect Works</h3>
        <p><strong>Dependency Array [userId]:</strong> The effect runs when userId changes, fetching new data.</p>
        <p><strong>Cleanup Function:</strong> Aborts fetch requests on unmount to prevent memory leaks.</p>
        <p><strong>Loading States:</strong> Manages loading, error, and success states.</p>
      </div>
    </div>
  );
}

function UserProfile({ userId = 1 }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error('Failed to fetch user');
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    return () => controller.abort();
  }, [userId]);

  if (loading) return <div className="loading">Loading User {userId}...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar">{user.name.charAt(0)}</div>
        <div>
          <h2>{user.name}</h2>
          <p className="user-id">ID: {userId}</p>
        </div>
      </div>
      
      <div className="profile-details">
        <div className="detail">
          <h4>Contact</h4>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
        
        <div className="detail">
          <h4>Address</h4>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Street:</strong> {user.address.street}</p>
          <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
        </div>
        
        <div className="detail">
          <h4>Company</h4>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Business:</strong> {user.company.bs}</p>
        </div>
      </div>
      
      <div className="fetch-info">
        <p><strong>Note:</strong> Data fetched with useEffect. Changing userId triggers new fetch.</p>
      </div>
    </div>
  );
}

export default App;