import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
    height: 100%;
    color:black;
  }

  body {
    min-height: 100%;
    background: whitesmoke;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  textarea, button, button:active {
    resize: none;
    outline: none;
    border: none;
  }

  a, a:visited {
    text-decoration: none;
  }

  input, textarea {
    border: none;

    :focus {
      outline: none;
    }
  }

  * { 
    box-sizing: border-box;
    margin: 0;

    ::selection {
      background: #343a40;

    }
  }

  #root {
    overflow-y: visible;
  }
`;

export default GlobalStyle;
