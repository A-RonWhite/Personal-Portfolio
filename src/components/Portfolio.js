import React from 'react';
import SquigglyLine from './SquigglyLine';
import PortfolioItem from './PortfolioItem';
import PortfolioItemRight from './PortfolioItemRight';
import Button from './Button';
import domusImg from '../images/domus-curve3.png';
import brooklandsImg from '../images/brooklands-curve.png';
import portfolioImg from '../images/portfolio-site-curve.png';

const Portfolio = () => (
  <div className="portfolio" id="portfolio">
    <SquigglyLine />
    <PortfolioItem
      websiteImg={portfolioImg}
      preHeader="Development"
      title="Tabb"
      copy="Tabb is a CRUD app that allows you to save useful links and set tags to keep them easily organised, built with React on the front-end and Express on the back-end. I used React hooks through-out the project and it was my first time using a back-end language to create my own API. Context was also used to handle state management which was a concept I struggled to get my head round to begin with but got to grips with it and it's benefits by the end of the project. Redux is something I would like to try and use in a future project to provide a comparison between them. Postman was a lifesaver when it came to testing my CRUD methods at the beginning of the project and saved me a lot of headaches debugging when something went wrong."
      link="https://floating-fjord-09993.herokuapp.com"
      altText="A screen shot of the Tabb homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <PortfolioItemRight
      websiteImg={brooklandsImg}
      preHeader="Design / Development"
      title="Brooklands Interiors"
      copy="A single page static temporary page created for Brooklands Interiors using bootstrap. They wanted something that was well designed and met their branding with enough information to entice customers into their newly opened showroom. I had to work to a tight deadline to provide them with a site before their opening date, the full site is currently being developed in Wordpress and is linked below in 'Other Sites'."
      link="https://brooklandsinteriors.co.uk/"
      altText="A screen shot of the brooklands interiors homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <PortfolioItem
      websiteImg={domusImg}
      preHeader="Design / UX"
      title="Domus Group"
      copy="My main role with regards to the remaking of the domus website was UX/UI and layout design for both the front-end and CMS. Domus sell a vast amount of different flooring products each with a multitude of specifications and relevant information to the customer so UX was a big priority for them. This meant a lot of time was spent tweaking designs and layouts to create an easy and fluid customer journey whilst also making all the necessary details easy to find. Through-out the process I acted as a consultant when meeting and dealing with the agency hired to develop the site."
      link="https://domusgroup.com"
      altText="A screen shot of my portfolio homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <h4>Other Sites</h4>
    <div className="other-sites">
      <Button
        buttonText="New Brooklands Site"
        buttonLink="https://www.inside-hobby-jacket.co.uk/"
      />
      <Button
        buttonText="Where's Ciera - Travel Blog"
        buttonLink="https://wheresciera.co.uk/"
      />
      <Button buttonText="Instagram Opener" buttonLink="www.google.com" />
    </div>
  </div>
);
export default Portfolio;
