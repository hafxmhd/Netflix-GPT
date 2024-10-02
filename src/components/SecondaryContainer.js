import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 pt-0 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
          <MovieList title={"Horror"} movies={movies.horrorMovies} />
          <MovieList title={"Science Fiction"} movies={movies.sciencefictionMovies} />
          <MovieList title={"Animation"} movies={movies.animationMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;