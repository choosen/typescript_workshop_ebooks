import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../store';

export type Ebook = {
  trackId: number;
  artworkUrl100: string;
  trackName: string;
  artistName: string;
  formattedPrice: string | undefined;
  averageUserRating: number | undefined;
  userRatingCount: number | undefined;
};

type ItunesState = {
  ebooks: Ebook[];
  isLoading: boolean;
};

export const itunesSlice = createSlice({
  name: 'itunes',
  initialState: {
    ebooks: [],
    isLoading: false,
  } as ItunesState,
  reducers: {
    fetchEbooks(state, action: PayloadAction<string>) {},
    setEbooks(state, action: PayloadAction<Ebook[]>) {
      state.ebooks = action.payload;
    },
    setLoadingOn(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setLoadingOff(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  fetchEbooks,
  setEbooks,
  setLoadingOn,
  setLoadingOff,
} = itunesSlice.actions;

export const selectEbooks = (state: StoreState) => state.itunes.ebooks;
export const selectIsLoading = (state: StoreState) => state.itunes.isLoading;
