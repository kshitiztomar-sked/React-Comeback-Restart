import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <div>
        <h2>
          © All rights reserved by <span className="headname">LearnReact</span>
        </h2>
      </div>
      <div>
        <h2>{props.email}</h2>
      </div>
    </div>
  );
};

export default Footer;
