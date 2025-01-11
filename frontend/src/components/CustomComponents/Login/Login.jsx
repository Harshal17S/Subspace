import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (localStorage.getItem("user")) {
      const userObject = JSON.parse(localStorage.getItem("user"));
      const userEmail = userObject.email;
      const userPassword = userObject.password;

      if (userPassword === password && userEmail === email) {
        window.open("https://youtube-video-summary-bds6.onrender.com");
      } else {
        alert("Please enter correct email/password.");
      }
    }
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="loginButton" onClick={login}>
          Login
        </button>
        <button
          type="button"
          className="loginButton"
          onClick={() => navigate("/sign")}
        >
          No Account
        </button>
      </form>
    </div>
  );
};

export default Login;
