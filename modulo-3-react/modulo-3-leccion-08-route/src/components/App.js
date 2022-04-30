import '../styles/App.scss';
// 1. IMPORTAMOS ROUTES, ROUTE Y LINK
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import { useEffect, useState } from 'react';
import getMovies from '../services/fetchMovies';
import localStorage from '../services/localStorage';
import Header from './Header';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import MovieDetails from './MovieDetails';

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

  //BUSCAR PELI QUE QUIERO MOSTRAR CUANDO LE DOY CLICK A MÁS INFO

  const { pathname } = useLocation(); //Obtengo al ruta de la aplicación

  const dataPath = matchPath('/movie/:id', pathname); //--SI COINCIDE LA RUTA CON /MOVIE/:ID, ME LO VA A GUARDAR EN DATAPATH

  const movieId = dataPath !== null ? dataPath.params.id : null; //--BUSCO EL ID DE LA PELÍCULA, CONSTANTE PARA GUARDAR EL ID, si datapath es diferente de null, voy a coger el id

  const movieFound = movies.find((item) => item.id === movieId); //-- bUSCO TODA LA INFO DE LA PELÍCULA Y SE LO PASO A MOVIEDETAIL

  return (
    <div className="App">
      {/* 3. CREAMOS NAVEGADOR, EN LOS <LI>METEMOS ETIQUETA <LINK /></LI>
      DENTRO DE ESA ETIQUETA LE PASAMOS EL ATRIBUTO TO="/", QUE NOS VA A MARCAR LA RUTA A SEGUIR. ES LA MISMA QUE HE PUESTO EN PATH.  */}
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
      {/*2.  CREAMOS LAS RUTAS DENTRO DE LAS ETIQUETAS <ROUTES></ROUTES>  
      <ROUTE></ROUTE>LA RUTA HAY QUE PASARLE DOS PROPIEDADES 
      PATH="", RUTA QUE TIENE QUE SEGUIR 
      ELEMENT={} QUE ME VA A MOSTRAR, DENTRO DEL ATRIBUTO ELEMENT PUEDO METER UN COMPONENTE ENTERO.  */}
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
        {/* RUTA DINÁMICA, EN PATH DIGO SIGUE LA RUTA MOVIE, YA QUE QUIERO MOSTRAR UN DETALLE DE LA PELÍCULA, Y : SIGNIFICA QUE ES UN PARÁMETRO, QUE CAMBIA.  */}
        <Route
          path="/movie/:id"
          element={<MovieDetails movie={movieFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
