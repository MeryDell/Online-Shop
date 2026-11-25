import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"; 
import Settings from "./pages/Settings";

function App() {
  return (
    
    <div className="min-h-screen bg-gray-50">

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </main>

    </div>

  );
}

export default App;