import React from 'react';
import styled from 'styled-components';

import Nav from './nav';

const StyledHeader = styled.header``;

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledHeader>
      <Nav />
      {children}
    </StyledHeader>
  );
};

export default Header;
