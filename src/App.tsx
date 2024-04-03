import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <Header />
      <Router />
      <Footer />
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
