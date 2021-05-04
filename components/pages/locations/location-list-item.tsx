import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Scene } from 'react-scrollmagic';

import { DESKTOP_BP, TABLET_BP } from '../../../constants/constants';
import ResponsiveImage from '../../responsive-image';
import addFadeInImageClass from '../../../helpers/add-fade-in-image-class';

const StyledLocationListItem = styled.li`
  overflow: hidden;
  position: relative;
  z-index: 0;

  &:not(:first-of-type) {
    margin-top: 2.5rem;
  }

  &.fade-in .animatable {
    opacity: 1;
    transform: translate(0rem, 0rem);
  }

  .animatable {
    transition: all 0.6s ease-out;
    opacity: 0;
    transform: translateX(50%);
  }

  .content-container {
    background-color: var(--light-peach-bg);
    padding: 5rem 0;
    position: relative;
    z-index: 0;
  }

  .address,
  .contact {
    margin-top: 1.5rem;
    text-align: center;
  }

  .heading-lg {
    color: var(--color-primary);
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    &:not(:first-of-type) {
      margin-top: 7.5rem;
    }

    .img-container,
    .content-container {
      border-radius: var(--border-radius);
      overflow: hidden;
    }

    .content-container {
      margin-top: 1.5rem;
      padding: 5.5rem 4.6875rem;

      &.flex-centered {
        align-items: flex-start;
      }
    }

    .bg-image {
      top: -16.5rem;
      left: 0;
    }

    .heading-lg {
      font-size: 2.5rem;
    }

    .info-container {
      width: 100%;
      max-width: 28rem;
    }

    .address,
    .contact {
      text-align: left;
    }

    .contact {
      margin-left: 6rem;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    max-height: 20.375rem;

    &:not(:first-of-type) {
      margin-top: 2rem;
    }

    &:nth-child(odd) {
      .img-container {
        order: 2;
        margin-left: 1.875rem;
      }

      .content-container {
        order: 1;
      }
    }

    &:nth-child(even) .img-container {
      margin-right: 1.875rem;
    }

    .img-container {
      flex: 0 0 350px;

      > div {
        height: 100%;
      }
    }

    .content-container {
      margin-top: 0;
      padding: 5.5rem 5.9375rem;
    }

    .bg-image {
      top: -16rem;
      left: 0;
    }
  }
`;

interface LocationType {
  imageSources: any;
  name: string;
  id: string;
  address: any;
  contact: any;
}

const LocationListItem = ({ location }: { location: LocationType }) => {
  return (
    <Scene classToggle='fade-in' reverse={false}>
      <StyledLocationListItem id={location.id} className='flex-row-gt-md'>
        <div className='img-container flex animatable'>
          <ResponsiveImage
            imageSources={location.imageSources}
            layout='responsive'
            alt={`Map of our office location in ${location.name}.`}
          />
        </div>
        <div className='content-container flex-col flex-centered flex animatable'>
          <div className='bg-image'>
            <Image
              className='opacity-0'
              src='/shared/desktop/bg-pattern-three-circles.svg'
              layout='fixed'
              width='584'
              height='584'
              onLoad={addFadeInImageClass}
              alt=''
            />
          </div>
          <h2 className='heading-lg'>{location.name}</h2>
          <div className='info-container flex-col flex-row-gt-sm'>
            <div className='address flex-col flex'>
              <strong>{location.address.name}</strong>
              <span>{location.address.street}</span>
              <span>{`${location.address.city}${
                location.address.region ? ', ' + location.address.region : ''
              } ${location.address.zip}`}</span>
            </div>
            <div className='contact flex-col'>
              <strong>Contact</strong>
              <span>P : {location.contact.phone}</span>
              <span>M : {location.contact.email}</span>
            </div>
          </div>
        </div>
      </StyledLocationListItem>
    </Scene>
  );
};

export default LocationListItem;
