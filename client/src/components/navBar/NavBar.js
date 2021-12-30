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
            <NavLink className='nav-link' to='/actors'>Actors</NavLink>
            <NavLink className='nav-link' to='/directors'>Directors</NavLink>
            <NavLink className='nav-link' to='/genres'>Genres</NavLink>
            <NavLink className='nav-link' to='/post'>Post</NavLink> 
            <NavLink className='nav-link' to='/associate'>Associate</NavLink> 
            <NavLink className='nav-link' to='/edit'>Edit</NavLink> 
          </nav>
      </div>
      <div className="nav-user-info-container">
        <img className="nav-user-pic" src={user.image_url} alt={user.username} />
        <Link to={`/users/${user.id}`}>
          <h4 className="nav-username">{user.username}</h4>
        </Link>
        <button  className="nav-log-out" onClick={handleLogoutClick}>
            Logout
        </button>
      </div>
    </div>
  );
};



export default NavBar;