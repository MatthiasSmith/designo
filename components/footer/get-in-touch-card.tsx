import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Styled = styled.article`
  background: var(--color-primary);
  border-radius: 0.9375rem;
  color: white;
  margin: 0 var(--site-side-padding);
  overflow: hidden;
  padding: 4rem var(--site-side-padding);
  position: relative;
  z-index: 1;

  .bg-image {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
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

  a {
    display: block;
    margin: 2rem auto 0;
    background: white;
    color: var(--dark-gray);
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-weight: var(--font-weight-medium);
    font-size: 0.9375rem;
    font-family: var(--font-family);
    letter-spacing: 1px;
    padding: 1.0625rem 1.1875rem;
  }
`;

const GetInTouchCard = () => {
  return (
    <Styled>
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
      <div className='content-container flex-column flex-centered'>
        <h2 className='headingLg text-center'>Let’s talk about your project</h2>
        <p className='text-center'>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <a>Get in touch</a>
      </div>
    </Styled>
  );
};

export default GetInTouchCard;
