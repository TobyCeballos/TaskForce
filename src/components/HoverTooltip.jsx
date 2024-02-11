import React from 'react';
const HoverTooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-content">{text}</div>
      {children}
    </div>
  );
};

export default HoverTooltip;
