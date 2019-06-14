import React from 'react';
import bioImage from '../images/svg-bgs/about-me-img.svg';

const Bio = () => (
  <div className="bio">
    <p>
      I’m a 26 year old self taught developer with an eye for design and a love
      for travel. After completing a Graphic Design degree I quickly
      transitioned into front-end development by creating a strong foundation in
      semantic HTML and CSS. My current focus has been exploring and improving
      upon my JavaScript knowledge within the various popular frameworks but
      with a desire to transition into becoming a full stack developer.
    </p>
    <img src={bioImage} alt="" />
  </div>
);
export default Bio;
