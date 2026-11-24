function Header({ cartCount }) {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v11h14V9M9 20v-7h6v7" />
        </>
      ),
    },
    {
      label: "About Us",
      href: "/about",
      icon: (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21a7 7 0 0 1 14 0" />
        </>
      ),
    },
    {
      label: "Collections",
      href: "#collections",
      icon: (
        <>
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="8" rx="1" />
          <rect x="3" y="13" width="8" height="8" rx="1" />
          <rect x="13" y="13" width="8" height="8" rx="1" />
        </>
      ),
    },
    {
      label: "Shopping Bag",
      href: "#products",
      icon: (
        <>
          <path d="M5 8h14l1 13H4L5 8Z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
        </>
      ),
      badge: cartCount,
    },
    {
      label: "Login / Register",
      href: "#loginRegister",
      icon: (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21a7 7 0 0 1 14 0M19 8v6m-3-3h6" />
        </>
      ),
    },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/95 text-white shadow-lg shadow-black/10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-1 px-4 py-4 sm:gap-6 sm:px-8">
        <h1 className="shrink-0 font-serif text-2xl font-medium tracking-[0.08em] text-[#eadbc7] sm:text-3xl sm:tracking-[0.12em]">
          L'OBSCUR<span className="text-[#7b1833]">.</span>
        </h1>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-0.5 text-[#d9cbbb]/70 sm:gap-2"
        >
          {links.map(({ label, href, icon, badge }) => {
            const isButton =
              label === "Collections" || label === "Shopping Bag";

            const content = (
              <>
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full transition group-hover:bg-white/10 group-hover:text-[#eadbc7] sm:h-10 sm:w-10">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4.25 w-4.25 sm:h-4.5 sm:w-4.5"
                  >
                    {icon}
                  </svg>

                  {badge !== undefined && (
                    <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#eadbc7] px-1 text-[9px] font-bold leading-none text-[#1a1012] sm:text-[10px]">
                      {badge}
                    </span>
                  )}
                </span>

                <span className="pointer-events-none absolute left-1/2 top-full z-30 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#171314] px-2.5 py-1.5 text-[11px] text-[#eadbc7] opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  {label}
                </span>
              </>
            );

            const className =
              "group relative flex min-w-7 flex-col items-center gap-1 rounded-md px-0.5 py-1 text-[#d9cbbb]/70 focus:outline-none focus:ring-2 focus:ring-[#a83a58] sm:min-w-10 sm:px-1";

            if (isButton) {
              return (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className={className}
                >
                  {content}
                </button>
              );
            }

            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={className}
              >
                {content}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;