import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter: React.FC = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Send a Email" />
      <h1 className="headtext__cormorant">enter your email</h1>
      <p className="p__opensans">And will be in touch as soon as possible</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">
        Email
      </button>
    </div>
  </div>
);

export default Newsletter;
