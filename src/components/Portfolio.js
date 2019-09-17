import React from 'react';
import SquigglyLine from './SquigglyLine';
import PortfolioItem from './PortfolioItem';
import PortfolioItemRight from './PortfolioItemRight';
import domusImg from '../images/domus-curve3.png';
import brooklandsImg from '../images/brooklands-curve.png';

const Portfolio = () => (
  <div className="portfolio" id="portfolio">
    {/* Add props to change colour */}
    <SquigglyLine />
    <PortfolioItem
      websiteImg={domusImg}
      preHeader="UX/ UI Development"
      title="Domus Group"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum in tellus eget ultricies. Vestibulum quam ante, consectetur eu ornare eu, lacinia et est. Maecenas gravida lacus ut euismod convallis."
      button="https://domusgroup.com/"
      altText="A screen shot of the domus group homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <PortfolioItemRight
      websiteImg={brooklandsImg}
      preHeader="Design/ Development"
      title="Brooklands Interiors"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum in tellus eget ultricies. Vestibulum quam ante, consectetur eu ornare eu, lacinia et est. Maecenas gravida lacus ut euismod convallis."
      button="https://brooklandsinteriors.co.uk/"
      altText="A screen shot of the brooklands interiors homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <PortfolioItem
      websiteImg={domusImg}
      preHeader="Design/ Development"
      title="Tabb"
      copy="Shortly after joining Domus they started to undertake the massive job of
        a complete re-build of their website to bring it into"
      button="https://brooklandsinteriors.co.uk/"
      altText="A screen shot of the Tabb homepage with a wave effect along the edge"
    />
    <SquigglyLine />
    <div className="other-sites">
      <a href="">
        <button type="button">Site1</button>
      </a>
      <button type="button">Site2</button>
      <button type="button">Site3</button>
    </div>
  </div>
);
export default Portfolio;
