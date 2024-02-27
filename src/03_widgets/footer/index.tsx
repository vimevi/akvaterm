import React from 'react';
import logo from '../../06_shared/assets/images/logo-white.png';

import phone from './assets/phone.svg';
import whitePhone from './assets/phone-white.svg';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.topFooter}>
					<nav className={styles.navMenu}>
						<div>Главная</div>
						<div>Товары</div>
						<div>О нас</div>
						<div>Мы на карте</div>
						<div>Контакты</div>
					</nav>
					<p className={styles.copyright}>
						Содержимое сайта носит исключительно информационный характер.
						Указанная на сайте информация, ни при каких условиях или
						обстоятельствах – не является публичной офертой, согласно положению
						ч.1 и ч.2 ст. 437 ГK РФ. Наличие, цены, размеры, цвета, комплектации
						и т.д. – уточняйте у менеджеров по телефону на сайте
					</p>
					<div className={styles.logoBox}>
						<img src={logo} alt="" />
					</div>
				</div>
				<div className={styles.bottomFooter}>
					<button className={styles.call}>
						<a className={styles.callLink} href="to:89805517348">
							<span> +7 980 551 73 48</span> <img src={whitePhone} alt="" />
						</a>
					</button>
					<button className={styles.callBack}>
						<span>Заказать обратный звонок</span> <img src={phone} alt="" />
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
