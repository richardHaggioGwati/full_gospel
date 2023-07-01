import styles from '../../../Shared/Testimonial.module.css';
import { TestimonialItem } from '../../../../components';
import evangelismTestimonials from '../../../../constants/testimonial';

const SchoolTestimonial: React.FC = () => {
  return (
    <div className="app__bg">
      <h1 className="headtext__cormorant" style={{ textAlign: 'center' }}>
        Testimonials from our Evangelist&apos;s
      </h1>
      <div className={styles.container}>
        <div className="testimonial-grid">
          {evangelismTestimonials.map((item, index) => (
            <TestimonialItem
              key={`${item.information.name + index}`}
              styles={item.styles}
              information={item.information}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolTestimonial;
