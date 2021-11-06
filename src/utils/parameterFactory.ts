import { OptionalSearchParameters, Region } from '@nut-tree/nut-js';

export const createParam = (region: Region, confience: number) => new OptionalSearchParameters(region, confience);
