import React from 'react';
import placeholder from '../images/about-me-img.svg';
import portTest from '../images/portfolio-bg-1.svg';

const Portfolio = () => (
  <div className="portfolio">
    <h3>Portfolio</h3>
    <div className="item1">
      <object type="image/svg+xml" data={portTest} className="logo">
        You don't support SVGs
      </object>
    </div>
  </div>
);
export default Portfolio;
