import { MProductItem } from '../../../04_features/product-item/ui';
import MainSectionTitle from '../../../05_entities/main-section-title/ui';

import { Good } from '../../../06_shared/types/data';
import styles from './TopProducts.module.scss';
import { motion } from 'framer-motion';

import image1 from './assets/good-image1.png';
import image2 from './assets/good-image2.png';
import image3 from './assets/good-image3.png';
import image4 from './assets/good-image4.png';

const goodsArr: Good[] = [
	{
		title: 'Отвод 88.5',
		price: '338 ₽',
		code: '#002342',
		image: image1,
		isDiscount: false,
		discountSize: 0,
	},
	{
		title: 'Смеситель АМ. РМ.',
		price: '16 382 ₽',
		code: '#002332',
		image: image2,
		isDiscount: false,
		discountSize: 0,
	},
	{
		title: 'Возвухоотводчик',
		price: '571 ₽',
		code: '#002351',
		image: image3,
		isDiscount: false,
		discountSize: 0,
	},
	{
		title: 'Труба',
		price: '229 ₽ / пог. м.',
		code: '#002340',
		image: image4,
		isDiscount: false,
		discountSize: 0,
	},
];

const textAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export default function TopProducts() {
	return (
		<motion.section>
			<MainSectionTitle textPosition={`rightTitle`}>
				Товары месяца
			</MainSectionTitle>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className={styles.topProductsList}
			>
				{goodsArr.map((good, index) => {
					return (
						<MProductItem
							variants={textAnimation}
							custom={index * 0.4}
							product={good}
							viewport={{ amount: 0.2, once: true }}
							key={good.code}
						/>
					);
				})}
			</motion.div>
			<button className={styles.toToCatalog}>
				Перейти в каталог <span> &#8594;</span>
			</button>
		</motion.section>
	);
}
