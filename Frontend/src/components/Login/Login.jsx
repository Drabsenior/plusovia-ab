import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="logincontainer">
      <div className="loginform">
        <h2>Login</h2>
        <div className="logininput">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" />
        </div>
        <div className="logininput">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
