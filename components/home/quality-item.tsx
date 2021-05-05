import styled from 'styled-components';
import Image from 'next/image';
import { Scene } from 'react-scrollmagic';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';

const Styled = styled.li`
  /* opacity: 0; */
  text-align: center;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  /* transform: translateX(-4rem); */

  @media screen and (prefers-reduced-motion: reduce) {
    transition: opacity 0.6s ease-out;
    transform: unset !important; // override the desktop settings
  }

  &.fade-in {
    opacity: 1;
    transform: translate(0rem, 0rem);
  }

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
    /* transform: translateY(2rem); */

    &:nth-of-type(2) {
      transition-delay: 0.25s;
    }

    &:nth-of-type(3) {
      transition-delay: 0.5s;
    }

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
    // <Scene classToggle='fade-in' reverse={false} offset={-90}>
    <Styled className='flex-col flex-row-gt-sm flex-col-gt-md flex-centered'>
      <div className='img-container'>
        <div className='bg-image' aria-hidden='true'>
          <Image
            src='/shared/desktop/bg-pattern-small-circle.svg'
            layout='fill'
            alt=''
            loading='eager'
          />
        </div>
        <Image src={image} layout='fixed' width={202} height={202} alt='' />
      </div>
      <div className='text-container'>
        <h2 className='heading-sm text-uppercase'>{title}</h2>
        <p className='quality-text'>{text}</p>
      </div>
    </Styled>
    // </Scene>
  );
};

export default QualityItem;
