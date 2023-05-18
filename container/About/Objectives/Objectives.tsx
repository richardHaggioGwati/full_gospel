import Image from 'next/image';

import { SubHeading, AboutItem } from '../../../components';
import { data, images } from '../../../constants';
import styles from './Objectives.module.css';

const Objectives = () => (
  <div
    className={`${styles.app__objective_section} flex__center section__padding`}
  >
    <div className={styles.app__objective_section_title}>
      <SubHeading title="Jesus Christ that saves all." />
      <h1 className="headtext__cormorant">More About us.</h1>
    </div>

    <div className={styles.app__objective_section_objectives}>
      <div
        className={`${styles.app__objective_section_objectives_christ}  flex__center`}
      >
        <p className={styles.app__objective_section_heading}>
          Our Objectives Through Christ
        </p>
        <div className={styles.app__objective_section_items}>
          {data.objective.map((object, index) => (
            <AboutItem key={`${object.title + index}`} prop={object} />
          ))}
        </div>
      </div>

      <div className={styles.app__objective_section_img}>
        <Image
          src={images.about}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          alt="about__img"
        />
      </div>

      <div
        className={`${styles.app__objective_section_believes}  flex__center`}
      >
        <p className={styles.app__objective_section_heading}>What We Believe</p>
        <div className={styles.app__objective_section_items}>
          {data.beliefs.map((belief, index) => (
            <AboutItem key={`${belief.title + index}`} prop={belief} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Objectives;
