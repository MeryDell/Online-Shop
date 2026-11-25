import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import MainLayout from "./components/MainLayout";
import LoginRegister from "./pages/LoginRegister";
import ShoppingBag from "./pages/ShoppingBag";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/shopping-bag" element={<ShoppingBag />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;