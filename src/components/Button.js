import React from "react";
import "./Button.scss";
const Button = ({ text, ...props }) => {
  return (
    <button style={{ ...props }} className="button">
      {text}
    </button>
  );
};

export default Button;
