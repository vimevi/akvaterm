import React, { forwardRef } from 'react';
import { Good } from '../../../06_shared/types/data';

import { motion } from 'framer-motion';
import styles from './ProductItem.module.scss';

const goods = {
	title: 'Отвод 88.5',
	price: '338 ₽',
	code: '#002343',
};

const ProductItem: React.FC<{ product: Good; ref: React.Ref<HTMLDivElement> }> =
	forwardRef(({ product }, ref) => {
		return (
			<div className={styles.productItem} ref={ref}>
				<div className={styles.like}></div>
				<img src={product.image} alt="" />
				<div className={styles.infoBox}>
					<p>{goods.title}</p>
					<span>{goods.price}</span>
				</div>

				<p className={styles.article}>{goods.code}</p>
				<div className={styles.btnBox}>
					<button className={styles.btnMore}>Подробнее</button>
					<button className={styles.btnBuy}>В корзину</button>
				</div>
			</div>
		);
	});

export default ProductItem;
export const MProductItem = motion(ProductItem);
