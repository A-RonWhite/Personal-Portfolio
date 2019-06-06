import React from 'react';
import placeholder from '../images/about-me-img.svg';

const Portfolio = () => (
  <div className="portfolio">
    <div className="item1">
      <img src={placeholder} alt="" />
      <h5>test title</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        consectetur magnam facilis veniam neque labore ipsum non placeat vitae
        fugiat maxime ex nisi beatae blanditiis doloribus exercitationem quod?
        Corporis, sequi.
      </p>
    </div>
    <div className="item2">
      <img src={placeholder} alt="" />
      <h5>test title</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        consectetur magnam facilis veniam neque labore ipsum non placeat vitae
        fugiat maxime ex nisi beatae blanditiis doloribus exercitationem quod?
        Corporis, sequi.
      </p>
    </div>
  </div>
);
export default Portfolio;
