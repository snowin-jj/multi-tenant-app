import { Routes, Route } from "react-router-dom";

import Authenticate from "./pages/Authenticate";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="authenticate" element={<Authenticate />} />
      </Route>
    </Routes>
  );
}
