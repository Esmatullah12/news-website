import React from 'react';
import PropTypes from 'prop-types';
import './NewsArticle.css';
import { FaCircleArrowRight } from 'react-icons/fa6';

const NewsArticle = ({
  date, title, imageUrl, newsId,
}) => {
  const options = {
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  };
  const divStyle = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  const [weekday, month, day] = formattedDate.split(',');

  return (
    <div key={newsId} className="newsArticle" style={divStyle}>
      <FaCircleArrowRight className="card-icon" />
      <div className="news-info">
        <p className="news-date">
          {day}
          {month}
        </p>
        <p className="news-weekday">{weekday}</p>
        <p className="news-title">{title}</p>
      </div>
      <div className="over-lay" />
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
