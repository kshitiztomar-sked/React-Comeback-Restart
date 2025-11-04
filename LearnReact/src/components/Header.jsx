import React from 'react';
import './Header.css';

export const Header = (props) => {
  return (
    <div className="nav">
      <div className="HeadingName">
        <h2>{props.Heading}</h2>
      </div>
      <div className="Navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Inventory</a></li>
          <li><a href="#">Sell Your Car</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header ;