import React from 'react';
import styles from './MovieDetails.module.css';
import { Link, Outlet } from 'react-router-dom';

function MovieDetails({ moviesDetails }) {
	return (
		<div>
			<div className={styles.details_content}>
				<img
					src={`https://image.tmdb.org/t/p/w500/${moviesDetails.poster_path}`}
					alt={moviesDetails.overview}
					width={'250px'}
				/>
				<div>
					<h3 className={styles.details_title}>{moviesDetails.title}</h3>
					<ul className={styles.details_list}>
						<li className={styles.details_item}>
							<p className={styles.details_text}>
								Data: {moviesDetails.release_date}
							</p>
						</li>
						<li className={styles.details_item}>
							<p className={styles.details_text}>
								User Score: {moviesDetails.vote_average}
							</p>
						</li>
						<li className={styles.details_item}>
							<h3 className={styles.details_title}>Overview</h3>
							<p className={styles.details_text}>{moviesDetails.overview}</p>
						</li>
						<li className={styles.details_item}>
							<h3 className={styles.details_title}>Genres</h3>
							<p className={styles.details_text}>
								{moviesDetails?.genres?.map(genre => genre.name).join(', ')}
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.describe_options}>
				<ul className={styles.details_list}>
					<div className={styles.details_links}>
						<li>
							<Link className={styles.details_link_item} to='cast'>
								<div>Cast</div>
							</Link>
						</li>
						<li>
							<Link className={styles.details_link_item} to='reviews'>
								<div>Reviews</div>
							</Link>
						</li>
					</div>
				</ul>
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default MovieDetails;
