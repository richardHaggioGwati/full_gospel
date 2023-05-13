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
import './Gallery.css';

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
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
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
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <Image src={image} alt="gallery_image" />
              <BsFacebook className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
