import React from 'react';
import { Navbar } from 'react-bootstrap';
import {FontAwesomeIcon as FAIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import './Footer.scss';

export default function Footer() {
  return (
      <div>
          <div className="footerMargin"/>
            <Navbar fixed="bottom" className="footer" variant="dark">
                <Navbar.Brand href="#/about/" className="ml-65to150 children-inherit-background">
                    © 2020 - {new Date().getFullYear()}
                    <span className="bold-text"> Mateusz Belka</span>
                    <span className="mobile-hide">, All rights reserved.</span>
                </Navbar.Brand>
                <Navbar.Text className="inherit-background grid mr-65to150 links">
                    <a href="https://www.linkedin.com/in/MateuszBelka" rel="noopener noreferrer" target="_blank" className="children-inherit-background">
                        <FAIcon icon={faLinkedin}/><span className="mobile-hide">Linkedin</span>
                    </a>
                    <a href="https://github.com/MateuszBelka" rel="noopener noreferrer" target="_blank" className="children-inherit-background">
                        <FAIcon icon={faGithub}/><span className="mobile-hide">Github</span>
                    </a>
                </Navbar.Text>
            </Navbar>
      </div>
  )
}
