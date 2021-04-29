import React from 'react';
import styled from 'styled-components';

import { DESKTOP_BP, TABLET_BP } from '../../../constants/constants';
import ContactForm from './contact-form';

// import ResponsiveImage from

const StyledContactIntroCard = styled.div`
  background-color: var(--color-primary);
  color: white;
  overflow: hidden;
  padding: 4.5rem var(--site-side-padding);
  position: relative;
  z-index: 0;

  .bg-image {
    top: 0;
    left: -5.75rem;

    img {
      width: 876px;
      height: 990px;
    }
  }

  .content-container {
    padding-bottom: 3rem;
    text-align: center;
  }

  .content-text {
    margin-top: 1.5rem;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    border-radius: var(--border-radius);
    padding: 4.5rem 3.625rem;

    .bg-image {
      top: -5rem;
      left: -7.5rem;

      img {
        width: 640px;
        height: 640px;
      }
    }

    .content-container {
      text-align: left;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    align-items: center;
    padding: 3.375rem 6rem;

    .bg-image {
      top: -8.55rem;
      left: 0;
    }

    .content-container {
      flex: 1;
      margin-right: 5rem;
    }
  }
`;

const ContactIntroCard = () => {
  return (
    <StyledContactIntroCard className='flex-row-gt-md'>
      <div className='bg-image'>
        <picture>
          <source
            media={`(min-width: ${TABLET_BP}em)`}
            srcSet='/contact/desktop/bg-pattern-hero-desktop.svg'
          />
          <img
            src='/contact/mobile/bg-pattern-hero-contact-mobile.svg'
            alt=''
          />
        </picture>
      </div>
      <div className='content-container'>
        <h1 className='heading-lg'>Contact Us</h1>
        <p className='content-text'>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <ContactForm />
    </StyledContactIntroCard>
  );
};

export default ContactIntroCard;
