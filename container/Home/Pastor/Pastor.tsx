import Image from 'next/image';

import { SubHeading } from '../../../components';
import { images } from '../../../constants';
import styles from '../../Shared/ReverseHeader.module.css';

const Pastor: React.FC = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <Image
        src={images.pastor}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        width={500}
        height={908}
        alt="pastor_image"
      />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Meet our Pastor" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className={styles.app__reverse_header_content}>
        <div className={styles.app__reverse_header_content_quote}>
          <Image
            src={images.quote}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            alt="quote_image"
          />
          <p className="p__opensans">
            We believe that the scriptures are divinely inspired and free from
            error.
          </p>
        </div>
        <p className="p__opensans">
          We believe that the Bible is the supreme authority for faith and
          life.We believe in one God, eternally existent In three persons:
          Father, Son and Holy Spirit. We believe that Jesus Christ was begotten
          of the Father, conceived by the Holy Spirit, born of a virgin called
          Mary and is true God and true man.
        </p>
      </div>

      <div className={styles.app__reverse_header_sign}>
        <p>Jack B. Chiwra</p>
        <p className="p__opensans">Senior Pastor</p>
        <Image
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          src={images.sign}
          alt="sign_image"
        />
      </div>
    </div>
  </div>
);

export default Pastor;
