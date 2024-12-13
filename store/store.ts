import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './slices/library';
import ratingsReducer from './slices/rating';
import ratingAmountReducer from './slices/ratingAmount'; 
import allGenresReducer from './slices/genre';
// Configure the store
const store = configureStore({
  reducer: {
    library: libraryReducer,
    ratings: ratingsReducer,
    ratingAmounts: ratingAmountReducer,
    allGenres: allGenresReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
