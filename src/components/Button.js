import React from "react";
import "./Button.scss";
const Button = ({ children, ...styles }) => {
  return (
    <button style={{ ...styles }} className="button">
      {children}
    </button>
  );
};

export default Button;
