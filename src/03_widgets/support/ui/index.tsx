// import React from 'react';
import MainSectionTitle from '../../../05_entities/main-section-title/ui';
import styles from './support.module.scss';

const Support = () => {
	return (
		<section className={styles.support}>
			<MainSectionTitle textPosition="">Поддержка</MainSectionTitle>
			<div className={styles.annotation}>
				Наши опытные специалисты всегда готовы помочь вам
			</div>
			<div className={styles.startsWith}>
				на рынке с <div>2010</div> <span>года</span>
			</div>
		</section>
	);
};

export default Support;
