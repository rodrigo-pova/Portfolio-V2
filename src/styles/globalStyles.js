import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "MonoLisa";
    font-style: normal;
    font-weight: 400;
    src: local("MonoLisa Regular"), local("MonoLisa-Regular"), url("../fonts/MonoLisa-Regular.ttf"), format("truetype");
  }
  @font-face {
    font-family: "MonoLisa";
    font-style: normal;
    font-weight: 300;
    src: local("MonoLisa Light"), local("MonoLisa-Light"), url("../fonts/MonoLisa-Light.ttf"), format("truetype");
  }
  @font-face {
    font-family: "MonoLisa";
    font-style: normal;
    font-weight: 500;
    src: local("MonoLisa Medium"), local("MonoLisa-Medium"), url("../fonts/MonoLisa-Medium.ttf"), format("truetype");
  }
  @font-face {
    font-family: "MonoLisa";
    font-style: normal;
    font-weight: 700;
    src: local("MonoLisa Bold"), local("MonoLisa-Bold"), url("../fonts/MonoLisa-Bold.ttf"), format("truetype");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 900;
    src: local("SF Pro Display Black"), local("SF-Pro-Display-Black"), url("../fonts/SF-Pro-Display-Black.otf");
  }
  @font-face {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    src: local("SF Pro Text Medium"), local("SF-Pro-Text-Medium"), url("../fonts/SF-Pro-Text-Medium.otf");
  }
  @font-face {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 700;
    src: local("SF Pro Text Bold"), local("SF-Pro-Text-Bold"), url("../fonts/SF-Pro-Text-Bold.otf");
  }

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

export default GlobalStyle;
