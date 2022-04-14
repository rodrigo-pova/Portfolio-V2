import { createGlobalStyle } from "styled-components";
import monoLisaRegular from '../fonts/MonoLisa-Regular.ttf';
import monoLisaLight from '../fonts/MonoLisa-Light.ttf';
import monoLisaMedium from '../fonts/MonoLisa-Medium.ttf';
import monoLisaBold from '../fonts/MonoLisa-Bold.ttf';
import SFProDisplayBlack from '../fonts/SF-Pro-Display-Black.otf';
import SFProTextMedium from '../fonts/SF-Pro-Text-Medium.otf';
import SFProTextBold from '../fonts/SF-Pro-Text-Bold.otf';


const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "MonoLisa";
    font-style: normal;
    font-weight: 400;
    src: local("MonoLisa Regular"), local("MonoLisa-Regular"), url(${monoLisaRegular}) format("truetype");
  }
  @font-face {
    font-family: "MonoLisa";
    font-style: normal;
    font-weight: 300;
    src: local("MonoLisa Light"), local("MonoLisa-Light"), url(${monoLisaLight}) format("truetype");
  }
  @font-face {
    font-family: "MonoLisa";
    font-style: normal;
    font-weight: 500;
    src: local("MonoLisa Medium"), local("MonoLisa-Medium"), url(${monoLisaMedium}) format("truetype");
  }
  @font-face {
    font-family: "MonoLisa";
    font-style: normal;
    font-weight: 700;
    src: local("MonoLisa Bold"), local("MonoLisa-Bold"), url(${monoLisaBold}) format("truetype");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 900;
    src: local("SF Pro Display Black"), local("SF-Pro-Display-Black"), url(${SFProDisplayBlack}) format("opentype")
  }
  @font-face {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    src: local("SF Pro Text Medium"), local("SF-Pro-Text-Medium"), url(${SFProTextMedium}) format("opentype");
  }
  @font-face {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 700;
    src: local("SF Pro Text Bold"), local("SF-Pro-Text-Bold"), url(${SFProTextBold}) format("opentype");
  }
`

export default FontStyles;