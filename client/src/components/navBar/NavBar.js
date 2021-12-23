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
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/movies">Movies</NavLink>
            <NavLink className='nav-link' to='/post-a-movie'>Post A Movie</NavLink>
            <nav className="nav-link">Placeholder</nav>
          </nav>
      </div>
      <div className="nav-user-info-container">
        <img className="nav-user-pic" src={user.image_url} alt={user.username} />
        <h4 className="nav-username">{user.username}</h4>
        <button  className="nav-log-out" onClick={handleLogoutClick}>
            Logout
        </button>
      </div>
    </div>
  );
}



export default NavBar;