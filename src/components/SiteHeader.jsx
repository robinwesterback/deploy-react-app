import React, { useState } from 'react';
import Media from 'react-media'

import logo from '../assets/images/megapixel-logo-tiny.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // toggling() opens/closes the nav menu on media query maxWidth 1169px
  const toggling = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src={logo} alt="Logo"></img>
      </a>
      
      <Media query={{ maxWidth: 1169 }} >
        {matches =>
          matches ? (
            <button onClick={toggling}><FontAwesomeIcon icon={faBars} /></button>  
          ) : (
            <nav>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#business">Add Investment</a>
                </li>
                <li>
                  <a href="#roi">ROI</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>  
              </ul>
            </nav>
          )
        }
      </Media>
      
      {/* The function doesn't work properly if the nav below would be included
          in the Media query above, that's why it's separated. */}
      <Media query={{ maxWidth: 1169 }} >
      <nav>
        {isOpen && (
          <ul>
            <li>
              <a href="#home" onClick={toggling}>Home</a>
            </li>
            <li>
              <a href="#business" onClick={toggling}>Business</a>
            </li>
            <li>
              <a href="#campaign" onClick={toggling}>Campaign</a>
            </li>
            <li>
              <a href="#roi" onClick={toggling}>ROI</a>
            </li>
            <li>
              <a href="#support" onClick={toggling}>Support</a>
            </li>
          </ul>
        )}
      </nav>     
      </Media> 
    </header>
  );
}