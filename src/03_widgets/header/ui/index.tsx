import { motion } from 'framer-motion';

import styles from './header.module.scss';
import logo from '../../../06_shared/assets/images/logo.svg';

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const LogoAnimation = {
	hidden: {
		y: window.innerHeight / 2 - 50,
		x: window.innerWidth / 2 - 110,
		scale: 6,
	},
	visible: {
		y: 0,
		x: 0,
		scale: 1,
		transition: { delay: 0.3, duration: 0.3 },
	},
};

const textAnimation1 = {
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

const Header: React.FC = () => {
	return (
		<motion.header
			className={styles.header}
			initial="hidden"
			whileInView="visible"
		>
			{/* <div className="container"> */}
			<div className={styles.headerContent}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					className={styles.logoBox}
				>
					<motion.img
						className={styles.logo}
						src={logo}
						alt="акватерм-лого"
						variants={LogoAnimation}
					/>
				</motion.div>
				<div className={styles.navBox}>
					<motion.nav
						className={styles.navContent}
						variants={textAnimation1}
						custom={1.5}
					>
						<span className={`${styles.navEl} ${styles.activeEl}`}>
							Главная
						</span>
						<span className={styles.navEl}>Товары</span>
						<span className={styles.navEl}>Контакты</span>
					</motion.nav>
				</div>
				<div className={styles.profileBox}>
					<motion.span
						variants={textAnimation1}
						custom={1.75}
						className={styles.profileItem1}
					></motion.span>
					<motion.span
						variants={textAnimation1}
						custom={2}
						className={styles.profileItem2}
					></motion.span>
					<motion.span
						variants={textAnimation1}
						custom={2.25}
						className={styles.profileItem3}
					></motion.span>
				</div>
			</div>
			{/* </div> */}
		</motion.header>
	);
};

export default Header;
