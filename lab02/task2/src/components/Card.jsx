import React from 'react';

const Card = ({ title, children, className = '' }) => {
  const cardClass = `card ${className}`.trim();
  
  return (
    <div className={cardClass}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;