import React from 'react';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api.js';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    callToApi(userSearch).then((response) => {
      setMovies(response);
    });
  }, [userSearch]);

  const handleSearch = (ev) => {
    setUserSearch(ev.target.value);
  };

  const renderMovies = () => {
    return movies.map((movie) => {
      return <li key={movie}> Nombre: {movie.name}</li>;
    });
  };

  return (
    <>
      <h3>Busca tu película favorita</h3>
      <input
        type="text"
        placeholder="busca tu película"
        value={userSearch}
        onChange={handleSearch}
      ></input>
      <h4>Películas con el nombre : {userSearch}</h4>
      <ul>{renderMovies()}</ul>
    </>
  );
};

export default App;
