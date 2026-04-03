const NextJsIcon = () => (
  <svg viewBox="0 0 180 180" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="90" r="90" style={{ fill: "var(--foreground)" }} />
    <path
      d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l72.885 95.461a90.304 90.304 0 0010.509-7.325z"
      fill="var(--background)"
    />
    <rect x="115" y="54" width="12" height="72" fill="var(--background)" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2.05" style={{ fill: "var(--muted-fg)" }} />
    <ellipse
      cx="12" cy="12"
      rx="10" ry="3.8"
      stroke="var(--muted-fg)" strokeWidth="1.2" fill="none"
    />
    <ellipse
      cx="12" cy="12"
      rx="10" ry="3.8"
      stroke="var(--muted-fg)" strokeWidth="1.2" fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12" cy="12"
      rx="10" ry="3.8"
      stroke="var(--muted-fg)" strokeWidth="1.2" fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

const RemixIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" style={{ fill: "var(--muted-fg)" }}>
    <path d="M17.127 18.81c.095.573.142 1.163.142 1.772H13.16a9.774 9.774 0 00-.106-1.32c-.285-1.394-1.001-2.118-2.363-2.118H5.038V13.8h5.83c1.838 0 2.702-.65 2.702-2.117 0-1.255-.864-2.02-2.701-2.02H5.038V6.51h6.194c3.896 0 5.832 1.95 5.832 5.051 0 2.086-1.021 3.478-2.702 4.144C15.984 16.217 16.895 17.408 17.127 18.81zM5.038 21.49v-2.698h4.04c.651 0 .793.468.793.856v1.842H5.038z" />
  </svg>
);

const GatsbyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" style={{ fill: "var(--muted-fg)" }}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4.03 12.3l7.67 7.67C7.36 19.56 4.44 16.31 4.03 12.3zm9.95 7.49L4.22 10.02C4.98 6.66 8.02 4.17 11.65 4.03L20 12.35c-.85 3.53-3.64 6.3-6.02 7.44zM17.5 17.5c-1.11 1.11-2.5 1.9-4.01 2.27L4.23 10.51A8 8 0 0117.5 17.5z" />
  </svg>
);

const frameworks = [
  {
    name: "Next.js",
    description: "Full support for App Router, Server Components, and SSR — the foundation GWAN was built on.",
    status: "live" as const,
    icon: <NextJsIcon />,
  },
  {
    name: "React",
    description: "Pure React compatibility with Vite and CRA — for teams building SPAs without a meta-framework.",
    status: "soon" as const,
    icon: <ReactIcon />,
  },
  {
    name: "Remix",
    description: "First-class Remix support with nested routing, server loaders, and edge-ready components.",
    status: "soon" as const,
    icon: <RemixIcon />,
  },
  {
    name: "Gatsby",
    description: "Static-site ready with Gatsby's data layer and image optimisation pipeline in mind.",
    status: "soon" as const,
    icon: <GatsbyIcon />,
  },
];

const FrameworkRoadmap = () => {
  return (
    <section className="bg-surface py-16 md:py-28 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-5 mb-14 md:mb-20">
          <div className="inline-flex items-center border border-primary-400/40 text-primary-600 dark:text-primary-400 text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-sm w-fit">
            Roadmap
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 className="text-[clamp(28px,4vw,52px)] font-black uppercase leading-tight tracking-tight text-foreground max-w-lg">
              Built for Next.js.
              <br />
              <span className="text-muted-fg">Expanding Beyond.</span>
            </h2>
            <p className="text-sm text-muted-fg leading-relaxed max-w-sm md:text-right">
              GWAN is currently 100% Next.js. But the ecosystem is bigger — React,
              Remix, and Gatsby support is actively on the roadmap.
            </p>
          </div>
        </div>

        {/* Framework cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className={`relative flex flex-col gap-5 p-6 rounded-xl border transition-all duration-300 ${
                fw.status === "live"
                  ? "bg-primary-900/5 dark:bg-primary-50/5 border-primary-default/40 dark:border-primary-600/40"
                  : "bg-surface-raised border-border"
              }`}
            >
              {/* Status badge */}
              <div className="flex items-start justify-between">
                <div
                  className={`flex items-center gap-1.5 text-[9px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-sm ${
                    fw.status === "live"
                      ? "bg-primary-default text-primary-default-fg"
                      : "bg-border text-muted-fg"
                  }`}
                >
                  {fw.status === "live" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-default-fg/70 animate-pulse" />
                  )}
                  {fw.status === "live" ? "Live" : "Coming Soon"}
                </div>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                fw.status === "live"
                  ? "bg-foreground dark:bg-primary-100/10"
                  : "bg-surface-overlay dark:bg-surface-overlay"
              }`}>
                {fw.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <p className={`text-sm font-black uppercase tracking-tight ${
                  fw.status === "live" ? "text-foreground" : "text-muted-fg"
                }`}>
                  {fw.name}
                </p>
                <p className="text-xs text-muted-fg leading-relaxed">
                  {fw.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-xs text-muted-fg leading-relaxed">
          Want to accelerate a specific framework?{" "}
          <a
            href="https://github.com/gwanfonseka/gwan-design-system/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          >
            Open an issue and let us know.
          </a>
        </p>

      </div>
    </section>
  );
};

export default FrameworkRoadmap;
