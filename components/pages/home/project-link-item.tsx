import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

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
    letter-spacing: 5px;
    margin-right: 1rem;
  }
`;

const ProjectLinkItem = ({
  title,
  bgImage,
}: {
  title: string;
  bgImage: string;
}) => {
  return (
    <Styled>
      <div className='bg-image' aria-hidden='true'>
        <Image src={bgImage} layout='fill' alt='' />
      </div>
      <Link href='/'>
        <a>
          <div className='top-layer content-container text-center text-uppercase'>
            <h2 className='heading-md'>{title}</h2>
            <span className='link-text'>View Projects</span>
            <Image
              src='/../public/shared/desktop/icon-right-arrow.svg'
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
