import { createGlobalStyle } from 'styled-components';
import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();

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

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
