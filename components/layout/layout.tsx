import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Controller } from 'react-scrollmagic';

import { TABLET_BP } from '../../constants/constants';
import Header from '../header/header';
import Footer from '../footer/footer';

const StyledMain = styled.main`
  animation: fade-in 0.3s ease-out forwards;
  opacity: 0;

  @media screen and (min-width: ${TABLET_BP}em) {
    padding: 0 var(--site-side-padding-md);
  }
`;

const StyledBgImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  .leaf-bg-top {
    display: ${(props) => (props.hideTopImage ? 'none' : 'block')};
    top: ${(props) => (props.useAlternative ? '27rem' : '18.25rem')};
  }

  .leaf-bg-bottom {
    display: ${(props) => (props.useAlternative ? 'block' : 'none')};
    top: ${(props) =>
      props.route === '/'
        ? '152.25rem'
        : props.route === '/about'
        ? '148rem'
        : '56.5rem'};
    right: ${(props) =>
      props.route === '/about'
        ? '-23rem'
        : props.route === '/contact'
        ? '-27rem'
        : '0'};
    transform: ${(props) =>
      props.route !== '/contact' ? 'rotate(180deg)' : undefined};
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
  const useAlternativeBgImageStyles =
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
      <Controller>
        <Header></Header>
        <StyledBgImages
          className='hidden-sm hidden-md'
          useAlternative={useAlternativeBgImageStyles}
          hideTopImage={hideTopBgImage}
          route={router.asPath}
        >
          <div className='bg-image leaf-bg-top'>
            <Image
              src='/shared/desktop/bg-pattern-leaf.svg'
              layout='fixed'
              width={1006}
              height={594}
              alt=''
              priority={true}
            />
          </div>
          <div className='bg-image leaf-bg-bottom'>
            <Image
              src='/shared/desktop/bg-pattern-leaf.svg'
              layout='fixed'
              width={1006}
              height={594}
              alt=''
            />
          </div>
        </StyledBgImages>
        <StyledMain>{children}</StyledMain>
        <Footer />
      </Controller>
    </>
  );
};

export default Layout;
