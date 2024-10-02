import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addScienceFictionMovies } from "../utils/moviesSlice";

const useScienceFictionMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const sciencefictionMovies = useSelector((store) => store.movies.sciencefictionMovies);

  const getScienceFictionMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1&with_genres=878",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addScienceFictionMovies(json.results));
  };

  useEffect(() => {
    !sciencefictionMovies && getScienceFictionMovies();
  }, []);
};

export default useScienceFictionMovies;