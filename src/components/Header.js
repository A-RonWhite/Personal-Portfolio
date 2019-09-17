import React from 'react';
import github from '../images/github-icon.svg';
import email from '../images/email.svg';

const Header = () => (
  <nav>
    <div className="social">
      <button type="button">CV Download</button>
      <a href="https://github.com/A-RonWhite" target="blank">
        <img src={github} alt="" width="35px" id="github" />
      </a>
      <a href="mailto:webdev@aaronwhite.tech">
        <img src={email} alt="" width="35px" />
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
        <a href="#skills">Skills</a>
      </li>
    </ul>
  </nav>
);
export default Header;
