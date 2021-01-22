import { PayloadAction } from '@reduxjs/toolkit';
import { incCount, incCountDelayed } from './counterSlice';
import { call, put, takeLatest } from 'redux-saga/effects';

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function* onIncCountDelayed(action: PayloadAction<number>) {
  yield call(wait, 1000);
  yield put(incCount(action.payload));
}

export function* counterSaga() {
  yield takeLatest(incCountDelayed.type, onIncCountDelayed);
}
