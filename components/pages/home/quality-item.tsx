import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { DESKTOP_BP, TABLET_BP } from '../../../constants/constants';

const Styled = styled.li`
  text-align: center;

  &:not(:first-of-type) {
    margin-top: 5rem;
  }

  &:nth-of-type(2) .bg-image {
    transform: rotate(-90deg);
  }

  &:nth-of-type(3) .bg-image {
    transform: rotate(90deg);
  }

  .img-container {
    position: relative;
    width: 12.625rem;
    height: 12.625rem;
  }

  .heading-sm {
    margin-top: 3rem;
  }

  .quality-text {
    font-size: 1rem;
    line-height: 1.625rem;
    margin-top: 2rem;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    text-align: unset;

    &:not(:first-of-type) {
      margin-top: 2rem;
    }

    .heading-sm {
      margin-top: unset;
    }

    .text-container {
      margin-left: 3rem;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    text-align: center;

    &:not(:first-of-type) {
      margin-top: 0;
      margin-left: 1.875rem;
    }

    .heading-sm {
      margin-top: 3rem;
    }

    .text-container {
      margin-left: 0;
    }
  }
`;

const QualityItem = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) => {
  return (
    <Styled className='flex-col flex-row-gt-sm flex-col-gt-md flex-centered'>
      <div className='img-container'>
        <div className='bg-image' aria-hidden='true'>
          <Image
            src='/shared/desktop/bg-pattern-small-circle.svg'
            layout='fill'
            alt=''
          />
        </div>
        <Image src={image} layout='fixed' width={202} height={202} alt='' />
      </div>
      <div className='text-container'>
        <h2 className='heading-sm text-uppercase'>{title}</h2>
        <p className='quality-text'>{text}</p>
      </div>
    </Styled>
  );
};

export default QualityItem;
