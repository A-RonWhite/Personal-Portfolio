import React from 'react';
import portTest from '../images/domus-curve.png';

const PortfolioItem = props => {
  const { websiteImg, preHeader, title, copy } = props;
  return (
    <div className="item">
      <img src={websiteImg} alt="" />
      <span>
        <p>{preHeader}</p>
        <h3>{title}</h3>
        <p>{copy}</p>
      </span>
    </div>
  );
};

export default PortfolioItem;
