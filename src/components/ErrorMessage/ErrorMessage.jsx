import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ errorMessage }) => {
  return (
		<div>
			<p className={styles.error_message}>
				{errorMessage}. Please, try again later...
			</p>
		</div>
	);
};

export default ErrorMessage;
