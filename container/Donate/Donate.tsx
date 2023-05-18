import Image from 'next/image';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Donate.module.css';

const Donate = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="The Full Gospel Church" />
      <h1 className="app__header-h1">Donations</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        If you would like to support our ministry financially, you can do so via
        Direct Bank Transfer payment to: <br /> Full Gospel Church of God <br />
        ABSA Southdale <br /> Branch Code: 632005 Account <br /> No: 1030410731
      </p>
    </div>

    <div className="app__wrapper_img">
      <Image
        src={images.donate}
        width={300}
        height={508}
        style={{
          maxWidth: '100%',
          height: '70%',
        }}
        alt="header_img"
      />
    </div>
  </div>
);

export default Donate;
