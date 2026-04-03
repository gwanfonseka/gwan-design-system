"use client";

import { useState } from "react";

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <label className="block text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg mb-1.5">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-border bg-surface rounded px-3 py-2.5 text-xs text-foreground placeholder:text-muted-fg/60 focus:outline-none focus:border-primary-500 transition-colors duration-200"
    />
  </div>
);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
              Consult with our engineering team for custom architectural
              guidance or enterprise support plans.
            </p>

            <div className="mt-8 md:mt-10 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 w-7 h-7 rounded-sm border border-border flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    className="w-3 h-3 text-muted-fg"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 5.5V13h4V9h4v4h4V5.5L7 1z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg">
                    HQ / Lab
                  </p>
                  <p className="mt-0.5 text-xs text-foreground leading-relaxed">
                    Innovation Block 12, Level 4<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 w-7 h-7 rounded-sm border border-border flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    className="w-3 h-3 text-muted-fg"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="3"
                      width="12"
                      height="8"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M1 4l6 4 6-4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg">
                    Direct Link
                  </p>
                  <p className="mt-0.5 text-xs text-foreground">
                    support@gwan.architect
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-2">
              {["𝕏", "in"].map((icon) => (
                <button
                  key={icon}
                  className="w-8 h-8 rounded-sm border border-border text-muted-fg hover:text-foreground hover:border-foreground transition-colors duration-200 text-xs font-bold flex items-center justify-center"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Identity"
                placeholder="Full Name"
                value={name}
                onChange={setName}
              />
              <InputField
                label="Channel"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={setEmail}
              />
            </div>

            <div>
              <label className="block text-[9px] font-bold tracking-[0.25em] uppercase text-muted-fg mb-1.5">
                Subject Matter
              </label>
              <textarea
                placeholder="Describe your technical requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full border border-border bg-surface rounded px-3 py-2.5 text-xs text-foreground placeholder:text-muted-fg/60 focus:outline-none focus:border-primary-500 transition-colors duration-200 resize-none"
              />
            </div>

            <button className="w-full bg-foreground text-background text-[11px] font-bold tracking-[0.25em] uppercase py-4 rounded-sm hover:opacity-80 transition-opacity duration-200">
              Transmit Data
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
