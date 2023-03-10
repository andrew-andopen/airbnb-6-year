import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
    color:#081d34;
  font-size: 16px;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  font-family: "Nitti",Arial,sans-serif;
  font-size: 10px;
  background: #F2EBE0;
  overflow:hidden;
}



ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

img, iframe {
  vertical-align: bottom;
  max-width: 100%;
}

input, textarea, select {
  font: inherit;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

a {
  text-decoration:none;
  color:#333;
}


`;

export const StyledH1 = styled.h1`
  font-family: "Leitura 1", Arial, sans-serif;
  font-size: 32px;
  line-height: 40px;

  & > span {
    font-family: "Leitura 3";
    font-size: 40px;
    line-height: 40px;
  }
`;

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
`;

export const StyledTitleContainer = styled.div`
  margin: 0 40px;
  max-width: 70%;
  text-align: center;
`;
