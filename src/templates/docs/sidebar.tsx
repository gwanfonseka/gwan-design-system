import { navSections } from "./nav-config";

const DocsSidebar = ({
  activeId,
  open,
  onClose,
  onScrollTo,
}: {
  activeId: string;
  open: boolean;
  onClose: () => void;
  onScrollTo: (id: string) => void;
}) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={onClose} />
      )}
      <aside
        className={`
          fixed md:sticky top-14.25 left-0 z-50 md:z-auto
          h-[calc(100vh-57px)]
          w-64 md:w-56 lg:w-64 shrink-0
          bg-background md:bg-transparent border-r border-border
          overflow-y-auto py-8 px-5
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {navSections.map((section) => (
          <div key={section.group} className="mb-6">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-muted-fg mb-2 px-2">
              {section.group}
            </p>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onScrollTo(item.id)}
                  className={`text-left text-sm px-3 py-1.5 rounded-lg transition-colors duration-150 w-full ${
                    activeId === item.id
                      ? "bg-primary-100 dark:bg-primary-900/40 text-foreground font-semibold"
                      : "text-muted-fg hover:text-foreground hover:bg-surface-raised"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>
    </>
  );
};

export default DocsSidebar;
