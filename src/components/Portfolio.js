import React from 'react';
import placeholder from '../images/about-me-img.svg';
import portTest from '../images/portfolio-bg-1.svg';

const Portfolio = () => (
  <div className="portfolio">
    <div className="item1">
      <object type="image/svg+xml" data={portTest} className="portfolio-test">
        You don't support SVGs
      </object>
    </div>
  </div>
);
export default Portfolio;
