import axios from "axios";

const options = {
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTBkMjY1MGVhMzUzMzU4OWY2ZmE2ODkxMTJhMzhmMiIsIm5iZiI6MTcyNjY3NTQzMS4zMjUxNzIsInN1YiI6IjY2ZTE4N2M3ZjcyZjIyOTg1ZDM2YWE5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2CqNLi-5TEDvruz2ZzU3eIt02dmi3vJpZWitGj7dgsU',
	},
};

export const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = await axios.get(url, options);

  return response.data.results;
};

export const fetchMoviesDetails = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMoviesCredits = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/credits`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMoviesReviews = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchSearchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1`;
  const response = await axios.get(url, options);

  return response.data;
};
