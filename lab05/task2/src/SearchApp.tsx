import React, { useState } from 'react';
import type { User } from './types';
import UserCard from './UserCard';
import './SearchApp.css';

const SearchApp: React.FC = () => {
  const INITIAL_DATA: User[] = [
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', age: 25 },
    { name: 'Bob Smith', email: 'bob.smith@example.com', age: 30 },
    { name: 'Charlie Brown', email: 'charlie.brown@example.com', age: 22 },
    { name: 'Diana Prince', email: 'diana.prince@example.com', age: 28 },
    { name: 'Edward Norton', email: 'edward.norton@example.com', age: 35 },
    { name: 'Fiona Apple', email: 'fiona.apple@example.com', age: 27 },
    { name: 'George Clooney', email: 'george.clooney@example.com', age: 42 },
    { name: 'Hannah Montana', email: 'hannah.montana@example.com', age: 24 },
    { name: 'Ian McKellen', email: 'ian.mckellen@example.com', age: 55 },
    { name: 'Julia Roberts', email: 'julia.roberts@example.com', age: 48 }
  ];

  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const term = event.target.value;
    setSearchTerm(term);
    
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleClear = (): void => {
    setSearchTerm('');
    setFilteredUsers(users);
  };

  return (
    <div className="search-container">
      <h1 className="search-title">
        <span>User Discovery</span>
      </h1>
      
      <div className="search-box">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search users by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>
        
        <div className="search-stats">
          <span>Showing {filteredUsers.length} of {users.length} users</span>
          <span className="stats-badge">
            {Math.round((filteredUsers.length / users.length) * 100)}%
          </span>
        </div>
      </div>

      <div className="users-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard key={`${user.email}-${index}`} user={user} />
          ))
        ) : (
          <div className="no-results">
            <h3>No users found</h3>
            <p>Try searching with a different name</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchApp;