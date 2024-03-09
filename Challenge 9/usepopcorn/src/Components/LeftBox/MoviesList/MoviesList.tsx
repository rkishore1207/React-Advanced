/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Movie from "../../../Models/Movie";
import MovieComp from "../Moviie/Movie";
import './MoviesList.css';

interface MoviesListProps{
    movies:Movie[],
    onSelectMovie:(imdbID:string) => void,
    navigate:()=>void
}

const MoviesList = ({movies,onSelectMovie,navigate}:MoviesListProps) => {

    useEffect(()=>{
        return function(){
            navigate();
        }
    },[movies]);

    return (
        <div className="movies-names">
            {
                movies.map((movie:Movie,index:number) => {
                    return(
                        <MovieComp movie={movie} key={index} onSelectMovie={onSelectMovie}/>
                    )
                })
            }
        </div>
    );
}

export default MoviesList;