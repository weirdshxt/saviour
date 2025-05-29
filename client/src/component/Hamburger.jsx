import React from "react";


const HamburgerIcon = ({ isOpen, onClick , color }) => {
  return (
    <div
      className={`hamburger-icon relative z-50 ${isOpen ? "open" : ""}`}
      onClick={onClick}
    >
      <div className="line1" style={{ backgroundColor: color }}></div>
      <div className="line2" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default HamburgerIcon;
