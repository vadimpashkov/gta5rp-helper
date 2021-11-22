import { Fish } from '../../core';

let catchFish: Fish[] = [];

export const addSessionFish = (fish: Fish) => catchFish.push(fish);

export const clearSessionFish = () => {
	catchFish = [];
};

export const getSessionFish = () => catchFish;
