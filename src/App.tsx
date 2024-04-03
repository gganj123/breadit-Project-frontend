import Router from './router/Router';
import './App.css';
// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <Router />
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
