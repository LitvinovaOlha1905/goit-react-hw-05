import { useState, useEffect } from 'react';
import styles from './HomePage.module.css'
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
			<h2 className={styles.movies_title}>Trending today</h2>
			<MovieList trendingMovies={trendingMovies} />
		</div>
	);
};

export default HomePage;
