import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/moviesSlice";
import { useParams } from "react-router-dom";

const useMovieDetails = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const {movieId} = useParams();

  const movieDetails = useSelector((store) => store.movies.movieDetails);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId + "",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieDetails(json));
  };

  useEffect(() => {
    !movieDetails && getMovieDetails();
  }, []);
};

export default useMovieDetails;