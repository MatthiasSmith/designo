import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { TABLET_BP } from '../constants/constants';
import Header from './header/header';
import Footer from './footer/footer';

const StyledMain = styled.main`
  @media screen and (min-width: ${TABLET_BP}em) {
    padding: 0 var(--site-side-padding-md);
  }
`;

const Layout = ({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
}) => {
  return (
    <>
      <Head>
        <title>
          Designo Agency Website Challenge {pageTitle ? `| ${pageTitle}` : ''}
        </title>
      </Head>
      <Header></Header>
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
