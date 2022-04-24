import React from 'react';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

const App = () => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    callToApi().then((response) => {
      setMovies(response);
    });
  }, []);

  return <></>;
};

export default App;
