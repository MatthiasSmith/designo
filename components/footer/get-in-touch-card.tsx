import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ButtonLink from '../button-link';

const Styled = styled.article`
  border-radius: var(--border-radius);
  margin: 0 var(--site-side-padding);
  padding-top: 4rem;
  padding-bottom: 4rem;

  .bg-image {
    top: -26.5%;
    left: -71.5%;
  }

  .content-container {
    position: relative;
    z-index: 1;
  }

  p {
    margin-top: 1rem;
  }

  .get-in-touch-link {
    margin: 2rem auto 0;
  }
`;

const GetInTouchCard = () => {
  return (
    <Styled className='card'>
      <div className='bg-image'>
        <Image
          src='/../public/shared/desktop/bg-pattern-call-to-action.svg'
          alt=''
          layout='fixed'
          width={876}
          height={584}
          objectFit='cover'
        />
      </div>
      <div className='content-container flex-column flex-centered text-center'>
        <h2 className='heading-lg'>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <ButtonLink href='/' className='get-in-touch-link'>
          Get in touch
        </ButtonLink>
      </div>
    </Styled>
  );
};

export default GetInTouchCard;
