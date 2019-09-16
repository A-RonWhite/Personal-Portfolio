import React from 'react';

const PortfolioItem = props => {
  const { websiteImg, preHeader, title, copy, altText, button } = props;

  return (
    <div className="item right">
      <span>
        <p>{preHeader}</p>
        <h3>{title}</h3>
        <p>{copy}</p>
        <div>
          <a href={button} target="_blank" rel="noopener noreferrer">
            <button type="button">Visit</button>
          </a>
        </div>
      </span>
      <img src={websiteImg} alt={altText} />
    </div>
  );
};

export default PortfolioItem;
