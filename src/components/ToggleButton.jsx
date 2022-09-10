import React from "react";
import "./toggleButton.css";

const ToggleButton = ({ toggled, onClick }) => {
  return (
    <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
    </div>
  );
};

export default ToggleButton;
