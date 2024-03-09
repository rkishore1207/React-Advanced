/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react';
import MoviesList from './Components/LeftBox/MoviesList/MoviesList';
import Nav, { MoviesCount, Search } from './Components/Nav/Nav';
import { WatchedMovie } from './Models/Movie';
import MovieService from './Services/MovieService';
import './App.css';
import MovieDetails from './Models/MovieDetails';
import WatchedList from './Components/RightBox/WatchedList/WatchedList';
import MovieDetail from './Components/RightBox/MovieDetail/MovieDetail';
import Box from './Components/Box/Box';
import { useMovies } from './Components/CustomHooks/useMovies';
import { useLocalStorageState } from './Components/CustomHooks/useLocalStorageState';

function App() {

  const [watchedMovies,setWatchedMovies] = useLocalStorageState([],'watched');
  const [toggleRightBox,setToggleRightBox] = useState<boolean>(false);
  const [movieDetails,setMovieDetails] = useState<MovieDetails>({
    Actors:'',
    Country:'',
    Director:'',
    Genre:'',
    Plot:'',
    Poster:'',
    Released:'',
    Runtime:'',
    Title:'',
    Writer:'',
    imdbID:'',
    imdbVotes:'',
    imdbRating:''
  });
  const [loader,setLoader] = useState<boolean>(false);
  const [searchKeyword,setSearchKeyword] = useState<string>('');
  const [userRating,setUserRating] = useState<number>(0);
  const {isError,isLoading,movies} = useMovies(searchKeyword);
  // if(isLoading){
  //   const [hook,setHook]  = useState<boolean>(false);
  // }

  const handleSearch = (movieName:string) => {
      setSearchKeyword(movieName);
  }

  const handleClick = async(imdbID:string) => {
    setUserRating(0);
    setLoader(true);
    const movie = await MovieService.getMovieDetail('&i=',imdbID);
    setLoader(false);
    setMovieDetails({...movie});
    for (let index = 0; index < watchedMovies.length; index++) {
      if(watchedMovies[index].imdbID === movie.imdbID){
        setUserRating(watchedMovies[index].userRatings);
      }
    }
    setToggleRightBox(true);
  }

  const addingWatchedMovies = (movie:WatchedMovie) => {
    setWatchedMovies([...watchedMovies,movie]);
    setToggleRightBox(false);
  }

  const handleDeleteWatchedMovie = (imdbId:string) => {
    const deletedMovies = watchedMovies.filter((movie:WatchedMovie)=>movie.imdbID!==imdbId);
    setWatchedMovies([...deletedMovies]);
  }

  return (
    <div className="App">
      <Nav>
          <Search onClick={handleSearch}/>
          <MoviesCount totalMovies={movies.length}/>
      </Nav>
      <div className='popcorn-body'>
        <Box>
          { isLoading && !isError && <Loader/>}
          { isError && <CustomError message={isError}/>}
          { (!isLoading && !isError) && <MoviesList movies={movies} onSelectMovie={handleClick} navigate={()=>setToggleRightBox(false)}/> }
        </Box>
        <Box>
          { toggleRightBox ?
            <>
              {loader && <Loader/>}
              {!loader && <MovieDetail movie={movieDetails} userRating={userRating} onRating={addingWatchedMovies} navigateBack={()=>setToggleRightBox(false)}/>}
            </> :
            <WatchedList onDelete={handleDeleteWatchedMovie} watchedMovies={watchedMovies}/>
          }
        </Box>
      </div>
    </div>
  );
}

export default App;

function Loader(){
  return(<p className='custom-error'>Loading...</p>)
}

interface CustomErrorProps{
  message:string
}

function CustomError({message}:CustomErrorProps){
  return (<div>
    <p className='custom-error'>❌ {message}</p>
  </div>)
}
