import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const theme = {
    colors: {
        white: "#f7ebe8",
        grey: "#444140",
        greyRGBA: "rgba(68, 65, 64, 0.4)",
        black: "#1e1e24",
        green: "#248232",
    },
    font: {
        small: "0.5rem",
        normal: "1rem",
        large: "2rem",
        Xlarge: "4rem",
        XXlarge: "8rem",
        XXXlarge: "16rem",
    },
    breakpoint: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    },
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "nimbus";
    src: url("/font/NimbusSanL-Reg-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "nimbus";
    src: url("/font/NimbusSanL-Bol-webfont.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }
  /* css reset taken from --> https://piccalil.li/blog/a-modern-css-reset/ */
  
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: "nimbus", sans-serif, serif;
    font-size: ${(props) => props.theme.font.normal};
    color: ${(props) => props.theme.colors.black};
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${(props) => props.theme.colors.white};
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  h1{
    font-size: ${(props) => props.theme.font.XXlarge}
  }

  h2{ 
    font-size: ${(props) => props.theme.font.Xlarge}
  }
  h3{
    font-size: ${(props) => props.theme.font.large}
  }

  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button{
    cursor: pointer;
  }
`;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
