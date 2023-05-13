// Retrieve images fom backend
import { GalleryItem } from '../../components';
import galleryImages from '../../constants/gallery';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  return (
    <div className={styles.app__gallery__container}>
      <div className={styles.app__gallery}>
        {galleryImages.map((image, index) => (
          <GalleryItem
            image={image.image}
            key={`${image.description + index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
