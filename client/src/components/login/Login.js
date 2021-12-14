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
            <p>
              Don't have an account? &nbsp;
              <button className="sign-up-button" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <div className='sign-up-click'>
            <SignUpForm onLogin={onLogin} />
            <br />
            <p>
              Already have an account? &nbsp;
              <button className="login-button" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}



export default Login;