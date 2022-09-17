import React, { useContext } from "react";
import "./Login.css";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { loginauth, setLoginauth } = useContext(LoginContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const navigate = useNavigate();
  const notify = (arg) => {
    if (arg === "wrongcrdential") {
      toast.error("Username and password doesn't match", {
        position: "top-center",
        autoClose: 1400,
        hideProgressBar: true,
      });
    } else if (arg === "success") {
      toast.success("Login successful! redirecting", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } else if ("empty") {
      toast.error("Fileds are empty!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameRef.current.value || !passwordRef.current.value) {
      console.log("Fill all the fields!");
      notify("empty");
    }
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
        notify("success");
        setLoginauth(true);
        console.log("login successfully");
      })
      .catch((error) => {
        notify("wrongcrdential");
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
