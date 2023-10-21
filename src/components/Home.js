import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../redux/news/newsSlice';
import NewsArticle from './NewsArticle';
import './Home.css';

const Home = () => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterNews, setFilterNews] = useState(news.news);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  useEffect(() => {
    const filteredNews = news.news.filter((aNews) => {
      const newsTitle = aNews.newsTitle ? aNews.newsTitle.toLowerCase() : '';
      const query = searchQuery.toLowerCase();
      return newsTitle.includes(query) && aNews.newsImg;
    });
    setFilterNews(filteredNews);
  }, [news.news, searchQuery]);
  return (
    <div className="home-page">
      <div className="hero">
        <h2>News Articals</h2>
        <p>
          The Wall Street Journal recent articles from the past six months
          are sorted chronologically, offering readers instant access to the
          latest news and analyses. This efficient organization ensures
          up-to-the-minute information, enabling readers to stay well-informed
          with ease.
        </p>
        <input type="text" placeholder="Search news articles" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      {news.loading && <div className="loading-text">Loading News...</div>}
      {!news.loading && news.error ? <div>{news.error}</div> : null}
      {!news.loading && news.news.length ? (
        <div className="news-articles">
          {filterNews.map((nNews) => (
            <Link className="article-card" key={nNews.newsId} to={`/newsDetails/${nNews.newsId}`}>
              <NewsArticle
                newsId={nNews.newsId}
                title={nNews.newsTitle}
                description={nNews.newsDesc}
                date={nNews.newsDate}
                imageUrl={nNews.newsImg}
              />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
