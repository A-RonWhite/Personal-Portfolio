import React from 'react';
import contactImg from '../images/undraw_email_campaign_qa8y.svg';

const Contact = () => (
  <div className="contact">
    <img src={contactImg} alt="" />
    <form action="">
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Subject" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Write things here" />
      <button type="submit">Submit</button>
    </form>
  </div>
);
export default Contact;
