import MainSectionTitle from '../../05_entities/main-section-title/ui';
import styles from './advantages.module.scss';
import { motion } from 'framer-motion';

import security from './assets/security.svg';
import quality from './assets/quality.svg';
import prices from './assets/prices.svg';
import suppliers from './assets/suppliers.svg';
import guarantees from './assets/guarantees.svg';

const Advantages = () => {
	return (
		<section className={styles.advantages}>
			<MainSectionTitle textPosition="rightTitle">
				Преимущества
			</MainSectionTitle>
			<ul>
				<motion.li>
					<img src={security} alt="" />
					<span>Надежность</span>
				</motion.li>
				<li>
					<img src={quality} alt="" />
					<span>Качество</span>
				</li>
				<li>
					<img src={prices} alt="" />
					<span>Цены</span>
				</li>
				<li>
					<img src={suppliers} alt="" />
					<span>Проверенные поставщики</span>{' '}
				</li>
				<li>
					<img src={guarantees} alt="" />
					<span>Гарантия</span>
				</li>
			</ul>
		</section>
	);
};

export default Advantages;
