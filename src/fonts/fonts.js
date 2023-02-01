import { createGlobalStyle } from "styled-components";

import Leitrua1 from "../fonts/leitura-news-roman-1.otf";
import Leitrua3 from "../fonts/leitura-news-roman-3.otf";

import Nitti from "../fonts/nittigrotesk-regular.otf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Leitura 1';
      src: url(${Leitrua1});
    };

    @font-face {
    font-family: 'Leitura 3';
      src: url(${Leitrua3});
    };

    @font-face {
    font-family: 'Nitti';
      src: url(${Nitti});
    };
`;
