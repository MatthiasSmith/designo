import React from 'react';
import styled from 'styled-components';

import { TABLET_BP } from '../../constants/constants';
import Nav from './nav';

const StyledHeader = styled.header`
  height: 6rem;
  padding: 2.1875rem var(--site-side-padding);

  @media screen and (min-width: ${TABLET_BP}em) {
    padding: 4rem var(--site-side-padding-md) 5.8rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
