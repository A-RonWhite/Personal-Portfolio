import React from 'react';
import SquigglyLineBrown from './SquigglyLineBrown';

const Employment = () => (
  <div className="employment">
    <SquigglyLineBrown />
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
        A link to the domus website which was built in Ruby On Rails can be
        found above in the portfolio section.
      </p>
    </div>
    <div className="job">
      <h5>January 2018 - Present</h5>
      <h3>Freelance Web Development</h3>
      <p>
        My freelance work to date consists of developing smaller websites for
        start ups or re-designing existing sites. My Graphic Design education
        helped me in my freelance work due to most clients generally wanting
        someone to do everything (logo, site design/layout, branding etc). This
        has given me the freedom to develop and try out different stacks/
        workflows over the past few years. The experience working with clients
        to a deadline as well as keep their needs in mind at every step has been
        amazing experience that will lend well into any future jobs.
      </p>
    </div>
    <SquigglyLineBrown />
  </div>
);
export default Employment;
