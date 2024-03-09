interface Movie{
    Poster:string,
    Title:string,
    Type:string,
    Year:string,
    imdbID:string
}

export default Movie;

export interface WatchedMovie{
    imdbID:string,
    rating:number,
    runtime:number,
    poster:string,
    title:string,
    userRatings:number
}