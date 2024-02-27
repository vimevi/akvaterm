import React, { useState, useEffect } from 'react';
import styles from './top-arrow.module.scss';

const TopArrow: React.FC = () => {
	const [isArrowVisible, setIsArrowVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) {
				setIsArrowVisible(true);
			} else {
				setIsArrowVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<>
			{isArrowVisible && (
				<div className={styles.topArrow}>
					<button onClick={scrollToTop}>&#8594;</button>
				</div>
			)}
		</>
	);
};

export default TopArrow;
