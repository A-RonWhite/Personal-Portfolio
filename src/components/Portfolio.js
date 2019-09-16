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
      altText="A screen shot of the domus group homepage"
    />
    <SquigglyLine />
    <PortfolioItemRight
      websiteImg={brooklandsImg}
      preHeader="Design/ Development"
      title="Brooklands Interiors"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum in tellus eget ultricies. Vestibulum quam ante, consectetur eu ornare eu, lacinia et est. Maecenas gravida lacus ut euismod convallis."
      button="https://brooklandsinteriors.co.uk/"
      altText="A screen shot of the brooklands interiors homepage"
    />
    <SquigglyLine />
    <PortfolioItem
      websiteImg={domusImg}
      preHeader="test"
      title="Blah"
      copy="Shortly after joining Domus they started to undertake the massive job of
        a complete re-build of their website to bring it into"
    />
    <SquigglyLine />
  </div>
);
export default Portfolio;
