import styles from './FooterOverlay.module.css';

const FooterOverlay: React.FC = () => (
  <div className={styles.app__footerOverlay}>
    <div className={styles.app__footerOverlay_black} />
    <div className={`${styles.app__footerOverlay_img} app__bg`} />
  </div>
);

export default FooterOverlay;
