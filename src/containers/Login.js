import React, { useState } from "react";
import Button from "../components/Button";
import * as Icons from "react-feather";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  const [eyeClicked, setEyeClicked] = useState(false);
  return (
    <div>
      <h3 className="trouble">Trouble Logging in?</h3>
      <div id="welcomeTag">
        <h2>Welcome Back!</h2>
        <span>Enter your credentials to continue</span>
      </div>
      <form className="loginForm">
        <input
          className="inputBox"
          type="number"
          placeholder="Phone Number"
        ></input>
        <input
          className="inputBox"
          type={!eyeClicked ? "password" : "text"}
          placeholder="Password"
        ></input>
        {!eyeClicked ? (
          <Icons.Eye
            onClick={() => setEyeClicked(true)}
            className="eye"
          ></Icons.Eye>
        ) : (
          <Icons.EyeOff
            onClick={() => setEyeClicked(false)}
            className="eye"
          ></Icons.EyeOff>
        )}

        <div className="rememberMeArea">
          <label htmlFor="rememberMe">Remember Me</label>
          <input type="checkbox" id="rememberMe" />
        </div>
        <div className="buttonArea">
          <Button
            width="90vw"
            background="#2E1394"
            border="1px solid #eaebec"
            outline="none"
            boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)"
            margin="1rem auto"
          >
            Login
          </Button>

          <Button
            outline="none"
            width="90vw"
            position="absolute"
            bottom="2vh"
            left="4vw"
            border="1px solid #eaebec"
            color="#000"
            background="#fff"
            boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)"
            className="bottomButton"
          >
            I don't have an account yet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
