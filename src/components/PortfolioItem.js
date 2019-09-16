import React from 'react';

const PortfolioItem = props => {
  const { websiteImg, preHeader, title, copy, button, altText } = props;
  return (
    <div className="item">
      <img src={websiteImg} alt={altText} />
      <span>
        <p>{preHeader}</p>
        <h3>{title}</h3>
        <p>{copy}</p>
        <a href={button} target="_blank" rel="noopener noreferrer">
          <button type="button">Visit</button>
        </a>
      </span>
    </div>
  );
};

export default PortfolioItem;
