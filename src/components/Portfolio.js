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
      title="Blah"
      preHeader="test"
      copy="Shortly after joining Domus they started to undertake the massive job of
            a complete re-build of their website to bring it into"
    />
    <PortfolioItemRight
      websiteImg={brooklandsImg}
      title="Blah"
      preHeader="test"
      copy="Shortly after joining Domus they started to undertake the massive job of
        a complete re-build of their website to bring it into"
    />
    <PortfolioItem
      websiteImg={domusImg}
      title="Blah"
      preHeader="test"
      copy="Shortly after joining Domus they started to undertake the massive job of
        a complete re-build of their website to bring it into"
    />
    <SquigglyLine />
  </div>
);
export default Portfolio;
