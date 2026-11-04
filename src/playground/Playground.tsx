"use client";

import {
  Component,
  createElement,
  Fragment,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { useSearchParams } from "next/navigation";
import CodeSnippet from "@/components/codeSnippet";
import ActionsLog, { formatCallArgs, type ILoggedAction } from "./ActionsLog";
import PropsTable from "./PropsTable";
import { generateCode } from "./codegen";
import { resolveProps } from "./resolve";
import { useArgs } from "./useArgs";
import type { AnyStory, Args, ArgTypeBase, ArgValue } from "./types";

/** Keeps a bad prop combination from taking down the whole page. */
class PreviewBoundary extends Component<
  { resetKey: string; children: ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidUpdate(prev: { resetKey: string }) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) this.setState({ error: null });
  }
  render() {
    if (this.state.error) {
      return (
        <p role="alert" className="text-xs text-danger-fg bg-danger-bg rounded-md px-3 py-2">
          This combination threw: {this.state.error.message}
        </p>
      );
    }
    return this.props.children;
  }
}

const Header = ({ children }: { children: ReactNode }) => (
  <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-muted-fg">{children}</span>
);

const ARGS_PARAM = "args";

/** Changed values only, so links stay short and defaults can change underneath them. */
const encodeArgs = (args: Args, initial: Args) => {
  const diff = Object.fromEntries(Object.entries(args).filter(([k, v]) => v !== initial[k]));
  return Object.keys(diff).length ? JSON.stringify(diff) : null;
};

/** Reads `?args=` back, keeping only known props with plain values. */
export const decodeArgs = (raw: string | null, argTypes: Record<string, unknown>): Args => {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([k, v]) => k in argTypes && (v === null || ["string", "number", "boolean"].includes(typeof v)),
      ),
    ) as Args;
  } catch {
    return {};
  }
};

const Playground = ({ story }: { story: AnyStory }) => {
  const idPrefix = useId();
  const searchParams = useSearchParams();
  // Null outside the app router (e.g. tests), though the type says otherwise.
  const [fromUrl] = useState(() =>
    decodeArgs((searchParams as URLSearchParams | null)?.get(ARGS_PARAM) ?? null, story.argTypes),
  );
  const { args, initial, setArgs, resetAll, isChanged, changedCount } = useArgs(story, fromUrl);
  const [log, setLog] = useState<ILoggedAction[]>([]);

  // Mirrors changed values into the address bar so the configuration can be shared.
  useEffect(() => {
    const url = new URL(window.location.href);
    const encoded = encodeArgs(args, initial);
    if (encoded) url.searchParams.set(ARGS_PARAM, encoded);
    else url.searchParams.delete(ARGS_PARAM);
    if (url.href !== window.location.href) window.history.replaceState(window.history.state, "", url);
  }, [args, initial]);

  const logAction = useCallback((name: string, callArgs: unknown[]) => {
    const time = new Date().toLocaleTimeString([], { hour12: false });
    const entryArgs = formatCallArgs(callArgs);
    setLog((prev) =>
      [{ id: (prev[0]?.id ?? -1) + 1, name, args: entryArgs, time }, ...prev].slice(0, 20),
    );
  }, []);

  const props = useMemo(
    () => resolveProps(story, args, logAction, setArgs),
    [story, args, logAction, setArgs],
  );
  const code = useMemo(() => {
    const generated = generateCode(story, args);
    return story.usage ? story.usage(generated) : generated;
  }, [story, args]);
  const argTypes = story.argTypes as Record<string, ArgTypeBase & { required?: boolean }>;
  const hasActions =
    Object.values(argTypes).some((a) => a.control.kind === "action") || (story.bindings?.length ?? 0) > 0;
  const fullWidth = story.layout === "fullwidth";

  const remountKey = (story.remountOn ?? []).map((k) => String(args[k])).join("|");
  const preview = (
    <Fragment key={remountKey}>
      {story.render
        ? story.render(props, { args, setArgs })
        : createElement(story.component as ComponentType<object>, props)}
    </Fragment>
  );

  return (
    <div className="flex flex-col gap-6">
      <section aria-label={`${story.name} playground`} className="border border-border rounded-xl">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 border-b border-border bg-surface rounded-t-xl">
          <Header>Playground</Header>

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              onClick={resetAll}
              disabled={changedCount === 0}
              className="h-6 px-2.5 rounded text-[10px] font-semibold text-muted-fg hover:text-foreground hover:bg-surface-raised disabled:opacity-40 disabled:hover:bg-transparent"
            >
              Reset all{changedCount > 0 && ` (${changedCount})`}
            </button>
          </div>
        </div>

        <div
          data-testid="playground-canvas"
          className={`flex min-h-40 bg-background text-foreground ${
            fullWidth ? "flex-col p-4" : "items-center justify-center px-6 py-10"
          }`}
        >
          <PreviewBoundary resetKey={JSON.stringify(args)}>{preview}</PreviewBoundary>
        </div>

        {hasActions && <ActionsLog entries={log} onClear={() => setLog([])} />}

        <div className="border-t border-border bg-surface rounded-b-xl">
          <PropsTable
            idPrefix={idPrefix}
            argTypes={argTypes}
            args={args}
            isChanged={isChanged}
            onChange={(key: string, value: ArgValue) => setArgs({ [key]: value })}
          />
          {story.note && (
            <p className="px-4 py-3 border-t border-border-subtle text-xs text-muted-fg">{story.note}</p>
          )}
        </div>
      </section>

      <CodeSnippet code={code} />
    </div>
  );
};

export default Playground;
