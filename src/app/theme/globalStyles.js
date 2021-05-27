import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  body {
    color: 'white';
  }

  .container {
    margin: 0 auto;

    @media (max-width: 992px) {
      max-width: 960px;
    }
  }
`;

export default GlobalStyle;
