export interface Drink {
  abv: number;
  type: DrinkType;
  ounces: number;
}

export interface ConsumedDrink extends Drink {
  consumedAt: Date;
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
