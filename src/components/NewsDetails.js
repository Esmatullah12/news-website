import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    <div className="news-detail-page">
      <div className="news-heading">
        <img className="details-date-img" src={targetNews.newsImg} alt="News Article" />
        <div>
          <h2 className="details-page-title">{targetNews.newsTitle}</h2>
          <p className="details-page-date">{formattedDate}</p>
        </div>
      </div>
      <div className="details-news-info">
        <p className="new-info">News Information</p>
        <p className="details-page-desc">{targetNews.newsDesc}</p>
        <div className="details-page-desc">
          <p>Author:</p>
          <p>{targetNews.newsAuthor}</p>
        </div>
        <div className="details-page-desc">
          <p>Original source click</p>
          <a href={targetNews.newsSource}>here</a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
