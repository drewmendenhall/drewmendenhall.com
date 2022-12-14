import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --background-accent-color: #f8f8f8;
    @media screen and (prefers-color-scheme: dark) {
      --background-accent-color: #1a1a1a;
    }
  }

  @page {
    margin: 1in;
  }
  html {
    background: var(--background-accent-color);
  }

  body {
    background: white;
    box-sizing: border-box;
    margin: 0;

    @media print {
      font-size: 12px;
    }

    @media screen and (prefers-color-scheme: dark) {
      background: black;
      color: white;
    }
  }
  * {
    box-sizing: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`

export default GlobalStyle
