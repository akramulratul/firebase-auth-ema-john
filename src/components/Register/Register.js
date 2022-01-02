import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Register: Create account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <br />
          <input className="btn-regular" type="submit" value="Submit" />
        </form>
        <p>
          Already Have an account?<Link to="/login"></Link>
        </p>
        <div>---------OR----------</div>
        <button className="btn-regular">Google Account</button>
      </div>
    </div>
  );
};

export default Register;
