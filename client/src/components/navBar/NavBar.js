import React from "react";
import { NavLink, Link } from "react-router-dom";
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
    <div className="navbar-container">
      <nav>
        <Link to="/">
          <img src={image1} className="eh-logo-nav" alt="eh-logo" />
        </Link>
      </nav>
      <div className='nav-display-container'>
          <nav className='nav-items'>
            <NavLink className='nav-link' to="/">Home</NavLink>{" "}|
            <NavLink className='nav-link' to="/movies">Movie List</NavLink>{" "}|
          </nav>
      </div>
      <div className="user-info-container">
        <img className="user-pic" src={user.image_url} alt={user.username} />
        <h4 className="username">{user.username}</h4>
        <button  className="log-out-button" onClick={handleLogoutClick}>
            Logout
        </button>
      </div>
    </div>
  );
}



export default NavBar;