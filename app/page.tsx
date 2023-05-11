import { Suspense } from 'react';

import {
  AboutUs,
  Pastor,
  FindUs,
  Footer,
  Gallery,
  Header,
  AreaOfMinistry,
} from '../container';
import { Navbar, Loader } from '../components';

import './page.css';

const page: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Navbar />
    <Header />
    <AboutUs />
    <AreaOfMinistry />
    <Pastor />
    <Gallery />
    <FindUs />
    <Footer />
  </Suspense>
);

export default page;
