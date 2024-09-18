import { TailSpin } from "react-loader-spinner";
import styles from './Loader.module.css';

const Loader = () => {
  return (
		<div className={styles.loader}>
			<TailSpin
				visible={true}
				height='80'
				width='80'
				color='#6087fa'
				ariaLabel='tail-spin-loading'
				radius='1'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	);
};

export default Loader;
