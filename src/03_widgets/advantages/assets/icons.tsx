import React from 'react';
import Icons from './sprite.svg';

interface TIcons {
	id: string;
}

const IconsAdvantages: React.FC<TIcons> = ({ id }) => {
	return (
		<svg>
			<use xlinkHref={`#${id}`} />
		</svg>
	);
};

export default IconsAdvantages;
