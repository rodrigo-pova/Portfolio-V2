import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #0A143E;
    --color-black-rgb: 10, 20, 62;
    --color-almost-black: hsl(228, 72%, 15.5%);
    --color-white: #C3CCF1;
    --color-grey: #516ACF;
    --color-accent: #FFC378;
    --color-accent-rgb: 255, 195, 120;

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

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: var(--ff-text);
    font-size: var(--fz-md);
    font-weight: 500;
    color: var(--color-grey);
    background-color: var(--color-black);
    
    @media (max-width: 480px) {
      font-size: var(--fz-sm);
    }

    a {
      text-decoration: none;
      color: var(--color-white);
      transition: var(--transition);

      &:active,
      &:focus,
      &:hover {
        color: var(--color-accent);
      }
    }

    .blur {
      overflow: hidden;

      & > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }
`;

export default GlobalStyles;
