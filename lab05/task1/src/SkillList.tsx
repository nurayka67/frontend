import React from 'react';
import type { Skill, SkillLevel } from './types';
import './SkillList.css';

interface SkillListProps {
  skills: Skill[];
}

const getBadgeColor = (level: SkillLevel): string => {
  switch (level) {
    case 'Beginner':
      return 'beginner';
    case 'Intermediate':
      return 'intermediate';
    case 'Expert':
      return 'expert';
    default:
      return 'beginner';
  }
};

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <div className="skills-container">
      <h3 className="skills-heading">
        Skills & Expertise
        <span className="skills-count">{skills.length}</span>
      </h3>
      
      {skills.length === 0 ? (
        <p className="no-skills">No skills listed</p>
      ) : (
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <span className={`skill-badge ${getBadgeColor(skill.level)}`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillList;