import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import MainLayout from "./components/MainLayout";
import LoginRegister from "./pages/LoginRegister";

import { Snowfall } from "falling-snow/react";
function App({on, flake, count, wind }) {
  return (
    <>
    
       

      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
    <Snowfall/>
    
    </>
  );
}

export default App;
