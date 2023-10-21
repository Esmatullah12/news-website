import React from 'react';
import PropTypes from 'prop-types';
import './NewsArticle.css';

// const truncateTitle = (title) => {
//   const words = title.split(' ');
//   if (words.length > 14) {
//     return `${words.slice(0, 5).join(' ')}...`;
//   }
//   return title;
// };

const NewsArticle = ({
  date, title, imageUrl, newsId,
}) => {
  const options = {
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  const [weekday, month, day] = formattedDate.split(',');

  return (
    <div key={newsId} className="newsArticle">
      <img className="new-card-img" src={imageUrl} alt="News Article" />
      <div className="news-info">
        <p className="news-date">
          {day}
          {month}
        </p>
        <p>{weekday}</p>
        <p className="news-title">{title}</p>
        <p className="read-more">Read more...</p>
      </div>
    </div>
  );
};

NewsArticle.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  newsId: PropTypes.number.isRequired,
};

export default NewsArticle;
