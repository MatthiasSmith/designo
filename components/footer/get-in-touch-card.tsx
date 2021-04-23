import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ButtonLink from '../button-link';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';

const Styled = styled.div`
  margin: 0 auto;
  max-width: var(--site-content-max-width);
  padding: 0 var(--site-side-padding);

  .card {
    border-radius: var(--border-radius);
    max-width: var(--site-content-max-width);
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .bg-image {
    top: -26.5%;
    left: -71.5%;
  }

  .content-container {
    position: relative;
    z-index: 1;
  }

  .text-container {
    align-items: center;
    text-align: center;
  }

  .get-in-touch-text {
    margin-top: 1rem;
  }

  .get-in-touch-link {
    margin: 2rem auto 0;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    padding: 0 var(--site-side-padding-md);

    .card {
      padding-top: 3.5625rem;
      padding-bottom: 3.5625rem;
    }

    .bg-image {
      top: -33.5%;
      left: -3%;
    }

    .heading-lg {
      font-size: 2.5rem;
      line-height: 2.5rem;
      max-width: 20.9375rem;
    }

    .get-in-touch-text {
      max-width: 28rem;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    .card {
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
    }

    .bg-image {
      top: -50%;
      left: 21.33%;
    }

    .text-container {
      flex: 1;
      text-align: left;
      align-items: unset;
    }

    .get-in-touch-link {
      margin-top: 0;
    }
  }
`;

const GetInTouchCard = () => {
  return (
    <Styled>
      <article className='card'>
        <div className='bg-image'>
          <Image
            src='/shared/desktop/bg-pattern-call-to-action.svg'
            alt=''
            layout='fixed'
            width={876}
            height={584}
          />
        </div>
        <div className='content-container flex-col flex-centered flex-row-gt-md'>
          <div className='text-container flex-col'>
            <h2 className='heading-lg'>Let’s talk about your project</h2>
            <p className='get-in-touch-text'>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <ButtonLink href='/' className='get-in-touch-link'>
            Get in touch
          </ButtonLink>
        </div>
      </article>
    </Styled>
  );
};

export default GetInTouchCard;
