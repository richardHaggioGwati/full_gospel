'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdGridGoldenratio } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropDown from './DropDown/DropDown';
import styles from './Navbar.module.css';

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
  '/ministry/evangelism': {
    name: 'Evangelism',
  },
  '/ministry/help': {
    name: 'Ministry of Helps',
  },
  '/ministry/band': {
    name: 'Praise And Worship',
  },
  '/ministry/school': {
    name: 'Shalom Sunday School',
  },
  '/ministry/women': {
    name: 'Women Of Destiny',
  },
  '/ministry/youth': {
    name: 'Yahweh Youth',
  },
};

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <h1>FULL GOSPEL</h1>
      </div>
      <ul className={styles.app__navbar_links}>
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <li
              key={path}
              className={`p__opensans ${isActive ? styles.activeLink : ''}`}
            >
              <Link href={path}>{name}</Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.app__navbar_sider}>
        <DropDown />
        <div />
        <Link href="#contact" className="p__opensans">
          Contact
        </Link>
      </div>

      <div className={styles.app__navbar_smallscreen}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div
            className={`${styles.app__navbar_smallscreen_overlay} flex__center slide-bottom`}
          >
            <MdGridGoldenratio
              fontSize={27}
              className={styles.overlay__close}
              onClick={() => setToggleMenu(false)}
            />
            <ul className={styles.app__navbar_smallscreen_links}>
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
