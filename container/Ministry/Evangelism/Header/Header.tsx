import Image from 'next/image';
import { images } from '../../../../constants';

import './Header.css';

const EvangelismHeader = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Evangelism</h1>
      <p className="p__cormorant" style={{ margin: '2rem 0' }}>
        Our vision is equipping and supernatural growth. How we achieve this:
      </p>
      <p className="p__opensans">
        Through fasting and prayer for God to send more labourers into His
        harvest – <strong>Luke 10:2 </strong>
        <br /> Through work and witness – <strong>James 2:17</strong> <br />
        Through discipleship – <strong>Matt 4:19</strong> <br /> Making a
        difference by loving unconditionally – <strong>John 13:35</strong>
        <br /> Through monthly outreaches to malls, shops, streets, people’s
        homes, etc. – <strong>Mark 16:15</strong> <br /> Visiting hospitals, old
        age homes, motherless babies homes, street kids, homes for the blind,
        etc. – <strong>Matt 10:8</strong>
      </p>
    </div>

    <div className="app__wrapper_img">
      <Image
        src={images.banner}
        className="mask1"
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

export default EvangelismHeader;
