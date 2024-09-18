import { useEffect, useState, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchMoviesDetails } from "../services/api";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesByMoviesPage = async () => {
      try {
        setLoading(true);
        const data = await fetchMoviesDetails(moviesId);
        setMoviesDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesByMoviesPage();
  }, [moviesId]);

  return (
		<div className="container">
			<GoBackButton />
			{loading && <Loader />}
			{error !== null && <ErrorMessage errorMessage={error} />}
			{moviesDetails !== null && <MovieDetails moviesDetails={moviesDetails} />}
		</div>
	);
};

export default MovieDetailsPage;
