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
          <a className="logo">
            <img src={logo} alt="Logo"></img>
          </a>

          <button onClick={toggling}><FontAwesomeIcon icon={faBars} /></button>

          <nav>
            {isOpen && (
              <ul onClick={toggling}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#business">Business</a>
                </li>
                <li>
                    <a href="#campaign">Campaign</a>
                </li>
                <li>
                    <a href="#roi">ROI</a>
                </li>
                <li>
                    <a href="#support">Support</a>
                </li>
              </ul>
            )}
          </nav>
        </header>
    );
}