import React, { useState } from 'react';
import logo from '../assets/images/megapixel-logo-tiny.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src={logo} alt="Logo"></img>
      </a>

      <button onClick={toggling}><FontAwesomeIcon icon={faBars} /></button>

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
    </header>
  );
}