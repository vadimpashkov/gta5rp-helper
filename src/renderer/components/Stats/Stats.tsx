import { useState } from 'react';
import { MainButton as Button, MainButtonIcon as Icon } from '../../styles';

import { AvailableFish } from '../../../core';

import SvgInfo from '../../assets/svg/info.svg';

import { FishingCard } from '../FishingCard';
import { FishingDashboard } from '../FishingDashboard';
import { useFish } from '../../stores';

export const Stats = () => {
	const [open, setOpen] = useState(false);
	const fish = useFish();

	console.log(fish);

	const handleClick = () => {
		setOpen((old) => !old);
	};

	const totalFishCount = Object.keys(fish).reduce(
		(acc, item) => (acc += (fish as { [key: string]: number })[item]),
		0,
	);

	const cards = Object.keys(fish).map((key) => {
		const foundFish = AvailableFish.filter((localFish) => localFish.storedName === key)[0];

		const count = (fish as { [key: string]: number })[key];

		const percent = (count / totalFishCount) * 100;

		return <FishingCard key={key} percent={percent} name={foundFish.name} count={count} />;
	});

	return (
		<>
			<Button onClick={handleClick}>
				<Icon>
					<use href={SvgInfo + '#outline'} />
					<use href={SvgInfo + '#fill'} />
				</Icon>
			</Button>
			{open && <FishingDashboard>{cards}</FishingDashboard>}
		</>
	);
};
