import styles from './home-greeting.module.scss';
import { motion } from 'framer-motion';

const textAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export default function HomeGreeting() {
	return (
		<motion.div
			className={styles.homeGreeting}
			initial="hidden"
			whileInView="visible"
			variants={textAnimation}
			viewport={{ amount: 0.2, once: true }}
			custom={1}
		>
			<motion.h1
				className={styles.title}
				viewport={{ amount: 0.2, once: true }}
				variants={textAnimation}
				custom={1.5}
			>
				Товары для водоснабжения <br /> <span>и отопления</span>{' '}
			</motion.h1>
			<motion.button
				className={styles.btn}
				viewport={{ amount: 0.2, once: true }}
				variants={textAnimation}
				custom={2}
			>
				Каталог<span> &#8594;</span>
			</motion.button>

			<motion.div className={styles.discount}></motion.div>
		</motion.div>
	);
}
