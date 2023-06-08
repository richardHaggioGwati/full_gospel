'use client';

import { useState } from 'react';
import axios from 'axios';
import SubHeading from '../SubHeading/SubHeading';
import Loader from '../Loader/Loader';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [userInputEmail, setUserInputEmail] = useState('');
  const [userInputName, setUserInputName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (input: string): boolean => {
    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validateName = (name: string): boolean => {
    // Name validation regular expression
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setUserInputEmail(input);
    setIsValid(validateEmail(input));
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setUserInputName(input);
    setNameIsValid(validateName(input));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(userInputEmail)) {
      setIsValid(false);
    }

    if (!validateName(userInputEmail)) {
      setNameIsValid(false);
    }

    try {
      setIsSubmitting(true);
      await axios.post('/api/submit_email', {
        email: userInputEmail,
        name: userInputName.charAt(0).toUpperCase() + userInputName.slice(1),
      });
      // Reset the email field
      setUserInputEmail('');
      setUserInputName('');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
      setIsValid(false);
    }
  };

  return (
    <div>
      {isSubmitting ? (
        <Loader />
      ) : (
        <div className="app__newsletter">
          <div className="app__newsletter-heading">
            <SubHeading title="Send a Email" />
            <h1 className="headtext__cormorant">enter your email</h1>
            <p className="p__opensans">
              And will be in touch as soon as possible
            </p>
          </div>
          <form
            className="app__newsletter-input flex__center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="app__newsletter_name_input"
              placeholder="Enter your name"
              value={userInputName}
              onChange={handleNameChange}
            />
            <input
              type="email"
              className="app__newsletter_email_input"
              placeholder="Enter your email address"
              value={userInputEmail}
              onChange={handleEmailChange}
            />
            <button
              type="submit"
              className="custom__button"
              style={{
                backgroundColor: `${!isValid || !nameIsValid ? 'grey' : ''}`,
                cursor: `${!isValid || !nameIsValid ? 'not-allowed' : ''}`,
              }}
            >
              Email
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
