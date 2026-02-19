import React from 'react';
import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User, Skill } from './types';
import './App.css';

const App: React.FC = () => {
  const sampleUser: User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 28
  };

  const sampleSkills: Skill[] = [
    { id: 1, name: 'React', level: 'Expert' },
    { id: 2, name: 'TypeScript', level: 'Intermediate' },
    { id: 3, name: 'Node.js', level: 'Beginner' },
    { id: 4, name: 'Python', level: 'Intermediate' },
    { id: 5, name: 'GraphQL', level: 'Beginner' },
    { id: 6, name: 'Docker', level: 'Beginner' },
    { id: 7, name: 'PostgreSQL', level: 'Intermediate' }
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">
        Profile Dashboard
      </h1>
      
      <div className="users-grid">
        <UserCard user={sampleUser} isActive={true}>
          <p>Full-stack developer passionate about React and TypeScript</p>
          <p>Available for freelance work</p>
          <p>Based in New York</p>
        </UserCard>

        <UserCard 
          user={{ 
            name: 'Jane Smith', 
            email: 'jane.smith@example.com', 
            age: 32 
          }} 
          isActive={false}
        >
          <p>On sabbatical, returning in March 2026</p>
          <p>Traveling through Southeast Asia</p>
          <p>Learning Mandarin</p>
        </UserCard>
      </div>

      <SkillList skills={sampleSkills} />
    </div>
  );
};

export default App;