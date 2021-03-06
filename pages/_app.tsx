import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createGlobalStyle, css } from 'styled-components';
import { PageTransition } from 'next-page-transitions';

import { TABLET_BP, DESKTOP_BP, UNIT } from '../constants/constants';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import useCurrentWidth from '../hooks/use-current-width';

const pageTransitionTime = 850;
const pageTransitionAngle = -45;
const pageTransitionPseudoElement = css`
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  width: calc(var(--pageSize) * 2);
  height: calc(100vh * 2);
  z-index: 100;
  background: var(--peach);
`;

const GlobalStyle = createGlobalStyle`
  :root {
    // primary colors
    --peach: hsl(11, 73%, 66%);
    --black: hsl(270, 3%, 11%);

    // secondary colors
    --light-peach: hsl(11, 100%, 80%);
    --light-peach-bg: hsl(4, 76%, 97%);
    --dark-gray: hsl(264, 5%, 20%);
    --light-gray: hsl(210, 17%, 95%);

    // theme
    --color-primary: var(--peach);
    --color-secondary: var(--light-peach);

    // typography
    --font-family: 'Jost', sans-serif;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    // misc
    --site-side-padding: 1.5rem;
    --site-side-padding-md: 2.4375rem;
    --site-content-max-width: 74.3125rem;
    --border-radius: 0.9375rem;
    --pageSize: 100vh;

    // breakpoints
    --tablet-width: ${TABLET_BP}${UNIT};
    --desktop-width: ${DESKTOP_BP}${UNIT};
  }

  // setup
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-family);
    font-size: 1em;
  }

  body {
    background: white;
    color: var(--dark-gray);
    font-size: 0.9375rem;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  #__next {
    overflow: hidden;
    position: relative;
  }

  header,
  main {
    margin: 0 auto;
    max-width: var(--site-content-max-width);
  }

  p {
    line-height: 1.5625rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--font-weight-medium);
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* utils */
  // typography
  .heading-lg {
    font-size: 2rem;
    font-weight: var(--font-weight-medium);
    line-height: 2.25rem;
  }

  .heading-md {
    font-size: 1.75rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: 1.4px;
    line-height: 2.25rem;
  }

  .heading-sm {
    font-size: 1.25rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: 5px;
    line-height: 1.625rem;
    text-transform: uppercase;
  }

  .text-center {
    text-align: center;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  // text-color 
  .text-clr-gray {
    color: var(--dark-gray);
  }

  .text-clr-black {
    color: var(---black);
  }

  .text-clr-white {
    color: white;
  }
  /* end typography */

  // layout
  .flex-row {
    display: flex;
    flex-flow: row;
  }

  .flex-col {
    display: flex;
    flex-flow: column;
  }

  .flex {
    flex: 1;
  }

  .flex-centered {
    justify-content: center;
    align-items: center;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .full-width {
    width: 100%;
  }

  // positioning
  .m0a {
    margin: 0 auto;
  }

  // misc.
  .card {
    background: var(--color-primary);
    color: white;
    overflow: hidden;
    padding-left: var(--site-side-padding);
    padding-right: var(--site-side-padding);
    position: relative;
    z-index: 1;
  }

  .bg-image {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  .image-link {
    display: inline-block;

    > div {
      vertical-align: bottom;
    }
  }

  .fade-in-image {
    animation: fade-in 0.25s ease-out 0s forwards;
  }

  .opacity-0 {
    opacity: 0;
  }

  .top-layer {
    position: relative;
    z-index: 1;
  }

  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }

  // animations
  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fade-in-move-up {
    0% {
      opacity: 0;
      transform: translateY(1.25rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0rem);
    }
  }

  @keyframes fade-in-move-down {
    0% {
      opacity: 0;
      transform: translateY(-1.25rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0rem);
    }
  }

  @media screen and (max-width: ${TABLET_BP - 0.01}em) {
    .hidden-sm {
      display: none;
    }
  }

  @media screen and (max-width: ${DESKTOP_BP - 0.01}em) {
    .hidden-md {
      display: none;
    }
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    body {
      font-size: 1rem;
    }

    p {
      line-height: 1.625rem;
    }

    // typography
    .heading-lg {
      font-size: 3rem;
      line-height: 3rem;
    }

    .heading-md {
      font-size: 2.5rem;
      line-height: 3rem;
      letter-spacing: 2px;
    }

    .hidden-gt-sm {
      display: none;
    }

    // layout
    .flex-row-gt-sm {
      display: flex;
      flex-flow: row;
    }

    // misc.
    .card {
      padding-left: 3.625rem;
      padding-right: 3.625rem;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    .flex-row-gt-md {
      display: flex;
      flex-flow: row;
    }

    .flex-col-gt-md {
      display: flex;
      flex-flow: column;
    }

    .card {
      padding-left: 5.9375rem;
      padding-right: 5.9375rem;
    }
  }

  // page transitions
  @media screen and (prefers-reduced-motion: no-preference) {
    .page-transition-enter::after {
      ${pageTransitionPseudoElement}
      transform: translateX(0%) skewX(${pageTransitionAngle}deg);
    }

    .page-transition-enter-active::after {
      transform: translateX(100%) skewX(${pageTransitionAngle}deg);
      transition: transform ${pageTransitionTime}ms ease-in;
    }

    .page-transition-exit::before {
      ${pageTransitionPseudoElement}
      transform: translateX(-100%) skewX(${pageTransitionAngle}deg);
    }

    .page-transition-exit-active::before {
      transform: translateX(0%) skewX(${pageTransitionAngle}deg);
      transition: transform ${pageTransitionTime}ms ease-out;
    }
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const router = useRouter();
  const clientWidth = useCurrentWidth();

  useEffect(() => {
    setIsReducedMotion(matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    clientWidth && clientWidth > window.innerHeight
      ? document.documentElement.style.setProperty('--pageSize', '100vw')
      : document.documentElement.style.setProperty('--pageSize', '100vh');
  }, [clientWidth]);

  return (
    <>
      <GlobalStyle />
      <PageTransition
        timeout={isReducedMotion ? undefined : pageTransitionTime}
        classNames='page-transition'
        skipInitialTransition={true}
      >
        <Layout key={router.route}>
          <Component {...pageProps} />
        </Layout>
      </PageTransition>
    </>
  );
}
