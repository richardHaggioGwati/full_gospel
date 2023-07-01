import styles from '../../../Shared/Testimonial.module.css';
import { TestimonialItem } from '../../../../components';
import evangelismTestimonials from '../../../../constants/testimonial';

const YouthTestimonial: React.FC = () => {
  return (
    <div className="app__bg">
      <h1 className="headtext__cormorant" style={{ textAlign: 'center' }}>
        Testimonials from our Youth
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

export default YouthTestimonial;
