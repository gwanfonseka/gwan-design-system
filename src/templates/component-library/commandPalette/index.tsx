import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import Button from "@/components/button";
import CommandPalette from "@/components/commandPalette";
import { useEffect, useState } from "react";

const commandItems = [
  {
    id: "home",
    label: "Go to Home",
    description: "Navigate to the landing page",
    group: "Navigation",
    shortcut: ["⌘", "H"],
    onSelect: () => {},
  },
  {
    id: "docs",
    label: "Open Documentation",
    description: "Browse the component API docs",
    group: "Navigation",
    shortcut: ["⌘", "D"],
    onSelect: () => {},
  },
  {
    id: "components",
    label: "Component Library",
    description: "Explore all available components",
    group: "Navigation",
    shortcut: ["⌘", "K"],
    onSelect: () => {},
  },
  {
    id: "theme-dark",
    label: "Switch to Dark Mode",
    description: "Change the colour theme",
    group: "Appearance",
    onSelect: () => {},
  },
  {
    id: "theme-light",
    label: "Switch to Light Mode",
    description: "Change the colour theme",
    group: "Appearance",
    onSelect: () => {},
  },
  {
    id: "copy-npm",
    label: "Copy npm install command",
    description: "npm install gwan-design-system",
    group: "Quick Actions",
    shortcut: ["⌘", "C"],
    onSelect: () => {},
  },
  {
    id: "github",
    label: "Open GitHub Repository",
    description: "View source on GitHub",
    group: "Quick Actions",
    onSelect: () => {},
  },
];

const CommandPaletteTemplate = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const codeExample = `import { CommandPalette } from "gwan-design-system";
import { useEffect, useState } from "react";

const commands = [
  {
    id: "home",
    label: "Go to Home",
    description: "Navigate to the landing page",
    group: "Navigation",
    shortcut: ["⌘", "H"],
    onSelect: () => router.push("/"),
  },
  // ... more commands
];

const Example = () => {
  const [open, setOpen] = useState(false);

  // Optional: bind ⌘K to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <Button label="Open Command Palette" onClick={() => setOpen(true)} />

      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        items={commands}
        placeholder="Type a command or search..."
      />
    </>
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-3">
        <Button label="Open Command Palette" onClick={() => setOpen(true)} />
        <p className="text-xs text-muted-fg">or press <kbd className="px-1.5 py-0.5 rounded border border-border font-mono text-[10px]">⌘K</kbd></p>
      </div>
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        items={commandItems}
      />
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-3 py-4">
        <Button label="Open Command Palette" onClick={() => setOpen(true)} />
        <p className="text-xs text-muted-fg">
          Keyboard shortcut: <kbd className="px-1.5 py-0.5 rounded border border-border font-mono text-[10px]">⌘K</kbd> / <kbd className="px-1.5 py-0.5 rounded border border-border font-mono text-[10px]">Ctrl+K</kbd>
        </p>
      </div>
      <CommandPalette
        open={open}
        onClose={() => setOpen(false)}
        items={commandItems}
      />
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default CommandPaletteTemplate;
