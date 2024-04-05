import { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&display=swap');
  
  html,
  body {
    font-size: 62.5%;
  } 

  html {
    overflow-x:hidden;
  }

  html::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.8);
    width: 1.2rem;
  }

  html::-webkit-scrollbar-thumb {
    background-color: #575757;
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

const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
