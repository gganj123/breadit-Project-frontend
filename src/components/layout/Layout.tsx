import { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 62.5%;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    background-color:#fffdf4;
  }
  
  ::selection {
    background-color: #ffcb46;
    color: #fff;
  }

  .font_oleo {
    font-family: "Oleo Script", system-ui;
  }
`;

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
