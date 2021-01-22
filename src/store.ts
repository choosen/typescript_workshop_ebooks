import { StatHelpText } from "@chakra-ui/react";
import { configureStore, Store } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

type GetStoreState<S> = S extends Store<infer State, any> ? State : unknown;

export type storeState = GetStoreState<typeof store>;
