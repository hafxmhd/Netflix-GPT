import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";



const VideoTitle = ({ title, overview,}) => {
  const navigate = useNavigate();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const handlePlay = () => {
    return( 
      window.location.assign("https://www.youtube.com/embed/" +
    trailerVideo?.key +
    "?&autoplay=1&loop=1&controls=0&&showinfo=0")
    );
   };
  

  const handleMoreInfo = () => {

      navigate("/details/" + nowPlayingMovies[0]?.id);
    };
    
    return (
      <div className="w-screen aspect-video pt-[10%] px-6 md:px-24 -mt-10 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
          <button onClick={handlePlay} className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-50 hover:text-white">
          ► Play
          </button>
          <button onClick={handleMoreInfo} className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:text-black">
          ⓘ More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;