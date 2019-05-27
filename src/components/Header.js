import React from 'react';
import Github from '../images/github-icon.svg';

const Header = () => (
  <nav>
    <div className="social">
      <img src={Github} alt="" width="50px" />
    </div>
    <ul className="nav-links">
      <li>
        <a href="#root">Home</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#work">Work</a>
      </li>
    </ul>
  </nav>
);
export default Header;
