'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdGridGoldenratio } from 'react-icons/md';
import Link from 'next/link';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>FULL GOSPEL</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link href="#home">Home</Link>
        </li>
        <li className="p__opensans">
          <Link href="#about">About</Link>
        </li>
        <li className="p__opensans">
          <Link href="#menu">Gallery</Link>
        </li>
        <li className="p__opensans">
          <Link href="#awards">Donate</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <Link href="#login" className="p__opensans">
          Areas Of Ministry
        </Link>
        <div />
        <Link href="#contact" className="p__opensans">
          Contact
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdGridGoldenratio
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#gallery" onClick={() => setToggleMenu(false)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#ministry" onClick={() => setToggleMenu(false)}>
                  Ministry
                </Link>
              </li>
              <li>
                <Link href="#findus" onClick={() => setToggleMenu(false)}>
                  Find us
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
