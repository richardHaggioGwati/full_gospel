import Image from 'next/image';
import { SubHeading } from '../../../components';
import { images } from '../../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="The Full Gospel Church" />
      <h1 className="app__header-h1">Welcome To The Home of Jesus Christ</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Where faith comes alive and community thrives. We are a congregation
        dedicated to spreading love, hope, and the teachings of Jesus Christ.
        With the Bible in hand, we invite you to join us on a spiritual journey
        that fosters personal growth, deep connections with God, and meaningful
        engagement.
      </p>
    </div>

    <div className="app__wrapper_img">
      <Image
        src={images.welcome}
        width={300}
        height={708}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        alt="header_img"
      />
    </div>
  </div>
);

export default Header;
