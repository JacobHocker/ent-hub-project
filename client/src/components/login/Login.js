import { useState } from "react";
import LoginForm from "../user-auth/loginForm/LoginForm";
import SignUpForm from "../user-auth/signupForm/SignUpForm";
import './Login.scss';
import image from '../../assets/pictures/entertainment-hub-logo.png';


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-container">
      <img src={image} className="login-page-logo" alt='entertainment-hub'></img>
      <div className='login-area'>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <br />
            <div className="sign-up-container">
              <h3>
                Don't have an account? &nbsp;
              </h3>
              <button className="sign-up-button" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </div>
          </>
        ) : (
          <div className='sign-up-click'>
            <SignUpForm onLogin={onLogin} />
            <br />
            <div className="already-account">
              <h3>
                Already have an account? &nbsp;
              </h3>
              <button className="login-button" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



export default Login;