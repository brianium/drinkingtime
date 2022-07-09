export interface Drink {
  abv: number;
  type: DrinkType;
  ounces: number;
}

export enum DrinkType {
  Beer = 'beer',
  Liquor = 'liquor',
  Wine = 'wine',
}

export enum DrinkSize {
  Large = 'large',
  Small = 'small',
}
