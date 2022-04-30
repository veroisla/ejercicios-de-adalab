//COMPONENETE DONDE VIENE EL NOMBR EY UN RESUMEN DE LA PELÍCULA

import { Link } from 'react-router-dom';

function MovieItem(props) {
  return (
    <li key={props.movie.id} className="movies__item">
      <h2 className="movies__title">{props.movie.name}</h2>
      <p>{props.movie.synopsis}</p>
      {/* CREO ENLACE DE MÁS INFO, DIGO SIGUE LA RUTA MOVIE, Y LE PASO COMO PARÁMETRO EL ID DE CADA PELÍCULA.  */}
      <Link to={`/movie/${props.movie.id}`}>Más Info</Link>
    </li>
  );
}

export default MovieItem;

// MovieItem recibe toda la infor por props.
