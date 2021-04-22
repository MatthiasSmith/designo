import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { TABLET_BP } from '../../../constants/constants';
import ResponsiveImage from '../../responsive-image';

const Styled = styled.li`
  border-radius: var(--border-radius);
  color: white;
  overflow: hidden;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 1.5rem;
  }

  .content-container {
    background-color: rgba(0, 0, 0, 0.55);
    padding: 5.625rem var(--site-side-padding);
    transition: background-color 0.3s ease-out;

    &:hover {
      background-color: rgba(231, 129, 107, 0.5);
    }
  }

  .heading-md {
    margin-bottom: 0.75rem;
  }

  .link-text {
    font-size: 0.9375rem;
    letter-spacing: 5px;
    margin-right: 1rem;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    .content-container {
      padding: 3.3125rem var(--site-side-padding);
    }

    .heading-md {
      margin-bottom: 1.4rem;
    }

    .link-text {
      margin-right: 1.3125rem;
    }
  }
`;

const ProjectLinkItem = ({
  title,
  bgImages,
}: {
  title: string;
  bgImages: any;
}) => {
  const router = useRouter();

  return (
    <Styled>
      <div className='bg-image' aria-hidden='true'>
        <ResponsiveImage
          imageSources={bgImages}
          imageIndex={router.asPath === '/' ? 0 : 1}
          layout='fill'
          objectFit='cover'
          alt=''
        />
      </div>
      <Link href='/'>
        <a>
          <div className='top-layer content-container text-center text-uppercase'>
            <h2 className='heading-md'>{title}</h2>
            <span className='link-text'>View Projects</span>
            <Image
              src='/shared/desktop/icon-right-arrow.svg'
              layout='fixed'
              width={7}
              height={10}
              alt=''
            />
          </div>
        </a>
      </Link>
    </Styled>
  );
};

export default ProjectLinkItem;
