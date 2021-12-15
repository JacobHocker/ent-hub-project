import React from "react";
import { Link } from "react-router-dom";
import './NavBar.scss';
import  image1  from "../../assets/pictures/eh-nav-logo-large.png";



function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  
  return (
    <div className="navbar-whole-container">
      <nav>
        <Link to="/">
          <img src={image1} className="eh-logo-nav" alt="eh-logo" />
        </Link>
      </nav>
      <div className='navigation-container'>
        <div className="navigation-items">
          <nav>
            <Link className='nav-link' to="/">Home</Link>{" "}|
            <Link className='nav-link' to="/movies">Movie List</Link>{" "}|
          </nav>
        </div>
        <div className="user-info-display">
          <img className="user-picture" src={user.image_url} alt={user.username} />
          <h4 className="username-display">{user.username}</h4>
          <button  className="log-out-button" onClick={handleLogoutClick}>
              Logout
          </button>
        </div>
      </div>
    </div>
  );
}



export default NavBar;