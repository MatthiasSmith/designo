import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import ResponsiveImage from '../../../components/responsive-image';
import { DESKTOP_BP, TABLET_BP } from '../../../constants/constants';
import addFadeInImageClass from '../../../helpers/add-fade-in-image-class';

const StyledAboutCard = styled.article`
  background-color: var(--light-peach-bg);
  overflow: hidden;

  .image-container {
    position: relative;
    z-index: 1;
  }

  .heading-lg {
    color: var(--color-primary);
  }

  .content-container {
    padding: 5rem 1.5rem;
    position: relative;
    text-align: center;
    z-index: 0;
  }

  .text-container {
    margin-top: 1.5rem;

    > :not(:first-of-type) {
      margin-top: 1.5rem;
    }
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    border-radius: var(--border-radius);

    .bg-image {
      top: -46%;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    max-height: 40rem;

    .image-container {
      min-width: 476px;
      min-height: 640px;
      order: ${(props) => (props.flipSides ? 2 : 1)};
    }

    .content-container {
      align-items: flex-start;
      order: ${(props) => (!props.flipSides ? 2 : 1)};
      padding: 5rem 6rem;
      text-align: left;
    }

    .bg-image {
      top: unset;
      top: 8.75%;
      left: -25%;
    }
  }
`;

const AboutCard = ({
  imageSources,
  flipSides,
  title,
  children,
}: {
  imageSources: any;
  flipSides?: boolean;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledAboutCard className='flex-col flex-row-gt-md' flipSides={flipSides}>
      <div className='image-container'>
        <ResponsiveImage imageSources={imageSources} layout='responsive' />
      </div>
      <div className='content-container flex-col flex-centered'>
        <div className='bg-image'>
          <Image
            className='opacity-0'
            src='/shared/desktop/bg-pattern-three-circles.svg'
            layout='fixed'
            width='584'
            height='584'
            onLoad={addFadeInImageClass}
          />
        </div>
        <h2 className='heading-lg'>{title}</h2>
        <div className='text-container'>{children}</div>
      </div>
    </StyledAboutCard>
  );
};

export default AboutCard;
