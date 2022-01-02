import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <from onSubmit="">
          <input type="email" name="email" placeholder="Your Email" />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <input type="submit" value="Submit" />
        </from>
        <p>
          New to ema-john?<Link to="/register">Create Account</Link>
        </p>
        <div>---------OR----------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
