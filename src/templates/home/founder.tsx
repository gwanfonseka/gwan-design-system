"use client";

const teamInitials = ["A", "S", "R", "N"];

const Founder = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 items-stretch shadow-sm">
          {/* Portrait */}
          <div className="sm:shrink-0 w-full sm:w-36 rounded-xl overflow-hidden bg-primary-800 relative flex flex-row sm:flex-col items-center justify-between sm:justify-between py-4 px-6 sm:px-0 gap-4 sm:gap-0 min-h-20 sm:min-h-0">
            <div className="flex items-start justify-center sm:flex-1">
              <img
                src="/images/founder.png"
                alt="Nimesh Fonseka"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-primary-500/50"
              />
            </div>
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-primary-500">
              Founder
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            {/* <div> */}
            {/* Label */}
            <div className="inline-flex w-fit items-center border border-primary-400/40 text-primary-600 dark:text-primary-400 text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-sm mb-4">
              Founder Statement
            </div>

            <a
              href="https://nimesh.fly.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5"
            >
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                Nimesh Fonseka
              </h3>
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
            </a>

            <blockquote className="mt-3 text-sm text-muted-fg leading-relaxed">
              &ldquo;Our objective isn&rsquo;t just to provide components, but
              to provide a cohesive language for the next generation of digital
              experiences. Precision is our baseline.&rdquo;
            </blockquote>
            {/* </div> */}

            {/* Team row */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {teamInitials.map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-surface bg-primary-700 flex items-center justify-center text-[10px] font-bold text-primary-100"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/gwanfonseka/gwan-design-system/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] font-semibold tracking-[0.22em] uppercase text-muted-fg hover:text-foreground transition-colors duration-200 underline underline-offset-2"
              >
                Awesome engineers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
