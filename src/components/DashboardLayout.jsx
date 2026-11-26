import { NavLink, Outlet, useOutletContext } from "react-router";

function DashboardLayout() {
  const accountContext = useOutletContext();
  const getLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-2 transition-colors ${
      isActive
        ? "bg-[#6f152e] font-semibold text-[#fffaf3]"
        : "text-[#d9cbbb]/70 hover:bg-white/10 hover:text-[#eadbc7]"
    }`;

  return (
    <div className="min-h-full bg-[#090909] text-[#eadbc7]">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-[220px_1fr] md:py-10">
        <aside className="h-fit rounded-xl border border-white/10 bg-[#111010] p-4 shadow-sm">
          <p className="mb-3 px-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c8ae8d]">Account</p>
          <nav className="flex flex-col gap-2">
            <NavLink to="/dashboard" end className={getLinkClass}>Dashboard</NavLink>
            <NavLink to="/dashboard/profile" className={getLinkClass}>Profile</NavLink>
            <NavLink to="/dashboard/settings" className={getLinkClass}>Settings</NavLink>
          </nav>
        </aside>
        <main className="min-w-0"><Outlet context={accountContext} /></main>
      </div>
    </div>
  );
}

export default DashboardLayout;