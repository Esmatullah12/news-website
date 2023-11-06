import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './news/newsSlice';

const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});

export default store;
