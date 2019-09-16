import React from 'react';
import portTest from '../images/domus-curve.png';

const PortfolioItem = props => (
  <div className="item">
    <img src={props.websiteImg} alt="" />
    <span>
      <p>{props.preHeader}</p>
      <h3>{props.title}</h3>
      <p>{props.copy}</p>
    </span>
  </div>
);

export default PortfolioItem;
