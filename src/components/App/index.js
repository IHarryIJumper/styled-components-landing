import React, { PureComponent } from "react";
import Loadable from "react-loadable";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { HMR } from "@pwa/preset-react";
import { Route, withRouter } from "react-router-dom";
import media from "@components/MediaQueries";

import Footer, {
  FOOTER_EXTENDED_SIZE,
  FOOTER_NORMAL_SIZE
} from "@components/Footer";
import Header from "@components/Header";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 200;
    src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_aZA3gnD_vx3rCs.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 800;
    src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'), url(https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_c5H3gnD_vx3rCs.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/L0x5DF4xlVMF-BfR8bXMIjhLq3-cXbKD.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    font-weight: 300;
    min-height: 100vh;
    font-family: ${props => props.theme.font.list};
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.lightTextColor};
    color: ${props => props.theme.darkTextColor};
  }

  a {
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  a:visited {
    color: ${props => props.theme.secondaryColor};
  }
`;

const AppContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
`;

const MainSection = styled.main`
  margin: 0 auto;
  position: relative;
  min-height: calc(55vh - 16px);
  z-index: 1;
  margin-bottom: ${FOOTER_EXTENDED_SIZE - FOOTER_NORMAL_SIZE}px;
  transition: margin 0.3s ease-out;
`;

const LoadingContainer = styled(({ ...props }) => (
  <div {...props}>Загрузка...</div>
))`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Route-Split Components
const loading = () => <LoadingContainer />;
const load = loader => Loadable({ loader, loading });

const Home = load(() => import("@pages/Home"));
const About = load(() => import("@pages/About"));

class App extends PureComponent {
  componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      this.props.history.listen(obj => {
        if (window.ga) ga.send("pageview", { dp: obj.pathname });
      });
    }
  }

  render() {
    return (
      <ThemeProvider
        theme={{
          lightTextColor: "#FCFCFC",
          darkTextColor: "#263238",
          primaryColor: "#73BDDD",
          secondaryColor: "#173753",
          transition: {
            slow: 500,
            medium: 300,
            fast: 100
          },
          radius: 2,
          font: {
            header: "Montserrat",
            list:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
          }
        }}
      >
        <AppContainer>
          <GlobalStyle />
          <Header />

          <MainSection>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </MainSection>

          <Footer />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default HMR(withRouter(App), module);
