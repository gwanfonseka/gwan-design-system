const steps = [
  {
    num: "01",
    title: "Open an Issue",
    desc: "Have a bug fix, enhancement, or new component idea? Start by opening an issue so the community can discuss it.",
    link: {
      label: "Browse Issues",
      href: "https://github.com/gwanfonseka/gwan-design-system/issues",
    },
  },
  {
    num: "02",
    title: "Branch & Build",
    desc: "Branch off from develop and implement your fix, enhancement, or feature. Keep commits focused and descriptive.",
    link: null,
  },
  {
    num: "03",
    title: "Push & Pull Request",
    desc: "Push your branch and open a pull request targeting develop. Describe your changes clearly for the reviewers.",
    link: null,
  },
  {
    num: "04",
    title: "Review & Merge",
    desc: "The maintainers will review your PR. If changes are requested, address the feedback and push updates — once approved, your contribution gets merged.",
    link: null,
  },
];

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className="w-3 h-3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L7 10"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{ fill: "var(--foreground)" }}
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.021C22 6.484 17.522 2 12 2z" />
  </svg>
);

const NpmIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.666h-1.335V10z" />
  </svg>
);

const CollectiveEvolution = () => {
  return (
    <section className="bg-surface-overlay py-16 md:py-28 px-5 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-flex items-center border border-primary-400/40 text-primary-600 dark:text-primary-400 text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-sm mb-8">
          Open Source
        </div>

        <h2 className="text-[clamp(32px,5vw,60px)] font-black uppercase tracking-tight text-foreground">
          Collective Evolution
        </h2>
        <p className="mt-4 text-sm text-muted-fg leading-relaxed max-w-xs mx-auto">
          GWAN is open source and community-driven. Every fix, idea, and
          contribution shapes the future of the library.
        </p>

        {/* Steps */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 text-left">
          {steps.map((step) => (
            <div key={step.num} className="group flex flex-col gap-3">
              <p className="text-[40px] md:text-[48px] font-black leading-none tracking-tight text-primary-200 dark:text-primary-800 group-hover:text-primary-300 dark:group-hover:text-primary-700 transition-colors duration-300">
                {step.num}
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                {step.title}
              </p>
              <p className="text-xs text-muted-fg leading-relaxed flex-1">
                {step.desc}
              </p>
              {step.link && (
                <a
                  href={step.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 mt-1"
                >
                  {step.link.label}
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Resource cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto w-full">
          {/* GitHub card */}
          <a
            href="https://github.com/gwanfonseka/gwan-design-system"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-start gap-5 p-6 md:p-8 rounded-xl border border-border bg-surface hover:border-foreground/30 dark:hover:border-white/20 transition-all duration-300 text-left"
          >
            {/* Subtle bg glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-foreground/[0.03] to-transparent pointer-events-none" />

            <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/8 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-neutral-200 dark:group-hover:bg-white/12 transition-colors duration-300">
              <GitHubIcon />
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">
                  github.com
                </span>
                <ExternalLinkIcon />
              </div>
              <p className="text-base font-black uppercase tracking-tight text-foreground">
                Source Code
              </p>
              <p className="text-xs text-muted-fg leading-relaxed">
                Explore the repository, browse open issues, and start
                contributing to the GWAN design system.
              </p>
            </div>
          </a>

          {/* npm card */}
          <a
            href="https://www.npmjs.com/package/gwan-design-system"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex items-start gap-5 p-6 md:p-8 rounded-xl border border-border bg-surface hover:border-danger-default/40 transition-all duration-300 text-left"
          >
            {/* Subtle red glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-danger-default/[0.04] to-transparent pointer-events-none" />

            <div className="shrink-0 w-12 h-12 rounded-xl bg-danger-default/8 flex items-center justify-center text-danger-default group-hover:bg-danger-default/12 transition-colors duration-300">
              <NpmIcon />
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-fg">
                  npmjs.com
                </span>
                <ExternalLinkIcon />
              </div>
              <p className="text-base font-black uppercase tracking-tight text-foreground">
                NPM Package
              </p>
              <p className="text-xs text-muted-fg leading-relaxed">
                Install the latest release, view version history, and check
                weekly download stats on npm.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectiveEvolution;
