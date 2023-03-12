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
    filterLocation: (state, action) => {
      return {
        ...state,
        locationFilter: state.locationFilter.map((locationObj) =>
          locationObj.location == action.payload.location
            ? { ...locationObj, clicked: action.payload.clicked }
            : locationObj
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

export const { filterLocation, filterPrice } = productSlice.actions;
