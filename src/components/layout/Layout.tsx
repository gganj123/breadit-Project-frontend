import { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const GlobalStyle = createGlobalStyle`
  
  html,
  body {    
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-size: 62.5%;
    color:#333;
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
    background-color:#fdfaf7;
    font-size:1.6rem;
  }
  
  ::selection {
    background-color: #ffcb46;
    color: #fff;
  }

  button {
    font-family: "Noto Sans KR", sans-serif;
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
