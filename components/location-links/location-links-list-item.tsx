import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Scene } from 'react-scrollmagic';

import ButtonLink from '../button-link';
import { DESKTOP_BP } from '../../constants/constants';
import addFadeInImageClass from '../../helpers/add-fade-in-image-class';
import { ImageSourceType } from '../../types/image-source-type';

const StyledLocationLinksListItem = styled.li`
  &.animatable {
    transition: all 0.6s ease-out;
    opacity: 0;
    transform: translateY(2rem);

    @media screen and (prefers-reduced-motion: reduce) {
      transform: unset;
    }
  }

  &.fade-in.animatable {
    opacity: 1;
    transform: translate(0rem, 0rem);
  }

  &:nth-of-type(2) {
    transition-delay: 0.25s;
  }

  &:nth-of-type(3) {
    transition-delay: 0.5s;
  }

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
  image: ImageSourceType;
  href: string;
}) => {
  return (
    <Scene classToggle='fade-in' offset={-70} reverse={false}>
      <StyledLocationLinksListItem className='animatable'>
        <div className='img-container'>
          <div className='bg-image' aria-hidden='true'>
            <Image
              src='/shared/desktop/bg-pattern-small-circle.svg'
              layout='fill'
              alt=''
            />
          </div>
          <Image
            className='opacity-0'
            src={image.src}
            layout='fixed'
            width={image.width}
            height={image.height}
            alt=''
            onLoad={addFadeInImageClass}
          />
        </div>
        <h2 className='heading-sm'>{name}</h2>
        <ButtonLink className='location-link-btn' href={href} primary={true}>
          See location
        </ButtonLink>
      </StyledLocationLinksListItem>
    </Scene>
  );
};

export default LocationLinksListItem;
