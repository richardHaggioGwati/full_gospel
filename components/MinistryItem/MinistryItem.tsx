import styles from './MinistryItem.module.css';

interface MinistryItemProp {
  prop: {
    title: string;
    verse: string;
    information: string;
  };
}

const MinistryItem: React.FC<MinistryItemProp> = ({
  prop: { title, verse, information },
}) => (
  <div className={styles.app__menuitem}>
    <div className={styles.app__menuitem_head}>
      <div className={styles.app__menuitem_name}>
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>
      <div className={styles.app__menuitem_dash} />
      <div className={styles.app__menuitem_price}>
        <p className="p__cormorant">{verse}</p>
      </div>
    </div>

    <div className={styles.app__menuitem_sub}>
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>
        {information}
      </p>
    </div>
  </div>
);

export default MinistryItem;
