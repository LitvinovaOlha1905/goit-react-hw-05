import React, { useRef } from 'react'
import styles from './GoBackButton.module.css'
import { Link, useLocation } from 'react-router-dom';

function GoBackButton() {
const location = useLocation();
const backLinkRef = useRef(location.state?.from ?? '/');

  return (
		<Link className={styles.link} to={backLinkRef.current}>
			Go back
		</Link>
	);
}

export default GoBackButton