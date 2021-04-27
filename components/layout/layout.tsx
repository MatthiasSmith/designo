import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { TABLET_BP } from '../../constants/constants';
import Header from '../header/header';
import Footer from '../footer/footer';

const StyledMain = styled.main`
  @media screen and (min-width: ${TABLET_BP}em) {
    padding: 0 var(--site-side-padding-md);
  }
`;

const StyledBgImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .leaf-bg-top {
    display: ${(props) => (props.hideTopImage ? 'none' : 'block')};
    top: ${(props) => (props.useAlternative ? '59%' : '35%')};
  }

  .leaf-bg-bottom {
    display: ${(props) => (props.useAlternative ? 'block' : 'none')};
    top: 200%;
    right: 0;
    transform: rotate(180deg);
  }
`;

const Layout = ({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
}) => {
  const router = useRouter();
  const useAlternativeBgImagesStyles =
    router.asPath === '/' ||
    router.asPath === '/about' ||
    router.asPath === '/contact';
  const hideTopBgImage =
    router.asPath === '/locations' || router.asPath === '/contact';

  return (
    <>
      <Head>
        <title>
          Designo Agency Website Challenge {pageTitle ? `| ${pageTitle}` : ''}
        </title>
      </Head>
      <Header></Header>
      <StyledBgImages
        className='hidden-sm hidden-md'
        useAlternative={useAlternativeBgImagesStyles}
        hideTopImage={hideTopBgImage}
      >
        <div className='bg-image leaf-bg-top'>
          <Image
            src='/shared/desktop/bg-pattern-leaf.svg'
            layout='fixed'
            width={1006}
            height={594}
          />
        </div>
        <div className='bg-image leaf-bg-bottom'>
          <Image
            src='/shared/desktop/bg-pattern-leaf.svg'
            layout='fixed'
            width={1006}
            height={594}
          />
        </div>
      </StyledBgImages>
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
