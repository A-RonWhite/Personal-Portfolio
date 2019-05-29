import React from 'react';
import bobble from '../images/cover-bobble.svg';

const LandingPage = () => (
  <div className="cover-sec">
    <h1>
      Aaron <br /> White
    </h1>
    <h2>
      A front end web developer based in London with a love for JavaScript
    </h2>
    <img src={bobble} alt="" id="bobble" />
  </div>
);
export default LandingPage;
