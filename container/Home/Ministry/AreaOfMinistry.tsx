import Image from 'next/image';

import { SubHeading, MinistryItem } from '../../../components';
import { data, images } from '../../../constants';
import styles from '../../Shared/TwoColumSection.module.css';

const AreaOfMinistry = () => (
  <div
    className={`${styles.app__split_col} flex__center section__padding`}
    id="ministry"
  >
    <div className={styles.app__split_col_title}>
      <SubHeading title="Jesus Christ that saves all." />
      <h1 className="headtext__cormorant">AREAS OF MINISTRY</h1>
    </div>

    <div className={styles.app__split_col_section}>
      <div className={`${styles.app__split_col_section_left}  flex__center`}>
        <p className={styles.app__split_col_section_heading}>Evangelism</p>
        <div className={styles.app__split_col_menu_items}>
          {data.evangelism.map((evan, index) => (
            <MinistryItem key={`${evan.title + index}`} prop={evan} />
          ))}
        </div>
      </div>

      <div className={styles.app__split_col_section_img}>
        <Image
          src={images.menu}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          alt="section_img"
        />
      </div>

      <div className={`${styles.app__split_col_section_right}  flex__center`}>
        <p className={styles.app__split_col_section_heading}>
          Rooted Praise and Worship
        </p>
        <div className={styles.app__split_col_menu_items}>
          {data.praise.map((praises, index) => (
            <MinistryItem key={`${praises.title + index}`} prop={praises} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AreaOfMinistry;
