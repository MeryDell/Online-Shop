import { useState } from "react";
import { useOutletContext, useSearchParams } from "react-router";

const inputClass = "mt-2 w-full rounded-xl border border-[#eadbc7]/15 bg-[#090909] px-4 py-3.5 text-sm text-[#f5eee5] outline-none transition placeholder:text-white/30 focus:border-[#c8ae8d]/70 focus:ring-2 focus:ring-[#c8ae8d]/10";

function LoginRegister() {
  const { loginUser, registerUser } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState(() => searchParams.get("mode") === "register" ? "register" : "login");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");

  function changeMode(nextMode) {
    setMode(nextMode);
    setSearchParams(nextMode === "register" ? { mode: "register" } : {});
    setSubmitted(false);
    setErrors({});
    setAuthError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = {};
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (mode === "register" && !String(formData.get("fullName") ?? "").trim()) {
      nextErrors.fullName = "Please enter your name.";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (password.length < 6) nextErrors.password = "Password must be at least 6 characters.";

    setErrors(nextErrors);
    setAuthError("");
    if (Object.keys(nextErrors).length === 0) {
      const result = isRegister
        ? registerUser(String(formData.get("fullName")), email)
        : loginUser(email);
      if (result) setAuthError(result);
      else setSubmitted(true);
    }
  }

  const isRegister = mode === "register";

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_15%_35%,rgba(111,21,46,0.2),transparent_38%),#090909] px-5 py-12 text-white sm:px-8 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full border border-[#d7c1a5]/10" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="max-w-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8ae8d]">The L’Obscur studio</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-[#eadbc7] sm:text-5xl">Welcome to<br /><span className="italic text-[#d7c1a5]">your little corner.</span></h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/50">Sign in to your account or create one to keep your L’Obscur experience close.</p>
          <div className="mt-9 space-y-4 border-t border-white/10 pt-6 text-sm text-white/55">
            <p className="flex items-center gap-3"><span className="text-[#d7c1a5]">✦</span> Keep your details close</p>
            <p className="flex items-center gap-3"><span className="text-[#d7c1a5]">✦</span> Return to pieces you love</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[#111010] p-6 shadow-2xl shadow-black/30 sm:p-8">
          <div className="mb-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8ae8d]">Your account</p>
            <h2 className="mt-3 font-serif text-3xl text-[#eadbc7]">{isRegister ? "Create an account" : "Welcome back."}</h2>
            <p className="mt-2 text-sm leading-6 text-white/45">{isRegister ? "A few details and you’re all set." : "Sign in to continue."}</p>
          </div>

          {submitted ? (
            <div role="status" className="rounded-xl border border-[#c8ae8d]/20 bg-[#0b0a0a] p-5">
              <p className="font-serif text-xl text-[#eadbc7]">{isRegister ? "Your account is ready." : "You’re signed in."}</p>
              <p className="mt-2 text-sm text-white/55">{isRegister ? "Welcome to L’Obscur." : "Welcome back to L’Obscur."}</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-xs text-[#d7c1a5] underline decoration-[#d7c1a5]/30 underline-offset-4 hover:text-white">Back to the form</button>
            </div>
          ) : (
            <div className="space-y-5">
              {authError && <p role="alert" className="rounded-xl border border-rose-300/20 bg-rose-950/20 px-4 py-3 text-sm text-rose-200">{authError}</p>}
              {isRegister && (
                <label className="block text-xs font-medium tracking-wide text-[#d7c1a5]">Full name
                  <input className={inputClass} type="text" name="fullName" autoComplete="name" placeholder="Your name" aria-invalid={Boolean(errors.fullName)} />
                  {errors.fullName && <span className="mt-1.5 block text-xs text-rose-300">{errors.fullName}</span>}
                </label>
              )}
              <label className="block text-xs font-medium tracking-wide text-[#d7c1a5]">Email address
                <input className={inputClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} />
                {errors.email && <span className="mt-1.5 block text-xs text-rose-300">{errors.email}</span>}
              </label>
              <label className="block text-xs font-medium tracking-wide text-[#d7c1a5]">Password
                <input className={inputClass} type="password" name="password" autoComplete={isRegister ? "new-password" : "current-password"} placeholder="At least 6 characters" aria-invalid={Boolean(errors.password)} />
                {errors.password && <span className="mt-1.5 block text-xs text-rose-300">{errors.password}</span>}
              </label>
              <button type="submit" className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#6f152e] px-5 py-4 text-sm font-semibold text-[#fffaf3] transition duration-200 hover:bg-[#86203c] focus:outline-none focus:ring-2 focus:ring-[#c8ae8d]/60">{isRegister ? "Create account" : "Log in"}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></button>
            </div>
          )}

          <p className="mt-7 border-t border-white/10 pt-5 text-center text-sm text-white/45">
            {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button type="button" onClick={() => changeMode(isRegister ? "login" : "register")} className="font-medium text-[#d7c1a5] underline decoration-[#d7c1a5]/30 underline-offset-4 transition hover:text-white">{isRegister ? "Log in" : "Register"}</button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginRegister;
