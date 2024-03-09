import { WatchedMovie } from "../../../Models/Movie";
import './WatchedMovie.css';

interface WatchedMovieProps{
    movie:WatchedMovie,
    onDelete:(imdbId:string)=>void
}

const WatchedMovieComp = ({movie,onDelete}:WatchedMovieProps) => {
    return (
        <div className="watched-movie-container">
            <div className="watched-movie-poster">
                <img src={movie.poster} alt={movie.title}/>
            </div>
            <div className="movie-inner-container">
                <p className="watched-movie-title"><strong>{movie.title}</strong></p>
                <div className="all-details">
                    <p className="watched-movie-imdbRating">⭐ {movie.rating}</p>
                    <p className="watched-movie-userRating">🌟 {movie.userRatings}</p>
                    <p className="watched-movie-runtime">⌛{movie.runtime} min</p>
                    <button onClick={()=>onDelete(movie.imdbID)} className="watched-movie-cancel"><strong>&times;</strong></button>
                </div>
            </div>
        </div>
    );
}

export default WatchedMovieComp;