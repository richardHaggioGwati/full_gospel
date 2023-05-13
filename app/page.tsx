import {
  AboutUs,
  Pastor,
  FindUs,
  Gallery,
  Header,
  AreaOfMinistry,
} from '../container/Home';

import './page.css';

const page: React.FC = () => (
  <>
    <Header />
    <AboutUs />
    <AreaOfMinistry />
    <Pastor />
    <Gallery />
    <FindUs />
  </>
);

export default page;
