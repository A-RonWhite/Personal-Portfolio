import React from 'react';

const PortfolioItem = props => {
  const { websiteImg, preHeader, title, copy, link, altText } = props;
  return (
    <div className="item">
      <img src={websiteImg} alt={altText} />
      <span>
        <p>{preHeader}</p>
        <h3>{title}</h3>
        <p>{copy}</p>
        <div>
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
    </div>
  );
};

export default PortfolioItem;
