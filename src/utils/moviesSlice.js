import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    topRatedMovies:null,
    upcomingMovies:null,
    horrorMovies:null,
    sciencefictionMovies:null,
    animationMovies:null,
    movieDetails:null,
    castDetails:null,
    playTrailer:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addScienceFictionMovies: (state, action) => {
      state.sciencefictionMovies = action.payload;
    },
    addAnimationMovies: (state, action) => {
      state.animationMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addCastDetails: (state, action) => {
      state.castDetails = action.payload;
    },
    addPlayTrailer: (state, action) => {
      state.playTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpcomingMovies,addHorrorMovies,addScienceFictionMovies,addAnimationMovies,addMovieDetails,addCastDetails,addPlayTrailer } =
  moviesSlice.actions;

export default moviesSlice.reducer;