import React from 'react';
import styled from 'styled-components';

import Nav from './nav';

const StyledHeader = styled.header`
  height: 6rem;
  padding: 2.1875rem var(--site-side-padding);
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
