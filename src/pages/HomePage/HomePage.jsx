import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../services/api';

const HomePage = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		const fetchMoviesByHomePage = async () => {
			const data = await fetchTrendingMovies();
			setTrendingMovies(data);
		};
		fetchMoviesByHomePage();
	}, []);

	return (
		<div>
			<MovieList trendingMovies={trendingMovies} />
		</div>
	);
};

export default HomePage;
