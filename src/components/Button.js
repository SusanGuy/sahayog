import React from "react";
import "./Button.scss";
const Button = ({ children, ...props }) => {
  return (
    <button style={{ ...props }} className="button">
      {children}
    </button>
  );
};

export default Button;
