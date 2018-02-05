import React from "react";
import "./css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer-nav">
      <nav id="footer-navigation">
        <div className="nav">
          <ul className='cf'>
            <li className='cf'>
                © Deniz Skantz 2018 | <a href="mailto:denizskantz@hotmail.com">Contact me</a> | <a href ="https://www.linkedin.com/in/denizskantz/"> LinkedIn </a>
                | <a href ="https://github.com/DenizSka">GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
