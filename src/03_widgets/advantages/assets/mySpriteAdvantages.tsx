import React from 'react';

interface TSprite {
	name: string;
}

const MySpriteAdvantages: React.FC<TSprite> = ({ name }) => {
	return name ? (
		<div>{'security'}</div>
	) : <svg
			id="security"
			width="120"
			height="120"
			viewBox="0 0 120 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
	  >
			<path
				opacity="0.4"
				d="M60.0003 86.7502C64.5015 86.7502 68.1503 83.1013 68.1503 78.6002C68.1503 74.0991 64.5015 70.4502 60.0003 70.4502C55.4992 70.4502 51.8503 74.0991 51.8503 78.6002C51.8503 83.1013 55.4992 86.7502 60.0003 86.7502Z"
				fill="#FF7889"
			/>
			<path
				d="M83.2495 47.2002H36.7495C16.2495 47.2002 9.99951 53.4502 9.99951 73.9502V83.2502C9.99951 103.75 16.2495 110 36.7495 110H83.2495C103.749 110 109.999 103.75 109.999 83.2502V73.9502C109.999 53.4502 103.749 47.2002 83.2495 47.2002ZM59.9995 93.7002C51.6495 93.7002 44.8995 86.9002 44.8995 78.6002C44.8995 70.3002 51.6495 63.5002 59.9995 63.5002C68.3495 63.5002 75.0995 70.3002 75.0995 78.6002C75.0995 86.9002 68.3495 93.7002 59.9995 93.7002Z"
				fill="#FF7889"
			/>
			<path
				opacity="0.4"
				d="M35.5981 47.25V41.4C35.5981 26.75 39.7481 17 59.9981 17C80.2481 17 84.3981 26.75 84.3981 41.4V47.25C86.9481 47.3 89.2481 47.4 91.3981 47.7V41.4C91.3981 27.9 88.1481 10 59.9981 10C31.8481 10 28.5981 27.9 28.5981 41.4V47.65C30.6981 47.4 33.0481 47.25 35.5981 47.25Z"
				fill="#FF7889"
			/>
	  </svg> ? (
		<div>{'security'}</div>
	) : <svg
			id="quality"
			width="111"
			height="111"
			viewBox="0 0 111 111"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
	  >
			<path
				opacity="0.4"
				d="M100.954 52.8306L98.0895 84.1559C97.1192 93.3964 93.3306 102.822 73.0015 102.822H37.7952C17.4661 102.822 13.6775 93.3964 12.7534 84.2021L9.93506 54.1242C9.98126 54.1704 10.0275 54.2166 10.1199 54.2628C11.6908 55.2793 13.2154 56.2958 14.8787 57.2198C15.5256 57.6356 16.2186 58.0052 16.9116 58.3749C22.1325 61.2394 27.723 63.5034 33.4983 65.0742C35.8085 65.7673 38.1648 66.2755 40.5673 66.6913C41.4914 74.0837 47.8211 79.8128 55.4445 79.8128C63.1604 79.8128 69.5363 73.9451 70.368 66.4141V66.3679C72.7243 65.9059 75.0806 65.3052 77.3907 64.6122C83.1661 62.8103 88.7566 60.4078 93.9774 57.3584C94.2547 57.2198 94.4857 57.0812 94.6705 56.9426C96.7958 55.7875 98.8287 54.4477 100.769 53.0616C100.862 53.0154 100.908 52.923 100.954 52.8306Z"
				fill="#639EE4"
			/>
			<path
				d="M97.4407 32.363C93.5135 28.02 86.9989 25.8485 77.435 25.8485H76.3261V25.6637C76.3261 17.9016 76.3261 8.2915 58.954 8.2915H51.9312C34.559 8.2915 34.559 17.9016 34.559 25.6637V25.8485H33.4502C23.8863 25.8485 17.3255 28.02 13.4445 32.363C8.87044 37.4915 9.00904 44.2833 9.47107 48.9497L9.51727 49.2731L9.93309 54.1244C9.9793 54.1706 10.0717 54.2168 10.1641 54.263C11.735 55.2795 13.2597 56.2959 14.923 57.22C15.5698 57.6358 16.2628 58.0054 16.9559 58.375C22.1768 61.2396 27.7673 63.5035 33.4964 65.0744C33.635 77.0409 43.4299 86.7434 55.4426 86.7434C67.5476 86.7434 77.3888 76.9022 77.3888 64.7972V64.6124C83.2103 62.8567 88.8008 60.408 94.0217 57.3586C94.2989 57.22 94.4837 57.0814 94.7147 56.9428C96.84 55.7877 98.8729 54.4478 100.813 53.0617C100.86 53.0155 100.952 52.9231 100.998 52.8307L101.183 51.1674L101.414 48.9959C101.46 48.7187 101.46 48.4877 101.506 48.1643C101.876 43.544 101.784 37.1681 97.4407 32.363ZM41.166 25.6637C41.166 17.8092 41.166 14.8523 51.9312 14.8523H58.954C69.7192 14.8523 69.7192 17.8092 69.7192 25.6637V25.8485H41.166V25.6637ZM55.4426 79.813C47.8192 79.813 41.4894 74.0839 40.5654 66.6915C40.473 66.0909 40.4268 65.444 40.4268 64.7972C40.4268 56.5269 47.1723 49.7814 55.4426 49.7814C63.7128 49.7814 70.4584 56.5269 70.4584 64.7972C70.4584 65.3516 70.4122 65.8598 70.366 66.3681V66.4143C69.5343 73.9453 63.1584 79.813 55.4426 79.813Z"
				fill="#639EE4"
			/>
			<path
				d="M52.8089 74.1764C51.9311 74.1764 51.0532 73.853 50.3602 73.16L45.7862 68.6321C44.4463 67.2922 44.4463 65.0745 45.7862 63.7347C47.126 62.3948 49.3438 62.3948 50.6836 63.7347L52.9013 65.9524L60.34 59.1144C61.726 57.8207 63.9437 57.9131 65.2374 59.2992C66.5311 60.6853 66.4387 62.903 65.0526 64.1967L55.2115 73.2986C54.4722 73.853 53.6406 74.1764 52.8089 74.1764Z"
				fill="#639EE4"
			/>
	  </svg> ? (
		<div>{'security'}</div>
	) : <svg
			id="prices"
			width="112"
			height="111"
			viewBox="0 0 112 111"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
	  >
			<path
				d="M88.6707 69.4175C78.4599 69.4175 70.1897 77.6877 70.1897 87.8985C70.1897 91.3637 71.16 94.644 72.8695 97.4162C76.0575 102.776 81.9251 106.379 88.6707 106.379C95.4163 106.379 101.284 102.776 104.472 97.4162C106.181 94.644 107.152 91.3637 107.152 87.8985C107.152 77.6877 98.8815 69.4175 88.6707 69.4175ZM98.2347 85.9118L88.3935 95.0137C87.7467 95.6143 86.8688 95.9377 86.0371 95.9377C85.1593 95.9377 84.2816 95.6143 83.5885 94.9213L79.0143 90.3472C77.6744 89.0073 77.6744 86.7896 79.0143 85.4498C80.3541 84.1099 82.5718 84.1099 83.9117 85.4498L86.1296 87.6675L93.5219 80.8295C94.908 79.5358 97.1257 79.6282 98.4194 81.0143C99.713 82.4004 99.6207 84.5719 98.2347 85.9118Z"
				fill="#639EE4"
			/>
			<path
				d="M102.531 34.9506V41.6962H10.126V34.9506C10.126 24.3702 18.7198 15.8228 29.3001 15.8228H83.3569C93.9372 15.8228 102.531 24.3702 102.531 34.9506Z"
				fill="#639EE4"
			/>
			<path
				opacity="0.4"
				d="M10.126 41.6958V76.1629C10.126 86.7433 18.6735 95.2907 29.2539 95.2907H58.1767C60.8565 95.2907 63.1664 93.0268 62.9354 90.347C62.2886 83.2781 64.5526 75.6085 70.8362 69.5097C73.4235 66.9686 76.6115 65.0281 80.0767 63.9192C85.852 62.0711 91.4423 62.3021 96.386 63.9654C99.3892 64.9819 102.531 62.8104 102.531 59.6224V41.6958H10.126ZM37.8475 79.8129H28.607C26.7127 79.8129 25.1418 78.242 25.1418 76.3477C25.1418 74.4534 26.7127 72.8825 28.607 72.8825H37.8475C39.7418 72.8825 41.3127 74.4534 41.3127 76.3477C41.3127 78.242 39.7418 79.8129 37.8475 79.8129Z"
				fill="#639EE4"
			/>
			<path
				d="M41.3139 76.348C41.3139 78.2423 39.7431 79.8132 37.8488 79.8132H28.6083C26.714 79.8132 25.1431 78.2423 25.1431 76.348C25.1431 74.4537 26.714 72.8828 28.6083 72.8828H37.8488C39.7431 72.8828 41.3139 74.4537 41.3139 76.348Z"
				fill="#639EE4"
			/>
	  </svg> ? (
		<div>{'security'}</div>
	) : <svg
			id="suppliers"
			width="107"
			height="106"
			viewBox="0 0 107 106"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
	  >
			<path
				opacity="0.4"
				d="M66.7531 13.6268V53.2154C66.7531 58.054 62.7943 62.0128 57.9556 62.0128H9.56958V33.9489C12.7807 37.7758 17.7074 40.1511 23.1618 40.0192C27.6045 39.9312 31.6072 38.2157 34.5984 35.3565C35.962 34.2128 37.1057 32.7612 37.9855 31.1777C39.569 28.4944 40.4487 25.3273 40.3607 22.0282C40.2288 16.8817 37.9415 12.3511 34.3785 9.22803H62.3544C64.7737 9.22803 66.7531 11.2075 66.7531 13.6268Z"
				fill="#639EE4"
			/>
			<path
				d="M97.5443 62.0129V75.2091C97.5443 82.511 91.6499 88.4053 84.3481 88.4053H79.9493C79.9493 83.5667 75.9905 79.6078 71.1519 79.6078C66.3132 79.6078 62.3544 83.5667 62.3544 88.4053H44.7594C44.7594 83.5667 40.8006 79.6078 35.962 79.6078C31.1234 79.6078 27.1645 83.5667 27.1645 88.4053H22.7658C15.4639 88.4053 9.56958 82.511 9.56958 75.2091V62.0129H57.9557C62.7943 62.0129 66.7531 58.0541 66.7531 53.2154V22.4243H74.8469C78.014 22.4243 80.9171 24.1399 82.5007 26.8671L90.0223 40.0192H84.3481C81.9287 40.0192 79.9493 41.9987 79.9493 44.418V57.6142C79.9493 60.0335 81.9287 62.0129 84.3481 62.0129H97.5443Z"
				fill="#639EE4"
			/>
			<path
				opacity="0.4"
				d="M35.9615 97.2028C40.8202 97.2028 44.759 93.2641 44.759 88.4054C44.759 83.5467 40.8202 79.6079 35.9615 79.6079C31.1028 79.6079 27.1641 83.5467 27.1641 88.4054C27.1641 93.2641 31.1028 97.2028 35.9615 97.2028Z"
				fill="#639EE4"
			/>
			<path
				opacity="0.4"
				d="M71.151 97.2028C76.0097 97.2028 79.9484 93.2641 79.9484 88.4054C79.9484 83.5467 76.0097 79.6079 71.151 79.6079C66.2923 79.6079 62.3535 83.5467 62.3535 88.4054C62.3535 93.2641 66.2923 97.2028 71.151 97.2028Z"
				fill="#639EE4"
			/>
			<path
				opacity="0.4"
				d="M97.5442 55.5467V62.0127H84.348C81.9286 62.0127 79.9492 60.0333 79.9492 57.614V44.4178C79.9492 41.9985 81.9286 40.019 84.348 40.019H90.0222L96.4004 51.1917C97.1482 52.5113 97.5442 54.0071 97.5442 55.5467Z"
				fill="#639EE4"
			/>
			<path
				d="M34.3787 9.22821C31.2116 6.41302 26.9887 4.74151 22.37 4.82948C18.2352 4.91746 14.4524 6.45698 11.4612 8.92027C7.50236 12.2193 5.0391 17.278 5.17107 22.8204C5.25904 26.1195 6.22678 29.1985 7.94229 31.7937C8.42615 32.5415 8.95398 33.2893 9.5698 33.9491C12.7809 37.776 17.7076 40.1513 23.162 40.0193C27.6047 39.9314 31.6075 38.2159 34.5986 35.3567C35.9622 34.213 37.106 32.7614 37.9857 31.1778C39.5693 28.4946 40.4489 25.3275 40.3609 22.0284C40.229 16.8819 37.9417 12.3513 34.3787 9.22821ZM31.8274 20.3131L22.6339 29.1984C21.9741 29.8142 21.1825 30.1222 20.3467 30.1222C19.511 30.1222 18.7191 29.8142 18.0593 29.1984L13.6166 24.9758C12.2969 23.7001 12.2531 21.6327 13.5288 20.3131C14.8044 18.9935 16.8718 18.9494 18.1914 20.225L20.3467 22.2923L27.2528 15.6064C28.5724 14.3308 30.6398 14.3746 31.9154 15.6942C33.1911 16.9699 33.147 19.0375 31.8274 20.3131Z"
				fill="#639EE4"
			/>
	  </svg> ? (
		<div>{'security'}</div>
	) : (
		<svg
			id="guarantees"
			width="106"
			height="106"
			viewBox="0 0 106 106"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.4"
				d="M80.9711 25.3714L29.33 77.0125C27.3945 78.9479 24.1394 78.6839 22.5559 76.3966C17.1015 68.4349 13.8904 59.0216 13.8904 49.3444V30.034C13.8904 26.4271 16.6176 22.3362 19.9607 20.9726L44.4616 10.9435C50.004 8.65619 56.1623 8.65619 61.7047 10.9435L79.4755 18.2014C82.4227 19.3891 83.1704 23.172 80.9711 25.3714Z"
				fill="#639EE4"
			/>
			<path
				d="M85.106 31.398C87.9652 28.9787 92.32 31.0461 92.32 34.785V49.3448C92.32 70.8546 76.7046 91.0008 55.3707 96.8951C53.9191 97.291 52.3356 97.291 50.84 96.8951C44.5938 95.1356 38.7874 92.1885 33.8168 88.3176C31.7054 86.6901 31.4855 83.611 33.333 81.7195C42.9222 71.9104 70.9861 43.3186 85.106 31.398Z"
				fill="#639EE4"
			/>
		</svg>
	);
};

export default MySpriteAdvantages;
