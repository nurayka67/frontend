import React from 'react';
import type { User } from './types';
import './UserCard.css';

interface UserCardProps {
  user: User;
  isActive?: boolean;
  children: React.ReactNode;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  isActive = true,
  children 
}) => {
  return (
    <div className={`user-card ${isActive ? 'active' : 'inactive'}`}>
      <div className="user-card-header">
        <div className="user-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="user-info">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-email">{user.email}</p>
        </div>
        <div className={`user-status ${isActive ? 'status-active' : 'status-inactive'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </div>
      </div>
      
      <div className="user-details">
        <div className="user-age">
          <span className="age-label">Age</span>
          <span className="age-value">{user.age}</span>
        </div>
      </div>

      <div className="user-children">
        {children}
      </div>
    </div>
  );
};

export default UserCard;