import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #0A143E;
    --color-black-rgb: 10, 20, 62;
    --color-white: #C3CCF1;
    --color-grey: #516ACF;
    --color-accent: #FFC378;

    --ff-display: "SF Pro Display", sans-serif;
    --ff-text: "SF Pro Text", sans-serif;
    --ff-mono: "MonoLisa", monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 10px;

    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: var(--ff-text);
    font-size: var(--fz-md);
    font-weight: 500;
    color: var(--color-white);
    background-color: var(--color-black);
    transition: var(--transition);

    a {
      text-decoration: none;
      color: var(--color-white);

      &:active,
      &:focus,
      &:hover {
        color: var(--color-accent);
      }
    }
  }
`;

export default GlobalStyles;
