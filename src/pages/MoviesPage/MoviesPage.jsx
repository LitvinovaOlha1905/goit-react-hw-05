import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../services/api';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get('query');

	useEffect(() => {
		if (query === null) return;
		const searchMoviesBySearchValue = async () => {
			const data = await fetchSearchMovies(query);
			setMovies(data.results);
		};
		searchMoviesBySearchValue();
	}, [query]);

	const handleSubmit = (values, actions) => {
		setSearchParams({ query: values.searchTerm });
		actions.resetForm();
	};

	return (
		<div>
			<SearchForm onSubmit={handleSubmit} />
			<MovieList trendingMovies={movies} />
		</div>
	);
};

export default MoviesPage;
