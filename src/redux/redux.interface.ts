import mockData from './mock_data.json';

export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

export interface ICart extends IProduct {
  count: number;
}

export interface ILocationFilter {
  location: string;
  clicked: boolean;
}

export type IPriceFilter = {
  min: number;
  max: number;
};

export interface IProductSlice {
  products: IProduct[];
  locationFilter: ILocationFilter[];
  priceFilter: IPriceFilter;
}

export const PRODUCT_LIST: IProduct[] = mockData.travelInfo;

const locationCategory = ['전체', ...new Set(PRODUCT_LIST.map((product) => product.spaceCategory))];
export const LOCATION_INIT = locationCategory.map((location) => ({
  ['location']: location,
  ['clicked']: true,
}));

const uniquePrices = [...new Set(PRODUCT_LIST.map((product) => product.price))].sort(
  (a, b) => a - b
);
export const MAX_PRICE = Math.max(...uniquePrices);
export const PRICE_INIT = { min: 0, max: MAX_PRICE };
export const PRICE_STEPS = uniquePrices.filter((_, i) => i % 2 == 0);
export const PRICE_STEP = PRICE_STEPS[0];
