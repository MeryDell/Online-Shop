import { Link, useOutletContext } from "react-router";

function Profile() {
  const { currentUser, logoutUser } = useOutletContext();

  if (!currentUser) {
    return (
      <section className="rounded-xl border border-white/10 bg-[#111010] p-6 shadow-sm sm:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8ae8d]">My account</p>
        <h2 className="mt-3 font-serif text-2xl font-medium text-[#eadbc7]">My Profile</h2>
        <div className="mt-7 rounded-xl border border-white/10 bg-[#090909] p-5 sm:p-6">
          <p className="text-sm leading-6 text-white/65">You are not logged in. Please register or log in to view your data.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/loginRegister?mode=register" className="rounded-lg bg-[#6f152e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8b1d3c]">Register</Link>
            <Link to="/loginRegister" className="rounded-lg border border-white/15 px-5 py-2.5 text-sm text-[#eadbc7] transition hover:bg-white/5">Login</Link>
          </div>
        </div>
      </section>
    );
  }

  const initials = currentUser.fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  return (
    <section className="rounded-xl border border-white/10 bg-[#111010] p-6 shadow-sm sm:p-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8ae8d]">My account</p>
      <h2 className="mt-3 font-serif text-2xl font-medium text-[#eadbc7]">My Profile</h2>
      <div className="mt-7 flex flex-col gap-5 rounded-xl border border-white/10 bg-[#090909] p-5 sm:flex-row sm:items-center sm:p-6">
        <div aria-label={`${currentUser.fullName} profile icon`} className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#d7c1a5]/30 bg-[#6f152e]/25 font-serif text-2xl text-[#eadbc7] shadow-[0_0_35px_rgba(111,21,46,0.18)]">
          {initials || <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-9 w-9"><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></svg>}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Name</p>
          <p className="mt-1 break-words font-serif text-xl text-[#eadbc7]">{currentUser.fullName}</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/40">Email address</p>
          <p className="mt-1 break-all text-sm text-white/70">{currentUser.email}</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-white/35">Your password is private and is never shown here.</p>
      <button type="button" onClick={logoutUser} className="mt-6 rounded-lg border border-white/15 px-5 py-2.5 text-sm text-[#eadbc7] transition hover:border-[#7b1833] hover:bg-[#6f152e]/20">Log out</button>
    </section>
  );
}

export default Profile;
