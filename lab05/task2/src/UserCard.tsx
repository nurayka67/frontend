import React from 'react';
import type { User } from './types';
import './UserCard.css';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const getAvatarColor = (name: string) => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9'];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="user-card-search">
      <div className="user-avatar-search" style={{ backgroundColor: getAvatarColor(user.name) }}>
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className="user-info-search">
        <h3 className="user-name-search">{user.name}</h3>
        <p className="user-email-search">{user.email}</p>
        <div className="user-age-search">
          <span className="age-icon">Age:</span> {user.age}
        </div>
      </div>
    </div>
  );
};

export default UserCard;