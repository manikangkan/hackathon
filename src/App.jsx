import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ChallengeDetails from "./components/ChallengeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/details/:id" element={<ChallengeDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
