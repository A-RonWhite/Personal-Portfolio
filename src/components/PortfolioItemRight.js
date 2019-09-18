import React from 'react';

const PortfolioItem = props => {
  const { websiteImg, preHeader, title, copy, altText, link } = props;

  return (
    <div className="item right">
      <span>
        <p>{preHeader}</p>
        <h3>{title}</h3>
        <p>{copy}</p>
        <div className="btn-align-left">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-2"
          >
            Visit
          </a>
        </div>
      </span>
      <img src={websiteImg} alt={altText} />
    </div>
  );
};

export default PortfolioItem;
