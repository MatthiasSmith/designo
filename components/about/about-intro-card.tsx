import React from 'react';
import styled from 'styled-components';
import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';

import about from '../../data/about';
import ResponsiveImage from '../responsive-image';

const StyledAboutIntroCard = styled.div`
  background-color: var(--color-primary);
  overflow: hidden;

  .content-container {
    color: white;
    overflow: hidden;
    padding: 5rem var(--site-side-padding);
    position: relative;
    text-align: center;
    z-index: 0;
  }

  .bg-image {
    top: -8.75rem;
    right: 31.35rem;
  }

  .img-container {
    animation: fade-in 0.6s ease-out 0s forwards;
    opacity: 0;
  }

  .heading-lg {
    animation: fade-in-move-down 0.6s ease-out 0.5s forwards;
    opacity: 0;
  }

  .content-text {
    animation: fade-in-move-down 0.6s ease-out 0.75s forwards;
    margin: 1.5rem auto 0;
    max-width: 25rem;
    opacity: 0;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    border-radius: var(--border-radius);

    .bg-image {
      top: -65%;
      right: 3%;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    .img-container {
      flex: 0 0 476px;
      order: 2;
    }

    .content-container {
      flex: 1;
      order: 1;
      padding: 5rem 5.9375rem;
      text-align: left;
    }

    .bg-image {
      top: -9.9rem;
      right: 0;
    }

    .content-text {
      margin: 2rem 0;
      max-width: 28.625rem;
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

const AboutIntroCard = () => {
  return (
    <StyledAboutIntroCard className='flex-row-gt-md'>
      <div className='img-container'>
        <ResponsiveImage
          imageSources={about.hero}
          layout='responsive'
          priority={true}
          alt=''
        />
      </div>
      <div className='content-container flex-col justify-center'>
        <div className='bg-image'>
          <ResponsiveImage
            imageSources={about.introBg}
            layout='fixed'
            priority={true}
            alt=''
          />
        </div>
        <h1 className='heading-lg'>About Us</h1>
        <p className='content-text'>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </StyledAboutIntroCard>
  );
};

export default AboutIntroCard;
