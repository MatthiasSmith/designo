import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import '../styles/global.css';

const GlobalStyle = createGlobalStyle`
  :root {
    // primary colors
    --peach: hsl(11, 73%, 66%);
    --black: hsl(270, 3%, 11%);

    // secondary colors
    --light-peach: hsl(11, 100%, 80%);
    --dark-gray: hsl(264, 5%, 20%);
    --light-gray: hsl(210, 17%, 95%);

    // theme
    --color-primary: var(--peach);
    --color-secondary: var(--light-peach);

    // typography
    --font-family: 'Jost', sans-serif;
    --font-weight-normal: 400;
    --font-weight-medium: 500;

    // misc
    --site-side-padding: 1.5rem;
    --border-radius: 0.9375rem;

    // breakpoints
    --tablet-width: 48rem;
    --desktop-width: 64rem;
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
    color: var(--dark-gray);
    font-size: 0.9375rem;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    width: 100%;
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

  .flex-column {
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
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  .image-link {
    display: inline-block;

    > div {
      vertical-align: bottom;
    }
  }

  .top-layer {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 47.99em) {
    .hidden-sm {
      display: none;
    }
  }

  @media screen and (min-width: 48em) {
    body {
      font-size: 1rem;
    }

    p {
      line-height: 1.625rem;
    }

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
  }
`;

const theme = {
  colors: {
    primary: 'var(--color-primary)',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
