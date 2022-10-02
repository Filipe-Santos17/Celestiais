import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    scroll-behavior: smooth;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
  }

  ul, ol {
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`