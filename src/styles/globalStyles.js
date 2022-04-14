import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #0A143E;
    --color-white: #C3CCF1;
    --color-grey: #516ACF;
    --color-accent: #FFC378;

    --ff-display: "SF Pro Display", sans-serif;
    --ff-text: "SF Pro Text", sans-serif;
    --ff-mono: "MonoLisa", monospace;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: var(--ff-text);
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--color-white);
    background-color: var(--color-black);
  }
`;

export default GlobalStyles;
