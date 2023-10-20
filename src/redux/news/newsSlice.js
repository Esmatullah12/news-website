import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  news: [],
  error: '',
  newsId: 0,
};

export const fetchUsers = createAsyncThunk('news/fetchNews', async () => {
  try {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e7fcfb975734a94a573c319de6bda48');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error('Error fetching News data');
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload.map((news) => ({
        // eslint-disable-next-line no-plusplus
        newsId: state.newsId++,
        newsTitle: news.title,
        newsDesc: news.content,
        newsImg: news.urlToImage,
        newsDate: news.publishedAt,
        newsSource: news.url,
        newsAuthor: news.author,
      }));
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message;
    });
  },
});

export default newsSlice.reducer;
