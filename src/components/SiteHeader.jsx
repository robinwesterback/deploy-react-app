import React from 'react'

export default function SiteHeader({logoName = "Logo"}) {

    return (
        <header className="header">
          <a className="logo">{logoName}</a>
          
          <nav className="navbar">
              <a href="" target="_blank">Home</a>
              <a href="" target="_blank">Business</a>
              <a href="" target="_blank">Campaign</a>
              <a href="" target="_blank">ROI</a>
              <a href="" target="_blank">Support</a>
          </nav>
        </header>
    );
}