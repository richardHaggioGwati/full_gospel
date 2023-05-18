import styles from './AboutItem.module.css';

interface AboutItemProps {
  prop: {
    title: string;
    information: string;
  };
}

const AboutItem: React.FC<AboutItemProps> = ({
  prop: { title, information },
}) => (
  <div className={`${styles.app__about_item}`}>
    <div className={`${styles.app__about_item_head}`}>
      <div className={`${styles.app__about_item_name}`}>
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>
      <div className={`${styles.app__about_item_dash}`} />
    </div>

    <div className={`${styles.app__about_item_sub}`}>
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>
        {information}
      </p>
    </div>
  </div>
);

export default AboutItem;
