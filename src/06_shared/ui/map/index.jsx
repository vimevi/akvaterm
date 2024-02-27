import React, { useEffect } from 'react';
import DG from '2gis-maps';

import styles from './map.module.scss';
import {
	YMaps,
	Map,
	TrafficControl,
	RouteButton,
	Placemark,
	ZoomControl,
} from '@pbe/react-yandex-maps';

const Maps = () => {
	// useEffect(() => {
	// 	let map;
	// 	map = DG.map('map-container', {
	// 		center: [51.62486507231567, 39.231746],
	// 		zoom: 15,

	// 		minZoom: 6,
	// 		fullscreenControl: false,
	// 		zoomControl: false,
	// 	});
	// 	// DG.marker([51.62486507231567, 39.231746]).addTo(map);
	// 	DG.marker([51.62486507231567, 39.231746]).addTo(map).bindPopup('Я попап!');
	// 	return () => map && map.remove();
	// 	// }
	// }, []);

	return (
		<>
			{/* <div id="map-container" style={{ width: '100%', height: 524 }}></div>
			<p className="map-section-text">
				Лебедева, 6 <br /> с 8:00 - до 17:00, <br /> с понедельника по пятницу
			</p> */}
			<YMaps>
				{/* <p className="map-section-text">
					Лебедева, 6 <br /> с 8:00 - до 17:00, <br /> с понедельника по пятницу
				</p> */}
				<div className={styles.topMapBlur}></div>
				<Map
					width={'100%'}
					height={'524px'}
					defaultState={{ center: [51.62486, 39.23174], zoom: 15 }}
				>
					<Placemark geometry={[51.62486, 39.23174]} />
					{/* <TrafficControl options={{ float: 'right' }} /> */}
					<ZoomControl options={{ float: 'right' }} />
				</Map>
			</YMaps>
		</>
	);
};

export default Maps;
