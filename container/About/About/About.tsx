import Image from 'next/image';
import { SubHeading } from '../../../components';
import { images } from '../../../constants';

import styles from './About.module.css';

const About = () => (
  <div className={`${styles.app__header} app__wrapper section__padding`}>
    <div className="app__wrapper_info">
      <h1 className={`${styles.app__header_h1}`}>All about us.</h1>
      <SubHeading title="Our purpose" />
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Our purpose is through Jesus Christ that dwells in us, to heal the
        broken hearted and release them to go, and heal the broken hearted by
        the power of the Holy Spirit.
      </p>

      <SubHeading title="Our vision" />
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Due to the fact that we live in a broken world, we see the Full Gospel
        Church of God, Johannesburg South, as a place where the Lord Jesus
        Christ heals the broken hearted. Those broken and lost spiritually can
        find salvation and deliverance through the preaching of God’s Word.
        Those broken physically, through sickness, can experience divine healing
        and restoration because by the stripes of Jesus on the cross, we’ve been
        healed. Those broken emotionally can experience inner Healing and peace
        by soaking in God’s presence and allowing the Holy Spirit to do a deep
        work through Spiritual surgery. Those broken economically can receive
        Godly Wisdom, favour, insight and an understanding of God as our
        provider. Broken marriages can find reconciliation and peace through
        counselling and solid teachings on developing a Biblical foundation on
        marriage and family.
      </p>
    </div>

    <div className={styles.app__wrapper_img}>
      <Image
        src={images.bible}
        width={500}
        height={808}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        loading="lazy"
        alt="header_img"
      />
    </div>
  </div>
);

export default About;
