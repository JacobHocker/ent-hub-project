import React from "react";
import { Link } from "react-router-dom";



function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className='navbar'>
      <button>
        <Link to="/">Home</Link>
      </button>
      <nav>
        <button>
        <Link to="/movies">Movie List</Link>
        </button>
        <button  onClick={handleLogoutClick}>
          Logout
        </button>
      </nav>
      <img src={user.image} alt={user.username} />
      <h1>{user.username}</h1>
      <p>{user.bio}</p>
    </div>
  );
}



export default NavBar;