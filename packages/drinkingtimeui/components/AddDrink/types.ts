import {DrinkType} from '../Drink';

export interface Drink {
  abv: number;
  type: DrinkType;
  ounces: number;
}
