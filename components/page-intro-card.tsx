import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import ButtonLink from './button-link';

const StyledPageIntroCard = styled.article`
  text-align: center;
  padding-top: 5rem;

  .bg-image {
    top: 6.375rem;
    left: 0;
  }

  p {
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
`;

const PageIntroCard = () => {
  return (
    <StyledPageIntroCard className='card flex-column flex-centered'>
      <div className='bg-image' aria-hidden='true'>
        <Image
          src='/../public/home/desktop/bg-pattern-hero-home.svg'
          alt=''
          layout='fixed'
          width={640}
          height={639}
          objectFit='cover'
        />
      </div>
      <div className='flex-column flex-centered top-layer'>
        <h1 className='headingLg'>
          Award-winning custom designs and digital branding solutions
        </h1>
        <p>
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
          src='/../public/home/desktop/image-hero-phone.png'
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
