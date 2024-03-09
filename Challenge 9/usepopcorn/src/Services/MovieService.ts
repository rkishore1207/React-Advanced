/* eslint-disable import/no-anonymous-default-export */

class MovieService {

    async getMovies(moviesType:string,movieName:string,controller:any){
        const response = await fetch(`https://omdbapi.com?apikey=fe2f6c44${moviesType}${movieName}`,{signal:controller.signal});
        if(!response.ok)
            throw new Error("Something went wrong");
        const result = await response.json();
        console.log(result);
        if(result.Response === 'False')
            throw new Error("Movies not found");
        return result.Search;
    };

    async getMovieDetail(moviesType:string,movieName:string){
        const response = await fetch(`https://omdbapi.com?apikey=fe2f6c44${moviesType}${movieName}`);
        if(!response.ok)
            throw new Error("Something went wrong");
        const result = await response.json();
        if(result.Response === 'False')
            throw new Error("Movies not found");
        return result;
    };
}

export default new MovieService();