import React, { useState } from "react";
import * as Icons from "react-feather";
import AuthInput from "../components/AuthInput";
import { Link } from "react-router-dom";

const Button = ({ children }) => {
  return <button className="auth-main-button">{children}</button>;
};

const Auth = ({
  history: {
    location: { pathname },
  },
}) => {
  const isLogin = pathname === "/login";
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, password, name } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Auth">
      <Icons.Menu />

      <div className="main-header">
        <h1>{isLogin ? "Welcome" : "Create account"},</h1>
        <h2>Sign {isLogin ? "in to continue!" : "up to get started!"} </h2>
      </div>

      <div className="auth-input-wrapper">
        {!isLogin && (
          <AuthInput
            onChange={(e) => handleChange}
            type="text"
            name="name"
            value={name}
            label="Full Name"
          />
        )}
        <AuthInput
          onChange={(e) => handleChange}
          type="email"
          name="email"
          value={email}
          label="Email ID"
        />
        <AuthInput
          onChange={(e) => handleChange}
          type="password"
          value={password}
          name="password"
          label="Password"
        />
        {isLogin && <span className="forgot">Forgot Password?</span>}
      </div>

      <div className="auth-buttons">
        <Button>{isLogin ? "Login" : "Sign Up"}</Button>
        <Button>
          <Icons.Facebook />
          Connect with facebook
        </Button>
      </div>

      <div className="auth-bottom-status">
        {isLogin ? "I'm a new user. " : "I'm already a member. "}
        <Link to={`${isLogin ? "/signup" : "/login"}`}>
          {isLogin ? "Sign Up" : "Sign In"}
        </Link>
      </div>
    </div>
  );
};

export default Auth;
