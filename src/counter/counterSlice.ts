import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storeState } from '../store';

type CounterState = {
  count: number;
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
  } as CounterState,
  reducers: {
    incCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    incCountDelayed(state, action: PayloadAction<number>) {},
    decCount(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
});

export const { incCount, decCount } = counterSlice.actions;

export const selectCount = (storeState: storeState) => storeState.counter.count;
