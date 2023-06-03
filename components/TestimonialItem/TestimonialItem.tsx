import Image, { StaticImageData } from 'next/image';
import './Testimonial.css';

export interface TestimonialItemProp {
  styles: string;
  information: {
    image: StaticImageData;
    className: string;
    name: string;
    positions: string;
    testimonials_main: string;
    testimonials_body: string;
  };
}

const TestimonialItem: React.FC<TestimonialItemProp> = ({
  styles,
  information: {
    image,
    className,
    name,
    positions,
    testimonials_main,
    testimonials_body,
  },
}) => {
  return (
    <article className={styles}>
      <div className="flex">
        <div>
          <Image
            height={50}
            width={50}
            className={className}
            src={image}
            alt="author"
          />
        </div>
        <div>
          <h2 className="name">{name}</h2>
          <p className="position">{positions}</p>
        </div>
      </div>
      <p> {testimonials_main}</p>
      <p> {testimonials_body}</p>
    </article>
  );
};

export default TestimonialItem;
