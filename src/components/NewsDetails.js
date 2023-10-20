import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './NewsDetails.css';

const NewsDetails = () => {
  const params = useParams();
  const { newsId } = params;
  const targetNews = useSelector((state) => state.news.news
    .find((nNews) => nNews.newsId === parseInt(newsId, 10)));
  if (!targetNews) {
    return <div>Product Not Found</div>;
  }
  const format = {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',
  };
  const formattedDate = new Date(targetNews.newsDate).toLocaleDateString(undefined, format);

  return (
    <>
      <Link className="back-btn" to="/">Back To Home</Link>
      <div className="news-detail-page">
        <img className="details-date-img" src={targetNews.newsImg} alt="News Article" />
        <div className="details-news-info">
          <h2 className="details-page-title">{targetNews.newsTitle}</h2>
          <p className="details-page-date">{formattedDate}</p>
          <p className="details-page-desc">{targetNews.newsDesc}</p>
          <p>
            Author:
            {' '}
            {targetNews.newsAuthor}
          </p>
          <p>
            Original source click
            {' '}
            <a href={targetNews.newsSource}>here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
