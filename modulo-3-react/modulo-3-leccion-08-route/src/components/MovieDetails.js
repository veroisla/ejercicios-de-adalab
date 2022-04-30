//COMPONENTE DE MÁS INFO

function MovieDetails(props) {
  return (
    //AQUÍ PONGO LA INFO QUE QUIERO QUE ME MUESTRE, SI ES INFO QUE NOS DA LA API, HAY QUE VER QUE EN EL FETCH ESTÉ SOLICITADO.
    <>
      <h3>Información más detallada</h3>
      <li key={props.movie.id} className="movies__item">
        <h2 className="movies__title">{props.movie.name}</h2>
        <p>{props.movie.year}</p>
        <p>{props.movie.synopsis}</p>
        <p>{props.movie.duration}</p>

        {/* añado el año en más info, tengo qeu fijarme de haberlo llamado en el fecth, si he hecho una limpia */}
      </li>
    </>
  );
}

export default MovieDetails;
