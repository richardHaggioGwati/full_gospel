'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { images } from '../../../constants';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push('/about');
  };
  return (
    <div
      className={`${styles.app__aboutus} app__bg flex__center section__padding`}
      id="about"
    >
      <div className={`${styles.app__aboutus_content} flex__center`}>
        <div className={styles.app__aboutus_content_about}>
          <h1 className="headtext__cormorant">About Us</h1>
          <p className="p__opensans">
            Our purpose is through Jesus Christ that dwells in us, to heal the
            broken hearted and release them to go, and heal the broken hearted
            by the power of the Holy Spirit.
          </p>
          <button
            type="button"
            className="custom__button"
            onClick={handleClick}
          >
            Know More
          </button>
        </div>

        <div className={`${styles.app__aboutus_content_cross} flex__center`}>
          <Image
            src={images.cross}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            alt="about_cross"
          />
        </div>

        <div className={styles.app__aboutus_content_vision}>
          <h1 className="headtext__cormorant">Our Vision</h1>
          <p className="p__opensans">
            Due to the fact that we live in a broken world, we see the Full
            Gospel Church of God, Johannesburg South, as a place where the Lord
            Jesus Christ heals the broken hearted.
          </p>
          <button
            type="button"
            className="custom__button"
            onClick={handleClick}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
