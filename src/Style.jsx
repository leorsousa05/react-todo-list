import { createGlobalStyle } from "styled-components"
import myFont from "./font/Early-GameBoy.woff"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "block-font";
    src: url(${myFont}) format('woff');
    font-style: normal;
  }

  @media (max-width: 540px) {
    html {
      font-size: 14px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #5215fc;

    @media (max-width: 540px) {
      place-items: unset;
      justify-content: center;
      align-items: center !important;
    }
  
    & h1, h2, h3, p, ul {
      margin: 0;
      padding: 0;
    }
  }
`