'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useRef } from 'react';
import {
  BsFacebook,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

import { SubHeading } from '../../../components';
import { images } from '../../../constants';

import styles from '../../Shared/GallerySlider.module.css';

const Gallery = () => {
  // TODO: Remove type any
  const scrollRef = useRef<any>();
  const router = useRouter();

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push('/gallery');
  };

  return (
    <div className={`${styles.app__gallery} flex__center`}>
      <div className={styles.app__gallery_content}>
        <SubHeading title="Facebook" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: '#AAAAAA', marginTop: '2rem' }}
        >
          Take a look at our upcoming andd past events. A scroll through our
          photo gallery should give you a good idea about who we are.
        </p>
        <button type="button" className="custom__button" onClick={handleClick}>
          View More
        </button>
      </div>
      <div className={styles.app__gallery_images}>
        <div className={styles.app__gallery_images_container} ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className={`${styles.app__gallery_images_card} flex__center`}
              key={`gallery_image-${index + 1}`}
            >
              <Image src={image} alt={styles.gallery_image} />
              <BsFacebook
                color="white"
                className={styles.gallery__image_icon}
              />
            </div>
          ))}
        </div>
        <div className={styles.app__gallery_images_arrows}>
          <BsArrowLeftShort
            className={styles.gallery__arrow_icon}
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className={styles.gallery__arrow_icon}
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
