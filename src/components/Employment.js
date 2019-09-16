import React from 'react';
import SquigglyLine from './SquigglyLine';

const Employment = () => (
  <div className="employment">
    <SquigglyLine />
    <h3 className="title">Experience</h3>
    <div className="job">
      <h5>March 2017 - April 2019</h5>
      <h3>Domus Group - Marketing &amp; Design Executive</h3>
      <p>
        Whilst at domus my key responsibility was to help manage the development
        of the new company website, mock up front end designs, improve UX and
        create the CMS architecture / UI. I also...
        <ul>
          <li>Wrote custom HTML email / templates</li>
          <li>
            Setup and maintained external services such as SendGrid, Mailchimp,
            Cookiebot etc.
          </li>
          <li>Developed and implimented SEO stratergies and guidelines</li>
        </ul>
      </p>
    </div>
    <div className="job">
      <h5>January 2018 - Present</h5>
      <h3>Freelance Web Development</h3>
      <p>
        My freelance work to date consists of developing smaller websites for
        start ups or re-designing existing sites. This has allowed me to try out
        many different stacks and work flows. For a more in-depth look into the
        sites created please refer to my website.
      </p>
    </div>
    <SquigglyLine />
  </div>
);
export default Employment;
