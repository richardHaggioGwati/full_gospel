import Image from 'next/image';

import { SubHeading } from '../../../components';
import { images } from '../../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="findus">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          40 Alexander Road, Turffontein, Johannesburg 2190, Gauteng, South
          Africa
        </p>
        <p
          className="p__cormorant"
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">
          Sunday Services: 1st 8:50am-10:20am, 2nd Service 10:30am-12:00pm
          <p className="p__opensans">
            Shalom Sunday School is on during all two services
          </p>
        </p>
        <p className="p__opensans">Wednesday Prayer Meeting: 19:00pm</p>
        <p className="p__opensans">Saturday Senior Youth: 16:00pm-18:00pm</p>
        <p className="p__opensans">Office Hrs Tue-Fri: 08:00am-13:00pm</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: '2rem' }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <Image
        src={images.findus}
        width={800}
        height={808}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        alt="finus_img"
      />
    </div>
  </div>
);

export default FindUs;
