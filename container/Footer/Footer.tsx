import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
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

      <div className="app__footer-links_logo">
        <p className="p__opensans">
          &quot;Where Jesus heals broken hearts and if your heart is broken,
          your are in the right place.&quot;
        </p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Service Hours:</h1>
        <p className="p__opensans">Sunday:</p>
        <p className="p__opensans">8:50 am - 12:00 am</p>
        <p className="p__opensans">Wednesday:</p>
        <p className="p__opensans">19:00 pm - 20:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2023 The Full Gospel Church. All Rights reserved. Designed by richard
        gwati
      </p>
    </div>
  </div>
);

export default Footer;
