import React from 'react';
import styled from 'styled-components';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';
import ResponsiveImage from '../responsive-image';
import ContactForm from './contact-form';
import contact from '../../data/contact';

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
  }

  .heading-lg {
    animation: fade-in-move-down 0.6s ease-out 0.5s forwards;
    opacity: 0;
  }

  .content-container {
    padding-bottom: 3rem;
    text-align: center;
  }

  .content-text {
    animation: fade-in-move-down 0.6s ease-out 0.75s forwards;
    margin-top: 1.5rem;
    opacity: 0;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    border-radius: var(--border-radius);
    padding: 4.5rem 3.625rem;

    .bg-image {
      top: -5rem;
      left: -7.5rem;
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

  @media screen and (prefers-reduced-motion: reduce) {
    .heading-lg {
      animation: fade-in 0.6s ease-out 0.5s forwards;
    }

    .content-text {
      animation: fade-in 0.6s ease-out 0.75s forwards;
    }
  }
`;

const ContactIntroCard = () => {
  return (
    <StyledContactIntroCard className='flex-row-gt-md'>
      <div className='bg-image'>
        <ResponsiveImage
          imageSources={contact.introBg}
          layout='fixed'
          priority={true}
          alt=''
        />
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
