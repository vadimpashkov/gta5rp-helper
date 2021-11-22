import { FC, useEffect, useState } from 'react';

import { priceUpdateTime } from './priceUpdateTime';
import { InfoPanel } from '../';

type BeforeTheFishPriceUpdateProps = {
	className?: string;
};

export const BeforeTheFishPriceUpdate: FC<BeforeTheFishPriceUpdateProps> = ({
	className,
}: BeforeTheFishPriceUpdateProps) => {
	const [time, setTime] = useState('00:00:00');
	const [intervalValue, setIntervalValue] = useState<any>();

	useEffect(() => {
		const interval = setInterval(() => setTime(priceUpdateTime()), 1000);
		setIntervalValue(interval);

		return () => clearInterval(intervalValue);
	}, []);

	return <InfoPanel className={className} title={time} description="до обновления цен" />;
};
