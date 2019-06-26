import React from 'react';
import portTest from '../images/domus-curve.png';

const Portfolio = () => (
  <div className="portfolio">
    <div className="item">
      <img src={portTest} alt="" />
      <span>
        <p>UX/UI Design, Project Development</p>
        <h3>Domus Group</h3>
        <p>
          Shortly after joining Domus they started to undertake the massive job
          of a complete re-build of their website to bring it into
        </p>
      </span>
    </div>
  </div>
);
export default Portfolio;
