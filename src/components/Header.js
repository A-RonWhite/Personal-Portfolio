import React from 'react';
import github from '../images/github-icon.svg';
import instagram from '../images/instagram.svg';
import email from '../images/email.svg';

const Header = () => (
  <nav>
    <div className="social">
      <a href="https://github.com/A-RonWhite" target="blank">
        <img src={github} alt="" width="30px" id="github" />
      </a>
      <a href="https://www.instagram.com/aaronwh1t3/" target="blank">
        <img src={instagram} alt="" width="30px" />
      </a>
      <a href="mailto:webdev@aaronwhite.tech">
        <img src={email} alt="" width="30px" />
      </a>
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
