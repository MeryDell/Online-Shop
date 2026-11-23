import { useState } from "react";

function ContactForm() {
  const [data, setData] = useState({ fullName: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};

    if (!data.fullName.trim()) nextErrors.fullName = "Please enter your name.";
    if (!data.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.message.trim()) nextErrors.message = "Please write a message.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      console.log(data);
    }
  }

  const inputStyle =
    "mt-2 w-full rounded-xl border border-[#eadbc7]/15 bg-black/30 px-4 py-3.5 text-sm text-[#f5eee5] outline-none transition placeholder:text-white/30 focus:border-[#c8ae8d]/70 focus:ring-2 focus:ring-[#c8ae8d]/10";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-[#111010] p-6 shadow-2xl shadow-black/30 sm:p-8"
    >
      <div className="mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8ae8d]">
          A note to our studio
        </p>
        <h2 className="mt-3 font-serif text-3xl text-[#eadbc7]">
          We’d love to hear from you.
        </h2>
        <p className="mt-2 text-sm leading-6 text-white/45">
          Leave us a message and our team will be in touch.
        </p>
      </div>

      {submitted ? (
        <div
          role="status"
          className="rounded-xl border border-[#c8ae8d]/20 bg-[#c8ae8d]/5 p-5"
        >
          <p className="font-serif text-xl text-[#eadbc7]">
            Thank you, {data.fullName.split(" ")[0]}.
          </p>
          <p className="mt-2 text-sm text-white/55">
            Your message has been received.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          <label className="block text-xs font-medium tracking-wide text-[#d7c1a5]">
            Full name
            <input
              className={inputStyle}
              type="text"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={Boolean(errors.fullName)}
            />
            {errors.fullName && (
              <span className="mt-1.5 block text-xs text-rose-300">
                {errors.fullName}
              </span>
            )}
          </label>

          <label className="block text-xs font-medium tracking-wide text-[#d7c1a5]">
            Email address
            <input
              className={inputStyle}
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <span className="mt-1.5 block text-xs text-rose-300">
                {errors.email}
              </span>
            )}
          </label>

          <label className="block text-xs font-medium tracking-wide text-[#d7c1a5]">
            Your message
            <textarea
              className={`${inputStyle} min-h-36 resize-y`}
              name="message"
              value={data.message}
              onChange={handleChange}
              placeholder="How can we help?"
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && (
              <span className="mt-1.5 block text-xs text-rose-300">
                {errors.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#6f152e] px-5 py-4 text-sm font-semibold text-[#fffaf3] transition duration-200 hover:bg-[#86203c] focus:outline-none focus:ring-2 focus:ring-[#c8ae8d]/60"
          >
            Send your message
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;