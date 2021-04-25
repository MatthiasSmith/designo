import React from 'react';
import styled, { css } from 'styled-components';

import { DESKTOP_BP, TABLET_BP } from '../constants/constants';

const StyledPageIntroCard = styled.div`
  padding-left: 0;
  padding-right: 0;

  .text-container {
    display: flex;
    flex-flow: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    order: ${(props) =>
      props.sideContentOrder && props.sideContentOrder === 1 ? 2 : 1};
    padding: ${(props) =>
        props.paddingTopBottom ? `${props.paddingTopBottom}` : '6.5625rem'}
      var(--site-side-padding);
    position: relative;
  }

  .content-text {
    margin-top: 1.5rem;
    max-width: 25rem;
  }

  .bg-image {
    top: ${(props) =>
      props.bgImagePosition && props.bgImagePosition.top
        ? `${props.bgImagePosition.top}`
        : '0'};
    right: ${(props) =>
      props.bgImagePosition && props.bgImagePosition.right
        ? `${props.bgImagePosition.right}`
        : '31.15rem'};
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    border-radius: var(--border-radius);

    .text-container {
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
      props.sideContent
        ? css`
            .text-container {
              align-items: unset;
              text-align: left;
              padding-left: 5.9375rem;
              padding-right: 5.9375rem;
            }

            .content-text {
              margin-top: 2rem;
            }

            .bg-image {
              top: -33.5%;
              right: 10%;
            }
          `
        : css`
            .bg-image {
              top: -66%;
              right: -10.5%;
            }
          `}
  }
`;

const StyledSideContentContainer = styled.div`
  order: ${(props) => (props.sideContentOrder ? props.sideContentOrder : 2)};

  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    order: 2; // always order as 2 on desktop
  }
`;

const IntroCard = ({
  title,
  text,
  sideContent,
  sideContentOrder,
  bgImage,
  bgImagePosition,
  paddingTopBottom,
}: {
  title: string;
  text: string;
  sideContent?: React.ReactNode;
  sideContentOrder?: number;
  bgImage: React.ReactNode;
  bgImagePosition?: any;
  paddingTopBottom?: string;
}) => {
  return (
    <StyledPageIntroCard
      className='card flex-col flex-row-gt-md'
      paddingTopBottom={paddingTopBottom}
      bgImagePosition={bgImagePosition}
      sideContent={sideContent}
      sideContentOrder={sideContentOrder}
    >
      <div className='text-container'>
        <div className='bg-image'>{bgImage}</div>
        <h1 className='heading-lg'>{title}</h1>
        <p className='content-text'>{text}</p>
      </div>
      {sideContent ? (
        <StyledSideContentContainer sideContentOrder={sideContentOrder}>
          {sideContent}
        </StyledSideContentContainer>
      ) : null}
    </StyledPageIntroCard>
  );
};

export default IntroCard;
