import React from 'react';

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  SpecialMenu,
} from '../container';
import { Navbar } from '../components';

import './page.css';

const page: React.FC = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default page;
