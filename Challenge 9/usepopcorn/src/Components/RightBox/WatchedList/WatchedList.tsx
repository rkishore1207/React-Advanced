import { WatchedMovie } from "../../../Models/Movie";
import WatchedMovieComp from "../WatchedMovie/WatchedMovie";
import './WatchedList.css';

interface WatchedListProps{
    watchedMovies:WatchedMovie[],
    onDelete:(imdbId:string) => void
}

const WatchedList = ({watchedMovies,onDelete}:WatchedListProps) => {

    const totalLength = watchedMovies.length > 0 ? watchedMovies.length : 0;
    const totalRating = watchedMovies.reduce((acc:number,value:WatchedMovie)=>{
        const updatedValue = acc + value.rating;
        return updatedValue;
    },0) ?? 0;
    const avgRating = totalRating > 0 ? (totalRating/totalLength).toFixed(2) : 0;

    const totalUserRating = watchedMovies.reduce((acc:number,value:WatchedMovie)=>{
        const updatedValue = acc + Number(value.userRatings);
        return updatedValue;
    },0) ?? 0;
    const avgUserRating = totalUserRating > 0 ? (totalUserRating/totalLength).toFixed(2) : 0;

    const totalRuntime = watchedMovies.reduce((acc:number,value:WatchedMovie)=>{
        const updatedValue = acc + value.runtime;
        return updatedValue;
    },0) ?? 0;
    const avgRuntime = totalRuntime > 0 ? (totalRuntime/totalLength).toFixed(2) : 0;

    return (
        <div style={{height:'inherit',overflow:'auto',position:'relative'}}>
            <div className="average-container">
                <p> 🤡 {totalLength} movies</p>
                <p>⭐ {avgRating}</p>
                <p>🌟 {avgUserRating}</p>
                <p>⌛{avgRuntime} min</p>
            </div>
            <div>
                { watchedMovies.length <= 0 && 
                    <p className='custom-error'>You Don't have any movies in your watch list</p>
                }
                {
                    watchedMovies.length > 0 && watchedMovies.map((movie:WatchedMovie,index:number) => {
                        return(
                            <div>
                                <WatchedMovieComp onDelete={onDelete} movie={movie} key={index} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default WatchedList;