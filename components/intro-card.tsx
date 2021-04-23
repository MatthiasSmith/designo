import React from 'react';
import styled from 'styled-components';

import { DESKTOP_BP, TABLET_BP } from '../constants/constants';

const StyledPageIntroCard = styled.div`
  padding-top: ${(props) =>
    props.paddingTopBottom ? `${props.paddingTopBottom}` : '6.5625rem'};
  padding-bottom: ${(props) =>
    props.paddingTopBottom ? `${props.paddingTopBottom}` : '6.5625rem'};

  .text-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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
    padding-top: 4rem;
    padding-bottom: 4rem;

    .bg-image {
      top: -65%;
      right: 3%;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    .bg-image {
      top: -66%;
      right: -10.5%;
    }
  }
`;

const StyledSideContentContainer = styled.div``;

const IntroCard = ({
  title,
  text,
  sideContent,
  sideContentOrder,
  bgImage,
  paddingTopBottom,
}: {
  title: string;
  text: string;
  sideContent?: React.ReactNode;
  sideContentOrder?: number;
  bgImage: React.ReactNode;
  paddingTopBottom?: string;
}) => {
  return (
    <StyledPageIntroCard className='card' paddingTopBottom={paddingTopBottom}>
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
