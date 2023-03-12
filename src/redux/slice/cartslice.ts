import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { ICart } from '../redux.interface';

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState: [] as ICart[],
  reducers: {
    increase: (state, action) => {
      const newProduct = state.find((product) => product.idx == action.payload.idx);
      if (newProduct) {
        if (newProduct?.count == newProduct.maximumPurchases) {
          toast.error('예약 가능 수량을 초과하였습니다.');
          return;
        }
        newProduct.count += 1;
      } else {
        state.push({
          ...action.payload,
          count: 1,
        });
      }
      toast.success('상품을 장바구니에 담았습니다.');
    },
    decrease: (state, action) => {
      const newProduct = state.find((product) => product.idx == action.payload.idx);
      if (newProduct) {
        newProduct.count -= 1;
      }
    },
    remove: (state, action) => state.filter((product) => product.idx !== action.payload),
  },
});

export const { increase, decrease, remove } = cartSlice.actions;
