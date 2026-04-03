const codeSnippet = `import { Button, Tag, Avatar } from '@gwan/core';
import { useTheme } from '@gwan/theming';

export default function Dashboard() {
  const { theme, tokens } = useTheme();

  return (
    <Layout tokens={tokens}>
      <Avatar
        name="Alex Chon"
        variant="initials"
      />
      <Tag type="success" label="Active" />
      <Button
        variant="primary"
        label="View Components"
      />
    </Layout>
  );
}`;

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 5h14M3 10h10M3 15h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M18.5 16.5l-1.5-1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Tree-shakeable Exports",
    desc: "Import only what you use. GWAN's modular architecture ensures your final bundle contains zero dead component code.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2L2 6v8l8 4 8-4V6l-8-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 6l8 4m0 0l8-4m-8 4v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Strict Type Architecture",
    desc: "Every prop, variant, and token is fully typed with TypeScript. Catch design-system misuse at compile time, not in production.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 6v4l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10H4M16 10h-2M10 4V2M10 18v-2"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Design Token Sync",
    desc: "CSS custom properties flow directly from your Figma tokens to production. One source of truth, zero drift between design and code.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="3"
          width="16"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6 17h8M10 14v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 8l2.5 2.5L13 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Accessibility by Default",
    desc: "Every component ships with ARIA attributes, keyboard navigation, and focus management built in — WCAG 2.1 AA out of the box.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="2"
          y="2"
          width="16"
          height="16"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "SSR & RSC Compatible",
    desc: "Built for the modern React ecosystem — components render seamlessly on the server, in streaming, and across React Server Component boundaries.",
  },
];

const ProductionFlow = () => {
  return (
    <section className="bg-primary-900 dark:bg-[#0e1410] py-16 md:py-28 px-5 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Header — right-aligned */}
        <div className="text-right">
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-black uppercase leading-tight tracking-tight text-primary-50">
            Optimised for
            <br />
            Production Flow
          </h2>
          <p className="mt-4 text-sm text-primary-400 leading-relaxed ml-auto max-w-md">
            Engineered to work seamlessly with modern meta-frameworks, ensuring
            your bundle stays light and your interactions stay fluid.
          </p>
        </div>

        {/* 2-col grid: code block + features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Code block */}
          <div className="bg-primary-800/50 border border-primary-700/40 rounded-xl overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-primary-700/40 bg-primary-800/60">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-[9px] font-mono tracking-[0.2em] text-primary-500 uppercase">
                dashboard/index.tsx
              </span>
            </div>
            {/* Code */}
            <pre className="p-4 md:p-6 font-mono text-[11px] md:text-[12px] leading-[1.8] text-primary-300 overflow-x-auto">
              <code>
                {codeSnippet.split("\n").map((line, i) => {
                  const indent = line.match(/^(\s+)/)?.[1]?.length ?? 0;
                  const trimmed = line.trimStart();
                  return (
                    <div key={i} className="flex">
                      <span className="select-none text-right mr-4 text-primary-600 shrink-0">
                        {i + 1}
                      </span>
                      <span style={{ paddingLeft: `${indent * 4}px` }}>
                        {trimmed.startsWith("import") ? (
                          <>
                            <span className="text-primary-500">import</span>{" "}
                            <span className="text-primary-200">
                              {trimmed.slice(7)}
                            </span>
                          </>
                        ) : trimmed.startsWith("export") ||
                          trimmed.startsWith("return") ||
                          trimmed.startsWith("const") ? (
                          <>
                            <span className="text-primary-500">
                              {trimmed.split(" ")[0]}
                            </span>
                            <span className="text-primary-300">
                              {" " + trimmed.split(" ").slice(1).join(" ")}
                            </span>
                          </>
                        ) : trimmed.startsWith("<") ||
                          trimmed.startsWith("/>") ||
                          trimmed === ")" ||
                          trimmed === "})" ||
                          trimmed === "}" ||
                          trimmed === ");" ? (
                          <span className="text-primary-400">{trimmed}</span>
                        ) : trimmed.includes('"') || trimmed.includes("'") ? (
                          <span className="text-amber-300/80">{trimmed}</span>
                        ) : (
                          <span>{trimmed}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4 md:gap-5">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl border border-primary-600/60 bg-primary-800/40 flex items-center justify-center text-primary-400">
                  {f.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-100">
                    {f.title}
                  </p>
                  <p className="mt-2 text-xs text-primary-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionFlow;
