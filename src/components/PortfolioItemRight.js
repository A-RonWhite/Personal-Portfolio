import React from 'react';

const PortfolioItem = props => {
  const { websiteImg, preHeader, title, copy } = props;

  return (
    <div className="item right">
      <span>
        <p>{preHeader}</p>
        <h3>{title}</h3>
        <p>{copy}</p>
      </span>
      <img src={websiteImg} alt="" />
    </div>
  );
};

export default PortfolioItem;
