import Image, { StaticImageData } from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import styles from './GalleryItem.module.css';

interface GalleryItemProp {
  image: StaticImageData;
}

const GalleryItem: React.FC<GalleryItemProp> = ({ image }) => {
  return (
    <div className={`${styles.app__gallery__images__card} flex__center`}>
      <Image loading="lazy" src={image} alt="gallery_image" />
      <BsFacebook className={styles.gallery__image__icon} />
    </div>
  );
};

export default GalleryItem;
