import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MovieInformationDisplay from "./components/movies/movieInformationDisplay/MovieInformationDisplay";
import MovieListContainer from "./components/movies/movieListContainer/MovieListContainer";
import NavBar from "./components/navBar/NavBar";
import PostContainer from "./components/posting/postingContainer/PostContainer";
import AssociatingContainer from "./components/associating/associatingContainer/AssociatingContainer";
import EditorContainer from "./components/editing/editorContainer/EditorContainer";
import ActorListContainer from "./components/actors/actorListContainer/ActorListContainer";
import DirectorListContainer from "./components/directors/directorListContainer/DirectorListContainer";
import GenreListContainer from "./components/genres/genreListContainer/GenreListContainer";
import ActorInformationDisplay from "./components/actors/actorInformationDisplay/ActorInformationDisplay";


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
        <Route path="actors" element={<ActorListContainer />} />
        <Route path="actors/:id" element={<ActorInformationDisplay />} />
        <Route path="directors" element={<DirectorListContainer />} />
        <Route path="genres" element={<GenreListContainer />} />
        <Route path="post" element={<PostContainer />} />
        <Route path="associate" element={<AssociatingContainer />} />
        <Route path="edit" element={<EditorContainer />} />
      </Routes>
    </div>
  );
};

export default App;
