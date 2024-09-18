import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ trendingMovies }) => {
	const location = useLocation();

	return (
		<div className='container'>
			<h2 className={styles.movies_title}>Trending today</h2>

			<ul className={styles.movies_list}>
				{trendingMovies.map(mov => (
					<li className={styles.movies_item} key={mov.id}>
						<Link
							state={{ from: location }}
							to={`/movies/${mov.id}`}
							className={styles.movies_link}
						>
							{mov.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MovieList;
