const footerLinks = ["Collections", "Shopping Bag", "Dashboard", "Login/Register"];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060606]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 md:items-start md:gap-12">
        <div className="text-center md:text-left">
          <p className="font-serif text-3xl font-medium tracking-[0.14em] text-[#eadbc7]">L’OBSCUR<span className="text-[#7b1833]">.</span></p>
          <p className="mt-3 text-sm text-white/45">Created by MERY</p>
          <p className="mt-1 text-xs text-white/30">© 2026 L’Obscur</p>
          <div className="mt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c8ae8d]">Visit us</p>
            <p className="mt-2 text-sm text-white/65">Address to be added</p>
          </div>
        </div>

        <div className="md:justify-self-end">
          <nav aria-label="Footer navigation" className="flex flex-col items-center gap-3 text-sm text-white/55 md:items-end">
            {footerLinks.map((label) => <span key={label}>{label}</span>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
