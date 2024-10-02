import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPlayTrailer } from "../utils/moviesSlice";
import { useParams } from "react-router-dom";

const usePlayTrailer = () => {
  const dispatch = useDispatch();
  const {movieId} = useParams();

  const playTrailer = useSelector((store) => store.movies.playTrailer);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addPlayTrailer(trailer));
  };
  useEffect(() => {
    !playTrailer && getMovieVideos();
  }, []);
};

export default usePlayTrailer;