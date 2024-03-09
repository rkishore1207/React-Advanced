/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Movie from "../../Models/Movie";
import MovieService from "../../Services/MovieService";

export const useMovies = (query: string) => {
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    if (query.length <= 2) {
      setIsError("");
      setMovies([]);
      return;
    }
    fetchMovies(controller);
    return function () {
      controller.abort();
    };
  }, [query]);

  async function fetchMovies(controller: any) {
    try {
      setIsError("");
      setIsLoading(true);
      const movies = await MovieService.getMovies("&s=", query, controller);
      console.log(movies);
      setMovies([...movies]);
    } catch (err: any) {
      if (err.name !== "AbortError") setIsError(err.message);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  return { isError, isLoading, movies };
};
