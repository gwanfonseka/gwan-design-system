"use client";

import { useState, useEffect, useRef } from "react";
import DocsNavbar from "./navbar";
import DocsSidebar from "./sidebar";
import SharedFooter from "../shared/footer";
import GettingStarted from "./sections/getting-started";
import Usage from "./sections/usage";
import Customisation from "./sections/customisation";

const DocsTemplate = () => {
  const [activeId, setActiveId] = useState("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );
    const headings = document.querySelectorAll("h2[id], h3[id]");
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <DocsNavbar onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="pt-14.25 flex max-w-screen-2xl mx-auto">
        <DocsSidebar
          activeId={activeId}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onScrollTo={scrollTo}
        />

        <main ref={contentRef} className="flex-1 min-w-0 px-5 md:px-10 lg:px-16 py-10 max-w-3xl">
          <GettingStarted />
          <Usage />
          <Customisation />
        </main>
      </div>
      <SharedFooter />
    </div>
  );
};

export default DocsTemplate;
