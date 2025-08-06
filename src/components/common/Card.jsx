// src/components/common/Card.jsx

import React from 'react';
import './Card.scss'; // मान लीजिए आप कार्ड के लिए अलग SCSS फाइल बनाएंगे

const Card = ({ children, className }) => {
  return (
    <div className={`common-card ${className}`}>
      {children}
    </div>
  );
};

export default Card;