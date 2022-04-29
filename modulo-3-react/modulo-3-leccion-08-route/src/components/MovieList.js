import '../styles/MovieList.scss';
import MovieItem from './MovieItem';

function MovieList(props) {

    const htmlMovies = props.moviesList.map((movieItem, index) => {
        return <MovieItem key={index} movie={movieItem} />
    });

    return (
        <>
            <ul className="movies__list">
                {htmlMovies}
            </ul>
        </>


    );
}

export default MovieList;