import React from "react";
import "./AuthButton.scss";
const AuthButton = ({ children }) => {
  return <button className="auth-button">{children}</button>;
};

export default AuthButton;
