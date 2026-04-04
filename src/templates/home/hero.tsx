const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background: dot grid with radial fade */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg
          className="absolute w-full h-full opacity-[0.70] dark:opacity-[0.40]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="dotGrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="url(#waveGrad)" />
            </pattern>
            {/* Sweeping color wave — translates from -1440 to +1440 over 10s */}
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="-1440 0"
                to="1440 0"
                dur="10s"
                repeatCount="indefinite"
              />
              <stop offset="0%"   stopColor="#adc09e" /> {/* primary-300 sage */}
              <stop offset="25%"  stopColor="#14b8a6" /> {/* teal-500 */}
              <stop offset="50%"  stopColor="#34d399" /> {/* emerald-400 */}
              <stop offset="75%"  stopColor="#0f766e" /> {/* teal-700 / accent */}
              <stop offset="100%" stopColor="#adc09e" /> {/* back to sage */}
            </linearGradient>
            <radialGradient id="heroFade" cx="50%" cy="50%" r="55%">
              <stop offset="0%"  stopColor="white" stopOpacity="0" />
              <stop offset="65%" stopColor="white" stopOpacity="1" />
            </radialGradient>
            <mask id="heroMask">
              <rect width="100%" height="100%" fill="url(#heroFade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" mask="url(#heroMask)" />
        </svg>

        {/* Corner bracket accents */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.20] dark:opacity-[0.12] text-primary-600"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-left */}
          <line x1="5%" y1="6%" x2="11%" y2="6%" stroke="currentColor" strokeWidth="1.5" />
          <line x1="5%" y1="6%" x2="5%" y2="14%" stroke="currentColor" strokeWidth="1.5" />
          {/* Top-right */}
          <line x1="95%" y1="6%" x2="89%" y2="6%" stroke="currentColor" strokeWidth="1.5" />
          <line x1="95%" y1="6%" x2="95%" y2="14%" stroke="currentColor" strokeWidth="1.5" />
          {/* Bottom-left */}
          <line x1="5%" y1="94%" x2="11%" y2="94%" stroke="currentColor" strokeWidth="1.5" />
          <line x1="5%" y1="94%" x2="5%" y2="86%" stroke="currentColor" strokeWidth="1.5" />
          {/* Bottom-right */}
          <line x1="95%" y1="94%" x2="89%" y2="94%" stroke="currentColor" strokeWidth="1.5" />
          <line x1="95%" y1="94%" x2="95%" y2="86%" stroke="currentColor" strokeWidth="1.5" />
        </svg>
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
