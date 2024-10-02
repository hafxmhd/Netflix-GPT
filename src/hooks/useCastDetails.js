import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCastDetails } from "../utils/moviesSlice";
import { useParams } from "react-router-dom";

const useCastDetails = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const {movieId} = useParams();

  const castDetails = useSelector((store) => store.movies.castDetails);

  const getCastDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId + "/credits?",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addCastDetails(json));
  };

  useEffect(() => {
    !castDetails && getCastDetails();
  }, []);
};

export default useCastDetails;