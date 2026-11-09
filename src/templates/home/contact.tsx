"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_LIMITS, validateContact, type ContactFieldErrors } from "@/lib/contactValidation";

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  maxLength,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  maxLength: number;
}) => (
  <div>
    <label className="block text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg mb-1.5">
      {label} <span className="text-danger">*</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full border bg-surface rounded px-3 py-2.5 text-xs text-foreground placeholder:text-muted-fg/60 focus:outline-none transition-colors duration-200 ${
        error ? "border-danger focus:border-danger" : "border-border focus:border-primary-500"
      }`}
    />
    {error && (
      <p className="mt-1 text-[10px] text-danger">{error}</p>
    )}
  </div>
);

const SuccessState = () => (
  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
    <div className="w-12 h-12 rounded-full border border-primary-400/40 bg-primary-400/10 flex items-center justify-center">
      <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-primary-500" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div>
      <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg mb-2">Transmitted</p>
      <p className="text-sm font-semibold text-foreground">Message received.</p>
      <p className="mt-2 text-xs text-muted-fg max-w-xs">
        I&apos;ll be in touch within 24–48 hours. Check your inbox for a confirmation.
      </p>
    </div>
  </div>
);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const handleSubmit = async () => {
    const fieldErrors = validateContact(name, email, message);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("loading");
    setServerError("");

    const result = await sendContactEmail(name, email, message, website);

    if (result.success) {
      // The honeypot also returns success and sends nothing. Skip that case.
      if (!website) trackEvent("contact_submit");
      setStatus("success");
    } else {
      setStatus("error");
      setServerError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-surface-raised py-16 md:py-28 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left */}
          <div>
            <h2 className="text-[clamp(32px,3.5vw,48px)] font-black uppercase leading-tight tracking-tight text-foreground">
              Contact
              <br />
              Protocol
            </h2>
            <p className="mt-5 text-sm text-muted-fg leading-relaxed max-w-xs">
              Talk to me directly. I build and maintain GWAN, and I can help
              with integrating it, architecture questions and support.
            </p>

            <div className="mt-8 md:mt-10 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 w-7 h-7 rounded-sm border border-border flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 text-muted-fg" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M7 4v3.5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg">Response Time</p>
                  <p className="mt-0.5 text-xs text-foreground leading-relaxed">
                    Typically within 24–48 hours on working days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 w-7 h-7 rounded-sm border border-border flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 text-muted-fg" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.5h12v7.5a1 1 0 01-1 1H2a1 1 0 01-1-1V2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    <path d="M1 2.5l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg">I can help with</p>
                  <p className="mt-0.5 text-xs text-foreground leading-relaxed">
                    Integration support, bug reports,<br />and feature requests.
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mt-8 flex items-center gap-2">
              <a
                href="https://github.com/gwanfonseka/gwan-design-system"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 h-8 rounded-sm border border-border text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200 text-[10px] font-bold"
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/gwan-design-system"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 h-8 rounded-sm border border-border text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200 text-[10px] font-bold"
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0v16h16V0H0zm13.5 13.5H8V5H5.5v8.5H2.5V2.5h11v11z" />
                </svg>
                npm
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <SuccessState />
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Identity"
                    placeholder="Full Name"
                    value={name}
                    onChange={setName}
                    error={errors.name}
                    maxLength={CONTACT_LIMITS.name}
                  />
                  <InputField
                    label="Channel"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={setEmail}
                    error={errors.email}
                    maxLength={CONTACT_LIMITS.email}
                  />
                </div>

                <div>
                  <label className="block text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg mb-1.5">
                    Subject Matter <span className="text-danger">*</span>
                  </label>
                  <textarea
                    placeholder="Describe your technical requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={CONTACT_LIMITS.message}
                    rows={5}
                    className={`w-full border bg-surface rounded px-3 py-2.5 text-xs text-foreground placeholder:text-muted-fg/60 focus:outline-none transition-colors duration-200 resize-none ${
                      errors.message ? "border-danger focus:border-danger" : "border-border focus:border-primary-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[10px] text-danger">{errors.message}</p>
                  )}
                </div>

                {/* Honeypot: off-screen rather than display:none, which many bots skip. */}
                <div aria-hidden="true" className="absolute -left-[9999px]">
                  <label>
                    Website
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </label>
                </div>

                {serverError && (
                  <p className="text-[11px] text-danger">{serverError}</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full bg-foreground text-background text-[11px] font-bold tracking-[0.25em] uppercase py-4 rounded-sm hover:opacity-80 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Transmitting..." : "Transmit Data"}
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
