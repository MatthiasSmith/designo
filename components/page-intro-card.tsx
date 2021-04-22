import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { TABLET_BP } from '../constants/constants';
import ButtonLink from './button-link';

const StyledPageIntroCard = styled.article`
  text-align: center;
  padding-top: 5rem;

  .bg-image {
    top: 6.375rem;
    left: 0;
  }

  .body-text {
    margin-top: 1rem;
  }

  .learn-more-link {
    margin-top: 2rem;
  }

  .img-container {
    position: relative;
    height: 33.85rem;
    margin-top: -5.915rem;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    border-radius: var(--border-radius);
    padding-top: 3.75rem;

    .bg-image {
      left: 22%;
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
`;

const PageIntroCard = () => {
  return (
    <StyledPageIntroCard className='card flex-column flex-centered'>
      <div className='bg-image' aria-hidden='true'>
        <Image
          src='/home/desktop/bg-pattern-hero-home.svg'
          alt=''
          layout='fixed'
          width={640}
          height={639}
          objectFit='cover'
        />
      </div>
      <div className='flex-column flex-centered top-layer'>
        <h1 className='heading-lg'>
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className='body-text'>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <ButtonLink href='/' className='learn-more-link'>
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
        />
      </div>
    </StyledPageIntroCard>
  );
};

export default PageIntroCard;
