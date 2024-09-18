import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './SearchForm.module.css';

// Валидация для формы поиска
const SearchMovies = Yup.object().shape({
	searchTerm: Yup.string()
		.min(2, 'Too Short! Min 2 symbols.')
		.max(50, 'Too Long! Max 50 symbols.')
		.required('Required! Enter any word...'),
});

const initialValues = {
	searchTerm: '',
};

const SearchForm = ({ onSubmit }) => {
	return (
		<div className='container'>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={SearchMovies}
			>
				<Form>
					<label className={styles.search_label}>
						<Field
							className={styles.search_input}
							type='text'
							name='searchTerm'
							placeholder='Search movies'
						/>
					</label>
					<button className={styles.search_btn} type='submit'>
						Search
					</button>
					<br />
					<ErrorMessage
						className={styles.search_message}
						name='searchTerm'
						component='span'
					/>
				</Form>
			</Formik>
		</div>
	);
};

export default SearchForm;
