import Advantages from '../../03_widgets/advantages';
import HomeGreeting from '../../03_widgets/home-greeting/ui';
import Support from '../../03_widgets/support/ui';
import TopProducts from '../../03_widgets/top-products/ui';
import Maps from '../../06_shared/ui/map';
import TopArrow from '../../06_shared/ui/top-arrow';
import './main.scss';

export default function Main() {
	return (
		<main>
			<div className="container">
				<HomeGreeting />
				<TopProducts />
				<Support />
				<Advantages />
				<TopArrow />
			</div>
			<Maps />
		</main>
	);
}
