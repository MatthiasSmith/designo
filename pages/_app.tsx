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
    line-height: 1.625rem;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
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

  /* utils */
  // typography
  .headingLg {
    font-size: 2rem;
    font-weight: var(--font-weight-medium);
    line-height: 2.25rem;
  }

  .headingMd {
    font-size: 2.5rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: 2px;
    line-height: 3rem;
  }

  .headingSm {
    font-size: 1.25rem;
    font-weight: var(--font-weight-medium);
    letter-spacing: 5px;
    line-height: 1.625rem;
    text-transform: uppercase;
  }

  .text-center {
    text-align: center;
  }

  // desktop typography
  @media screen and (min-width: 34em) {
    body {
      font-size: 1rem;
    }

    .headingLg {
      font-size: 3rem;
      line-height: 3rem;
    }
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

  // positioning
  .m0a {
    margin: 0 auto;
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
