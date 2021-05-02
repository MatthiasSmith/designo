import React from 'react';
import styled, { css } from 'styled-components';

import { DESKTOP_BP, TABLET_BP } from '../constants/constants';

const StyledPageIntroCard = styled.div`
  &.card {
    padding-left: 0;
    padding-right: 0;
  }

  .content-container {
    display: flex;
    flex-flow: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6.5625rem var(--site-side-padding);
    position: relative;
  }

  .content-text {
    margin-top: 1.5rem;
    max-width: 25rem;
  }

  .bg-image {
    top: 0;
    right: 31.15rem;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    border-radius: var(--border-radius);

    .content-container {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    .bg-image {
      top: -65%;
      right: 3%;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    max-height: 30rem;

    ${(props) =>
      props.bgImagePosition
        ? css`
            .bg-image {
              top: ${props.bgImagePosition.top};
              right: ${props.bgImagePosition.right};
            }
          `
        : css`
            .bg-image {
              top: -10.25rem;
              right: -7.5rem;
            }
          `}
  }
`;

const IntroCard = ({
  title,
  text,
  bgImage,
  bgImagePosition,
}: {
  title: string;
  text: string;
  bgImage: React.ReactNode;
  bgImagePosition?: { top: string; right: string };
}) => {
  return (
    <StyledPageIntroCard
      className='card flex-col flex-row-gt-md'
      bgImagePosition={bgImagePosition}
    >
      <div className='content-container'>
        <div className='bg-image'>{bgImage}</div>
        <h1 className='heading-lg'>{title}</h1>
        <p className='content-text'>{text}</p>
      </div>
    </StyledPageIntroCard>
  );
};

export default IntroCard;
