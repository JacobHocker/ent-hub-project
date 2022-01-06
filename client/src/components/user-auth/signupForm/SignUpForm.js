import React, { useState } from "react";
import './SignUpForm.scss'


function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        bio,
      }),
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
    <form onSubmit={handleSubmit}>
      <div className="sign-up-container">
        <div>
          <label htmlFor="username"></label>
          <input
            className="sign-up-input"
            placeholder="Create Your Username"
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            className="sign-up-input"
            placeholder="Enter New Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            placeholder="Confirm Password"
            className="sign-up-input"
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="imageUrl"></label>
          <input
            className="sign-up-input"
            placeholder="Enter Profile Picture"
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bio"></label>
          <textarea
            className="sign-up-input"
            placeholder="Write a brief bio about yourself..."
            rows={3}
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <button className="sign-up-button" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        </div>
        <div>
          {errors.map((err) => (
            <error key={err}>{err}</error>
          ))}
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;