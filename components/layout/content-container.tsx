import React from 'react';
import styled, { css } from 'styled-components';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';

const StyledContentContainer = styled.div`
  ${(props) =>
    props.isHome
      ? css`
          padding: 7.5rem var(--site-side-padding);

          @media screen and (min-width: ${TABLET_BP}em) {
            padding: 7.5rem 0 4.1875rem;
          }
        `
      : css`
          padding: 6rem var(--site-side-padding);

          @media screen and (min-width: ${TABLET_BP}em) {
            padding: 7.5rem 0;
          }
        `}

  @media screen and (min-width: ${DESKTOP_BP}em) {
    padding: 10rem 0 10rem;
  }
`;

const ContentContainer = ({
  isHome,
  children,
}: {
  isHome?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <StyledContentContainer isHome={isHome}>{children}</StyledContentContainer>
  );
};

export default ContentContainer;
