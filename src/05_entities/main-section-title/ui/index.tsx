import React from 'react';
import styles from './mainSectionTitle.module.scss';
import { motion } from 'framer-motion';

interface TSectionTitleProps {
	children: string;
	textPosition: string;
}

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

const MainSectionTitle: React.FC<TSectionTitleProps> = ({
	children,
	textPosition,
}) => {
	return (
		<motion.h2
			initial="hidden"
			whileInView="visible"
			variants={textAnimation}
			viewport={{ amount: 0.2, once: true }}
			className={`${styles.title} ${styles[textPosition]}`}
		>
			{children}
		</motion.h2>
	);
};

export default MainSectionTitle;
