import React, { useState } from "react";
import './LoginForm.js';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="username-login">
        <label htmlFor="username">Username: </label>
        <input
          className="login-input"
          placeholder="Username"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="password-login">
        <label htmlFor="password">Password: </label>
        <input
          className="login-input"
          placeholder="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button  type="submit" className="login-button">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>
      <div>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </div>
    </form>
  );
}

export default LoginForm;