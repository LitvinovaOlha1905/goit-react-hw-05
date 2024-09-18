import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./MovieReviews.module.css";

import { fetchMoviesReviews } from "../../pages/services/api";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [moviesReviews, setMoviesReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await fetchMoviesReviews(moviesId);
        setMoviesReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [moviesId]);

  return (
		<>
			{loading && <Loader />}
			{error !== null && <ErrorMessage errorMessage={error} />}

			{moviesReviews?.results?.length !== 0 ? (
				moviesReviews?.results?.map(result => (
					<div className={styles.reviews_content} key={result.id}>
						<h3 className={styles.reviews_title}>
							<span>Author:</span>{' '}
							{result.author}
						</h3>
						<p className={styles.reviews_descr}>
							<span>{result.content}</span>
						</p>
					</div>
				))
			) : (
				<div className={styles.reviews_message}>
					<p>Sorry, but we don&apos;t have any reviews for this movie...</p>
				</div>
			)}
		</>
	);
};

export default MovieReviews;
