import { Fish } from '../../core';

const catchFish: Fish[] = [];

export const addSessionFish = (fish: Fish) => catchFish.push(fish);

export const getSessionFish = () => catchFish;
