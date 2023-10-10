import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="" element={} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
