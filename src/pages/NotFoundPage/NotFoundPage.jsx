import { Link, useLocation } from "react-router-dom";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();

  return (
		<div className='container'>
			<Link to='/' state={location}>
				Home page
			</Link>
			<p className={styles.descr}>Sorry, this page is not found!</p>
		</div>
	);
};

export default NotFoundPage;
