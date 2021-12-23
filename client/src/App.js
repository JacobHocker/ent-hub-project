import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import PostAnActor from "./components/actors/postActor/PostAnActor";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Associate from "./components/movies/associate/Associate";
import MovieInformationDisplay from "./components/movies/movieInformationDisplay/MovieInformationDisplay";
import MovieListContainer from "./components/movies/movieListContainer/MovieListContainer";
import PostAMovie from "./components/movies/postMovie/postAMovie";
import NavBar from "./components/navBar/NavBar";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (
    <div className="App">
      <NavBar  user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<MovieListContainer />} />
        <Route path="movies/:id" element={<MovieInformationDisplay />} />
        <Route path="post-a-movie" element={<PostAMovie />} />
        <Route path="associate" element={<Associate />} />
        <Route path="post-an-actor" element={<PostAnActor />} />
      </Routes>
    </div>
  );
};

export default App;
