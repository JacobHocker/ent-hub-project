import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './NavBar.scss';
import  image1  from "../../assets/pictures/eh-nav-logo-large.png";



function NavBar({ user, setUser }) {
  const [click, setClick] = useState(false); 

  const handleClick = () => setClick(!click);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
 
  
  return (
    <div className="navbar-container">
      <div className="eh-logo-container">
        <Link to="/">
          <img src={image1} className="eh-logo-nav" alt="eh-logo" />
        </Link>
      </div>
      <div className='nav-display-container'>
            <div className="nav-items">
              <NavLink className='nav-link' to="/movies">Movies{" "}|</NavLink>
            </div>
            <div className="nav-items">
              <NavLink className='nav-link' to='/actors'>|{" "}Actors{" "}|</NavLink>
            </div>
            <div className="nav-items">
              <NavLink className='nav-link' to='/directors'>|{" "}Directors{" "}|</NavLink>
            </div>
            <div className="nav-items">
              <NavLink className='nav-link' to='/genres'>|{" "}Genres{" "}|</NavLink>
            </div>
            <div className="nav-items">
              <NavLink className='nav-link' to='/admin'>|{" "}Admin</NavLink>  
            </div>
      </div>
      <div className="nav-user-info-container">
        <img className="nav-user-pic" src={user.image_url} alt={user.username} />
        <Link to={`/users/${user.id}`}>
          <h4 className="nav-username">{user.username}</h4>
        </Link>
        <div className="nav-log-out-button"></div>
        <button  className="nav-log-out" onClick={handleLogoutClick}>
            Logout
        </button>
      </div>
    </div>
  );
};



export default NavBar;