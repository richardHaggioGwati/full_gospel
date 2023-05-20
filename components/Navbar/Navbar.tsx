'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdGridGoldenratio } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/gallery': {
    name: 'gallery',
  },
  '/donate': {
    name: 'donate',
  },
};

const mobileNavigation = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/gallery': {
    name: 'gallery',
  },
  '/donate': {
    name: 'donate',
  },
  '/ministry': {
    name: 'ministry',
  },
};

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>FULL GOSPEL</h1>
      </div>
      <ul className="app__navbar-links">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <li
              key={path}
              className={`p__opensans ${isActive ? 'activeLink' : ''}`}
            >
              <Link href={path}>{name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-sider">
        <a href="/ministry" className="p__opensans">
          Areas Of Ministry
        </a>
        <div />
        <a href="#contact" className="p__opensans">
          Contact
        </a>
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
              {Object.entries(mobileNavigation).map(([path, { name }]) => {
                return (
                  <li key={path} className="p__opensans">
                    <Link href={path} onClick={() => setToggleMenu(false)}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
