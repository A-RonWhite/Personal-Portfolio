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
      copy="Tabb is a CRUD app that allows you to save useful links and set tags to keep them easily organised, built with React on the front-end and Express on the back-end. I used React hooks through the projects and it was my first time using a back-end language to create my own API. Postman was a life saver when it came to testing my CRUD methods."
      link="https://floating-fjord-09993.herokuapp.com"
      altText="A screen shot of the Tabb homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <PortfolioItemRight
      websiteImg={brooklandsImg}
      preHeader="Design/ Development"
      title="Brooklands Interiors"
      copy="A single page static temporary page created for Brooklands Interiors using bootstrap. They wanted something that was well designed and met their branding with enough information to entice customers into their newly opened showroom. I had to work to a tight deadline to provide them with a site before their opening date, the full site is currently being developed in Wordpress."
      link="https://brooklandsinteriors.co.uk/"
      altText="A screen shot of the brooklands interiors homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <PortfolioItem
      websiteImg={domusImg}
      preHeader="Design"
      title="Domus Group"
      copy="My main role with regaurds to the remaking of the domus website was UX/UI and layout design for both the front-end and CMS. Domus sell a vast amount of different flooring products each with a multitude of specifications and relevant information to the customer so UX was a big priority for them. This meant a lot of time was spent tweaking designs and layouts to create an easy and fluid customer journey whilst also making all the necessary details easy to find. Through-out the process I acted as a consultant when meeting and dealing with the agency hired to develop the site."
      link="https://domusgroup.com"
      altText="A screen shot of my portfolio homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <h3>Other Sites</h3>
    <div className="other-sites">
      {/* <Button buttonText="Domus Group" buttonLink="https://domusgroup.com/" /> */}
      <Button
        buttonText="Travel Blog"
        buttonLink="https://wheresciera.co.uk/"
      />
      <Button buttonText="Instagram Opener" buttonLink="www.google.com" />
    </div>
  </div>
);
export default Portfolio;
