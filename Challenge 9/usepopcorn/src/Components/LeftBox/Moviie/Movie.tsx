import Movie from "../../../Models/Movie";
import './Movie.css';

interface MovieProps{
    movie:Movie,
    onSelectMovie:(imdbID:string) => void
}

const MovieComp = ({movie,onSelectMovie}:MovieProps) => {
    return (
        <div className="movie-container" onClick={()=>onSelectMovie(movie.imdbID)}>
            <div className="poster">
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="title-year">
                <h2>{movie.Title}</h2>
                <p><span>🗓️</span>&nbsp;<span>{movie.Year}</span></p>
            </div>
        </div>
    );
}

export default MovieComp;