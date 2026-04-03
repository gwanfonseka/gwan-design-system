const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background: concentric oval rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg
          className="absolute w-full h-full opacity-[0.07] dark:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="50%"
            cy="50%"
            rx="38%"
            ry="52%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary-700"
          />
          <ellipse
            cx="50%"
            cy="50%"
            rx="28%"
            ry="40%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary-700"
          />
          <ellipse
            cx="50%"
            cy="50%"
            rx="19%"
            ry="28%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary-700"
          />
          <ellipse
            cx="50%"
            cy="50%"
            rx="11%"
            ry="17%"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary-700"
          />
        </svg>

        {/* Central card outline */}
        <div className="absolute w-[90vw] max-w-130 h-55 sm:h-70 md:h-85 rounded-2xl border border-primary-300/25 dark:border-primary-700/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-5 sm:px-8">
        <h1 className="font-black uppercase leading-[0.92] tracking-tight">
          <span className="block text-[clamp(38px,8vw,96px)] text-foreground">
            Design at the
          </span>
          <span className="block text-[clamp(38px,8vw,96px)] text-primary-600 dark:text-primary-400">
            Speed of Thought
          </span>
        </h1>

        <p className="mt-6 md:mt-8 text-sm text-muted-fg leading-relaxed max-w-sm mx-auto">
          GWAN is a high-performance reactive component library engineered for
          developers who demand surgical precision and scalable aesthetics.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="/docs#installation"
            className="w-full sm:w-auto bg-foreground text-background text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm hover:opacity-80 transition-opacity duration-200 text-center"
          >
            Get Started
          </a>
          <a
            href="/components-library"
            className="w-full sm:w-auto border border-border text-foreground text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 rounded-sm hover:bg-surface-raised transition-colors duration-200 text-center"
          >
            Explore Components
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
