import styles from './Navigation.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const styles_link = ({ isActive }) =>
		clsx(styles.link, isActive && styles.link_active);

	return (
		<div>
			<nav className={styles.nav}>
				<NavLink className={styles_link} to='/'>
					Home
				</NavLink>
				<NavLink className={styles_link} to='/movies'>
					Movies
				</NavLink>
			</nav>
		</div>
	);
};

export default Navigation;
