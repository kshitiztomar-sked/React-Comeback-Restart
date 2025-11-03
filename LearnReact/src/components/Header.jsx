import React from 'react'
import "./Header.css"

export const Header = (props) => {
  return (
    <div>
      <div className='nav'>
        <div className='HeadingName'>
          <h2>{props.Heading}</h2>
        </div>
        <div className='Navbar'>
          <ul>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>About us</li>
            <li><a href=""></a>Learn</li>
            <li><a href=""></a>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header ;