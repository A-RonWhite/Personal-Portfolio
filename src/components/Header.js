import React from 'react';
import Button from './Button';
import github from '../images/github-icon.svg';
import email from '../images/email.svg';

const Header = () => (
  <nav>
    <div className="social">
      <Button
        buttonLink="https://drive.google.com/open?id=16Aji8IvNNBPrpq2WDg014XjiGdvJjsgh"
        buttonText="CV Download"
      />
      <a href="https://github.com/A-RonWhite" target="blank">
        <img src={github} alt="" width="40px" id="github" />
      </a>
      <a href="mailto:webdev@aaronwhite.tech">
        <img src={email} alt="" width="40px" />
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
