import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Styled = styled.li`
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

  .headingSm {
    margin-top: 3rem;
  }

  .quality-text {
    font-size: 1rem;
    line-height: 1.625rem;
    margin-top: 2rem;
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
    <Styled className='flex-column flex-centered text-center'>
      <div className='img-container'>
        <div className='bg-image' aria-hidden='true'>
          <Image
            src='/../public/shared/desktop/bg-pattern-small-circle.svg'
            layout='fill'
            alt=''
          />
        </div>
        <Image src={image} layout='fixed' width={202} height={202} alt='' />
      </div>
      <h2 className='headingSm text-uppercase'>{title}</h2>
      <p className='quality-text'>{text}</p>
    </Styled>
  );
};

export default QualityItem;
