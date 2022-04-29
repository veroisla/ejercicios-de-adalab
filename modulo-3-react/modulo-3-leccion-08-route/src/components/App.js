import '../styles/App.scss';
import { Routes, Route, Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import getMovies from '../services/fetchMovies';
import localStorage from '../services/localStorage';
import Header from './Header';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function App() {
  // Variable estado que guardará un array de objetos con datos de películas
  // Al principio, estará vacio (valor por defecto: [])
  const [movies, setMovies] = useState(localStorage.get('movies', []));

  // Variable estado para tener los elementos del formulario controlados.
  // Usamos un objeto con una propiedad para cada elemento que guardará su value.
  const [newMovie, setNewMovie] = useState({
    id: '',
    name: '',
    synopsis: '',
  });

  // Usamos un useEffect para ejecutar el fetch() una sóla vez al cargar la página.
  // El fetch() está en la función getMovies() del servicio fetchMovies.
  useEffect(() => {
    if (movies.length === 0) {
      getMovies().then((data) => {
        localStorage.set('movies', data);
        setMovies(data);
      });
    }
  }, []);

  const addMovie = () => {
    // Añade una nueva película al array de películas con los datos
    // que se han recogido en el formulario.

    setMovies([...movies, newMovie]);
  };

  // Función que se encarga de cambiar las variables estado.
  // Al ejecutarla, tenemos que indicar que propiedad/variable queremos cambiar (newTitle, newSynopsis)
  // en el primer parámetro y cual va a ser el nuevo valor, del segundo parámetro.
  // La función va a guardar el valor en la propiedad que se indique en el primer parámetro:
  const changeData = (nombreInput, valueInput) => {
    setNewMovie({
      ...newMovie,
      [nombreInput]: valueInput,
    });
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio </Link>
          </li>
          <li>
            <Link to="/movies/list">Listado de películas </Link>
          </li>
          <li>
            <Link to="/movies/new">Añadir película </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Header title="Movies" pepino="promo pepino" />}
        />

        <Route
          path="/movies/list"
          element={<MovieList moviesList={movies} />}
        />

        <Route
          path="/movies/new"
          element={
            <MovieForm
              newMovie={newMovie}
              addMovie={addMovie}
              changeData={changeData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
