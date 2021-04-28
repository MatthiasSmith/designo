import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ButtonLink from '../../button-link';
import { DESKTOP_BP } from '../../../constants/constants';

const StyledLocationLinksListItem = styled.li`
  .img-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    width: 12.625rem;
    height: 12.625rem;
  }

  &:not(:first-of-type) {
    margin-top: 3rem;
  }

  &:first-of-type {
    .bg-image {
      transform: rotate(90deg);
    }
  }

  &:last-of-type {
    .bg-image {
      transform: rotate(-90deg);
    }
  }

  .heading-sm {
    margin-top: 3rem;
  }

  .location-link-btn {
    display: block;
    margin: 2rem auto 0;
    width: 9.5rem;
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    &:not(:first-of-type) {
      margin-top: 0;
    }
  }
`;

const LocationLinksListItem = ({
  name,
  image,
  href,
}: {
  name: string;
  image: any;
  href: string;
}) => {
  return (
    <StyledLocationLinksListItem>
      <div className='img-container'>
        <div className='bg-image' aria-hidden='true'>
          <Image
            src='/shared/desktop/bg-pattern-small-circle.svg'
            layout='fill'
            alt=''
          />
        </div>
        <Image
          src={image.src}
          layout='fixed'
          width={image.width}
          height={image.height}
          alt=''
        />
      </div>
      <h2 className='heading-sm'>{name}</h2>
      <ButtonLink className='location-link-btn' href={href} primary={true}>
        See location
      </ButtonLink>
    </StyledLocationLinksListItem>
  );
};

export default LocationLinksListItem;
