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
      copy="Tabb is a CRUD app that allows you to save useful links and set tags to keep them easily organised. Easy on any device, means that whenever or wherever you see a website it is simple to save interesting websites to your own account to view anytime. Built with React on the front-end and Express on the back-end."
      link="https://floating-fjord-09993.herokuapp.com"
      altText="A screen shot of the Tabb homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <PortfolioItemRight
      websiteImg={brooklandsImg}
      preHeader="Design/ Development"
      title="Brooklands Interiors"
      copy="This is a single page static site created as a temporary page for Brooklands Interiors using bootstrap. They wanted something that was well designed and met their branding with enough information to entice customers into their newly opened showroom. I had to work to a site deadline to provide them with a site before their opening date, the full site is currently being developed in Wordpress."
      link="https://brooklandsinteriors.co.uk/"
      altText="A screen shot of the brooklands interiors homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <PortfolioItem
      websiteImg={domusImg}
      preHeader="Design/ Development"
      title="This website"
      copy="This portfolio site is built in React, using Sass and was a fantastic opportunity to explore design without the restrictions that come with client briefs. I wanted to push my design limitations with this project instead of conforming to a layout I could easily/ quickly produce. I also took the time to familiarise myself with using Sass through-out the project."
      link="https://brooklandsinteriors.co.uk/"
      altText="A screen shot of my portfolio homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <div className="other-sites">
      <Button buttonText="Domus Group" buttonLink="https://domusgroup.com/" />
      <Button
        buttonText="Travel Blog"
        buttonLink="https://wheresciera.co.uk/"
      />
      <Button buttonText="Instagram Opener" buttonLink="www.google.com" />
    </div>
  </div>
);
export default Portfolio;
