import React from 'react';
import logo from '../assets/images/megapixel-logo-tiny.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function SiteHeader() {

    return (
        <header className="header">
          <a className="logo">
            <img src={logo} alt="Logo"></img>
          </a>

          <nav>
            <button><FontAwesomeIcon icon={faBars} /></button>
            <a href="#home">Home</a>
            <a href="#business">Business</a>
            <a href="campaign">Campaign</a>
            <a href="roi">ROI</a>
            <a href="support">Support</a>
          </nav>
        </header>
    );
}