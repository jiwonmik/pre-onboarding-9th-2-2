import { createSlice } from '@reduxjs/toolkit';

import { LOCATION_INIT, PRICE_INIT, PRODUCT_LIST } from '../redux.interface';

export const productSlice = createSlice({
  name: 'productReducer',
  initialState: {
    products: PRODUCT_LIST,
    locationFilter: LOCATION_INIT,
    priceFilter: PRICE_INIT,
  },
  reducers: {
    filterAllLocation: (state, action) => {
      return {
        ...state,
        locationFilter: state.locationFilter.map(function (filter) {
          return { ...filter, clicked: action.payload };
        }),
      };
    },
    filterLocation: (state, action) => {
      return {
        ...state,
        locationFilter: state.locationFilter.map((filter) =>
          filter.location == action.payload.location
            ? { ...filter, clicked: action.payload.checked }
            : filter
        ),
      };
    },
    filterPrice: (state, action) => {
      return {
        ...state,
        priceFilter: {
          min: action.payload.min,
          max: action.payload.max,
        },
      };
    },
  },
});

export const { filterAllLocation, filterLocation, filterPrice } = productSlice.actions;
