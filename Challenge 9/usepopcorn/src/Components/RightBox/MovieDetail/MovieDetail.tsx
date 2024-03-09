/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import MovieDetails from "../../../Models/MovieDetails";
import "./MovieDetail.css";
import Ratings from "../Ratings/Ratings";
import { WatchedMovie } from "../../../Models/Movie";

interface MovieDetailProps {
  movie: MovieDetails;
  onRating: (watchedMovie:WatchedMovie) => void,
  userRating:number,
  navigateBack: () => void;
}

const MovieDetail = ({ movie, onRating, navigateBack,userRating }: MovieDetailProps) => {
  const [rating, setRating] = useState(-1);
  const [watchedMovie,setWatchedMovie] = useState<WatchedMovie>({
    imdbID:'',
    rating:0,
    runtime:0,
    poster:'',
    title:'',
    userRatings:0
  });

  useEffect(()=>{
    document.title = movie.Title;
    return function(){
      document.title = 'usePopcorn';
    }
  },[movie.Title]);

  useEffect(() => {
    console.log(movie);
    setRating(-1);
  }, [movie]);

  // useEffect(()=>{
  //   onRating(watchedMovie);
  // },[watchedMovie]);

  const handleSetRating = (userRating: number) => {
    setWatchedMovie({...watchedMovie,imdbID:movie.imdbID,title:movie.Title,poster:movie.Poster,
      runtime:(isNaN(Number(movie.Runtime.split(' ').at(0))) ? 0 : Number(movie.Runtime.split(' ').at(0))),
      userRatings:userRating,rating:(isNaN(Number(movie.imdbRating)) ? 0 : Number(movie.imdbRating))});
    setRating(userRating);
  };

  const handleClick = () => {
    onRating(watchedMovie);
  }

  return (
    <div className="movies-names movies-details-container">
      <div className="movie-header">
        <div onClick={navigateBack}>
          <button className="back-button">&larr;</button>
        </div>
        <div className="movie-poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-details">
          <h1>{movie.Title}</h1>
          <p>🗓️ {movie.Released}</p>
          <p>⌛ {movie.Runtime}</p>
          <p>🤩 {movie.Genre}</p>
          <p>
            ⭐ {movie.imdbRating} IMDB Rating ({movie.imdbVotes})
          </p>
        </div>
      </div>
      <div className="movie-body">
        <div className="ratings-outer-container">
          { userRating <= 0 ?
            <>
              <Ratings
                maxLength={10}
                onClickRating={handleSetRating}
                key={movie.imdbID}
              />
              {rating >= 0 && (
                <div className="add-to-watchlist">
                  <button onClick={handleClick}>
                    + Add to WatchList
                  </button>
                </div>
              )}
            </> :
            <p> You rated this movie with {userRating}</p>
          }
        </div>
        <div className="movie-body-details">
          <p>
            <i>{movie.Plot}</i>
          </p>
          <p>Starring {movie.Actors}</p>
          <p>Directed by {movie.Director}</p>
          <p>Written by {movie.Writer}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
