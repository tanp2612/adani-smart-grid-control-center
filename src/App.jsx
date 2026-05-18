import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Outages from "./pages/Outages";
import Feeders from "./pages/Feeders";
import Complaints from "./pages/Complaints";
import Analytics from "./pages/Analytics";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="outages" element={<Outages />} />
          <Route path="feeders" element={<Feeders />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;