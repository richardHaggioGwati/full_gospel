import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../../components';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={`${styles.app__footer} section__padding`} id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className={styles.app__footer_links}>
      <div className={styles.app__footer_links_contact}>
        <h1 className={styles.app__footer_headtext}>Contact Us</h1>
        <p className="p__opensans">Office Tel: +27 110 708 647</p>
        <p className="p__opensans">Pastor Jack Chirwa: +27 73 500 5326</p>
        <p className="p__opensans">E-mail: pastor@fullgospeljoburg.co.za</p>
        <br />
        <p className="p__opensans">
          Ministry of Helps: Serah Chirwa +27 73 094 9729
        </p>
        <p className="p__opensans">E-mail: info@fullgospeljoburg.co.za</p>
        <br />
        <p className="p__opensans">
          Music Ministry: Julius +27 73 391 0742 / Timothy +27 81 318 9639
        </p>
      </div>

      <div className={styles.app__footer_links_logo}>
        <p className="p__opensans">
          &quot;Where Jesus heals broken hearts and if your heart is broken,
          your are in the right place.&quot;
        </p>
        <div className={styles.app__footer_links_icons}>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiYoutube />
        </div>
      </div>

      <div className={styles.app__footer_links_work}>
        <h1 className={styles.app__footer_headtext}>Service Hours:</h1>
        <p className="p__opensans">Sunday:</p>
        <p className="p__opensans">8:50 am - 12:00 am</p>
        <p className="p__opensans">Wednesday:</p>
        <p className="p__opensans">19:00 pm - 20:00 pm</p>
      </div>
    </div>

    <div className={styles.footer__copyright}>
      <p className="p__opensans">
        2023 The Full Gospel Church. All Rights reserved. Made with Love by{' '}
        <a
          href="https://react-portfolio-lovat-one.vercel.app/"
          rel="noreferrer"
          target="_blank"
          style={{ color: '#DCCA87' }}
        >
          richard gwati
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
