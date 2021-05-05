import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';
import ButtonLink from '../button-link';
import addFadeInImageClass from '../../helpers/add-fade-in-image-class';

const StyledHomeIntroCard = styled.article`
  text-align: center;
  padding-top: 5rem;

  .bg-image {
    top: 6.375rem;
    left: 0;
  }

  .content-container {
    align-items: center;
    justify-content: center;
  }

  .heading-lg {
    animation: fade-in-move-down 0.6s ease-out 0.7s forwards;
    max-width: 26.875rem;
    opacity: 0;
  }

  .body-text {
    animation: fade-in-move-down 0.6s ease-out 0.95s forwards;
    margin-top: 1rem;
    max-width: 26.875rem;
    opacity: 0;
  }

  .learn-more-link {
    margin-top: 2rem;
    animation: fade-in-move-down 0.6s ease-out 1.2s forwards;
    opacity: 0;
  }

  .img-container {
    animation: fade-in 1.3s ease-out 0s forwards;
    display: flex;
    justify-content: center;
    position: relative;
    height: 33.85rem;
    margin-top: -5.915rem;
    opacity: 0;

    > div {
      flex: 0 0 auto;
    }
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    border-radius: var(--border-radius);
    padding-top: 3.75rem;

    .bg-image {
      left: 22%;
    }

    .heading-lg {
      max-width: 35.8125rem;
    }

    .body-text {
      margin-top: 1.75rem;
      max-width: 27.8125rem;
    }

    .learn-more-link {
      margin-top: 1.1875rem;
    }

    .img-container {
      height: 34.85rem;
      margin-top: -6.275rem;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    padding-top: 9.0625rem;

    .bg-image {
      top: 0%;
      left: 21.5%;
    }

    .content-container {
      align-items: flex-start;
      justify-content: unset;
      margin-bottom: 9.0625rem;
      text-align: left;
    }

    .body-text {
      margin-top: 1.95rem;
    }

    .img-container {
      position: absolute;
      bottom: 7rem;
      right: -4.875rem;
    }

    .learn-more-link {
      margin-top: 2.5rem;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    .heading-lg {
      animation: fade-in 0.6s ease-out 0.7s forwards;
    }

    .body-text {
      animation: fade-in 0.6s ease-out 0.95s forwards;
    }

    .learn-more-link {
      animation: fade-in 0.6s ease-out 1.2s forwards;
    }
  }
`;

const HomeIntroCard = () => {
  return (
    <StyledHomeIntroCard className='card flex-col flex-centered'>
      <div className='bg-image' aria-hidden='true'>
        <Image
          src='/home/desktop/bg-pattern-hero-home.svg'
          alt=''
          layout='fixed'
          width={640}
          height={639}
        />
      </div>
      <div className='flex-row-gt-md full-width'>
        <div className='content-container flex-col top-layer'>
          <h1 className='heading-lg'>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className='body-text'>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <ButtonLink href='/about' className='learn-more-link'>
            Learn More
          </ButtonLink>
        </div>
        <div className='img-container' aria-hidden='true'>
          <Image
            src='/home/desktop/image-hero-phone.png'
            layout='fixed'
            width={624}
            height={913}
            priority={true}
            alt=''
            onLoad={addFadeInImageClass}
          />
        </div>
      </div>
    </StyledHomeIntroCard>
  );
};

export default HomeIntroCard;
