import React from 'react';
import bioImage from '../images/about-me-img-orange.svg';

const Bio = () => (
  <div className="bio">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
      ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
      facilisis.
    </p>
    <img src={bioImage} alt="" />
  </div>
);
export default Bio;
