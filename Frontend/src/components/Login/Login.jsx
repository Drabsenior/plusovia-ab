import React, { useContext } from "react";
import "./Login.css";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
const Login = () => {
  const { loginauth, setLoginauth } = useContext(LoginContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    console.log(username, password);

    axios
      .post("/auth/kokebpension/login", data)

      .then((response) => {
        console.log(response.data);
        navigate("/auth/kokebpension/admin");
        setLoginauth(true);
      });
  };

  return (
    <div className="logincontainer">
      <div className="loginform">
        <h2>Login</h2>
        <div className="logininput">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div className="logininput">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
