# Playground

The interactive preview, props table and generated code on each `/components-library` page. It's site-only: nothing here is exported from the package.

## Adding a component

1. Write `src/templates/component-library/<name>/<name>.story.ts` (`.tsx` if it contains JSX):

   ```ts
   import Badge, { BADGE_TYPE, type IBadge } from "@/components/badge";
   import { boolean, defineStory, enumOf, text } from "@/playground";

   export default defineStory<IBadge>({
     name: "Badge",                 // as exported from gwan-design-system
     component: Badge,
     args: { label: "Badge" },      // starting values
     argTypes: {
       label: { description: "Text inside the badge.", control: text(), group: "Content" },
       type: {
         description: "Semantic colour.",
         control: enumOf(BADGE_TYPE, "BADGE_TYPE"),
         defaultValue: BADGE_TYPE.DEFAULT,   // copy from the component's destructuring
         group: "Appearance",
       },
       // …one entry per prop
     },
   });
   ```

2. Render it from the template: `const Badges = () => <Playground story={story} />;`
3. Add the template to `menuGroups` in `src/templates/component-library/index.tsx`.

`argTypes` must list every prop, and `required: true` must match the interface. TypeScript fails the build otherwise. For components that extend native attributes, make those optional with `defineStory<IInput, keyof HTMLAttributes<HTMLInputElement>>`.

`stories.test.tsx` finds every `*.story.*` file and checks that it renders, lists its props, generates code, and survives toggling every boolean. Vitest caches `import.meta.glob`, so after adding a story locally run `rm -rf node_modules/.vitest-cache` if it isn't picked up.

## Controls

| Control | For | Stored as |
|---|---|---|
| `text()`, `textarea()` | strings | string |
| `number()`, `range(min, max)` | numbers | number |
| `boolean()` | booleans | boolean |
| `enumOf(ENUM, "ENUM")` | TypeScript enums; two values show as radios, more as a dropdown | enum value |
| `options([...])` | literal unions such as `"button" \| "submit"` | value |
| `icon()` | `ReactNode` icon slots | icon export name |
| `image()` | image URLs, from the samples in `/public` | URL |
| `color()`, `date()`, `time()` | colour, `Date`, time strings, using the library's pickers | string (dates as ISO) |
| `list()` | `string[]` | comma-separated string |
| `data({ Name: value }, code?)` | arrays, objects, React nodes, render functions | preset name |
| `action()` | callbacks, logged in the Actions panel | — |
| `action({ optional: true })` | callbacks whose presence changes behaviour (`onClear`, `onSearch`) | on/off |

`data()` presets are printed as code automatically. Pass `code` for values that can't be printed, such as render functions, optionally with `imports` and `setup`.

## Story options

- `bindings`: keeps a value prop in sync with its callback, e.g. `[{ prop: "value", event: "onChange" }]`. The generated code uses `useState`. Use `toValue` to read the callback's arguments and `alsoControls` + `toArgs` for callbacks that set several props.
- `visible: (args) => boolean` on an argType hides the row (and the prop) when it doesn't apply.
- `remountOn`: props the component only reads on mount (`defaultOpenKey`, `isCollapsed`).
- `layout: "fullwidth"`: for bars, tables and banners.
- `render` and `usage`: custom preview and code. `overlay.tsx` has helpers for overlays opened by rendering (`Triggered`, `overlayUsage`) or by an `open` prop (`openBinding`, `triggerUsage`).
- `note`: a line under the table, e.g. which native attributes are passed through.

Shared form-field entries (label, size, error state, classes) live in `src/templates/component-library/_shared/formField.ts`.
