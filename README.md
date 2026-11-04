# Gwan Design System

![npm](https://img.shields.io/npm/v/gwan-design-system.svg)
![license](https://img.shields.io/npm/l/gwan-design-system)
![react](https://img.shields.io/badge/react-19-blue)

A reusable React component library built for **Next.js** projects. Pre-styled, fully typed, and dark mode ready — drop components into your app and ship faster.

**Website:** [gwan.dev](https://gwan.dev) &nbsp;|&nbsp; **GitHub:** [gwanfonseka/gwan-design-system](https://github.com/gwanfonseka/gwan-design-system)

---

## Installation

```bash
npm install gwan-design-system
# or
yarn add gwan-design-system
```

**Peer dependencies:** React 19+

---

## Setup

This library targets **Tailwind CSS v4**, which is configured in CSS. There is no `tailwind.config.ts`.

### 1. Install Tailwind CSS v4

```bash
npm install tailwindcss@^4 @tailwindcss/postcss
```

```js
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### 2. Add the stylesheet

Tailwind v4 finds class names in your own files automatically but skips `node_modules`, so point it at gwan-design-system with `@source`. The path is relative to the CSS file; from `src/app/globals.css` it is `../../node_modules/…`.

The package ships no CSS. Every token below is used by at least one component, so keep them all; change the values to your brand. The [Theme Generator](https://gwan.dev/themes) can produce the `:root`, `.dark` and primary-scale blocks for you.

```css
/* src/app/globals.css */
@import "tailwindcss";

/* GWAN's class names ship in its dist JavaScript. Tailwind skips node_modules,
   so point it there. The path is relative to this CSS file. */
@source "../../node_modules/gwan-design-system/dist";

/* Make dark: utilities follow the .dark class instead of the OS setting. */
@custom-variant dark (&:where(.dark, .dark *));

/* ─── Light theme ─────────────────────────── */
:root {
  --background: #f8f9f5;
  --foreground: #1c2218;

  --surface: #ffffff;
  --surface-raised: #eef2e8;
  --surface-overlay: #e3e9da;

  --border: #c4cdb8;
  --border-subtle: #d8dfce;

  --primary-default: #435240;
  --primary-default-fg: #f4f7f1;

  --muted-fg: #60705a;
  --accent: #0f766e;

  --success: #047857;
  --success-bg: #ecfdf5;
  --success-fg: #064e3b;

  --danger: #be123c;
  --danger-bg: #fff1f2;
  --danger-fg: #881337;

  --warning: #b45309;
  --warning-bg: #fffbeb;
  --warning-fg: #78350f;
}

/* ─── Dark theme ──────────────────────────── */
.dark {
  --background: #131a10;
  --foreground: #e2eada;

  --surface: #1c241a;
  --surface-raised: #252e22;
  --surface-overlay: #2d392a;

  --border: #3c4d38;
  --border-subtle: #2d392a;

  --primary-default: #adc09e;
  --primary-default-fg: #1c2218;

  --muted-fg: #9ea593;
  --accent: #2dd4bf;

  --success: #34d399;
  --success-bg: #022c1e;
  --success-fg: #a7f3d0;

  --danger: #fb7185;
  --danger-bg: #200a10;
  --danger-fg: #fecdd3;

  --warning: #fbbf24;
  --warning-bg: #1c1300;
  --warning-fg: #fde68a;
}

/* ─── Register the tokens as Tailwind colours ─ */
@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-surface: var(--surface);
  --color-surface-raised: var(--surface-raised);
  --color-surface-overlay: var(--surface-overlay);

  --color-border: var(--border);
  --color-border-subtle: var(--border-subtle);

  --color-primary-default: var(--primary-default);
  --color-primary-default-fg: var(--primary-default-fg);

  --color-muted-fg: var(--muted-fg);
  --color-accent: var(--accent);

  --color-success: var(--success);
  --color-success-bg: var(--success-bg);
  --color-success-fg: var(--success-fg);

  --color-danger: var(--danger);
  --color-danger-bg: var(--danger-bg);
  --color-danger-fg: var(--danger-fg);

  --color-warning: var(--warning);
  --color-warning-bg: var(--warning-bg);
  --color-warning-fg: var(--warning-fg);

  /* Primary scale: the same in light and dark mode */
  --color-primary-50: #f4f7f1;
  --color-primary-100: #e2eada;
  --color-primary-200: #c8d5be;
  --color-primary-300: #adc09e;
  --color-primary-400: #a4b496;
  --color-primary-500: #9ea593;
  --color-primary-600: #7e8c73;
  --color-primary-700: #60705a;
  --color-primary-800: #435240;
  --color-primary-900: #2c3629;
}
```

> The values above are the default gwan-design-system palette (Sage Green).

### Dark mode

Components switch to the dark tokens whenever an ancestor has the `dark` class, normally `<html>`. The library doesn't toggle it; your app does. In Next.js, [`next-themes`](https://github.com/pacocoursey/next-themes) with `attribute="class"` handles it, including the system preference.

### 3. Use a component

```tsx
"use client";

import { Button, BUTTON_VARIANTS } from "gwan-design-system";

export default function MyPage() {
  return (
    <Button
      variant={BUTTON_VARIANTS.PRIMARY}
      label="Get Started"
      onClick={() => console.log("clicked")}
    />
  );
}
```

---

## Components

**53 components** across actions, form controls, data display, navigation, content and layout, overlays, indicators and feedback. Try each one in the [component playground](https://gwan.dev/components-library).

The package doesn't add `"use client"` to its build, so:

> **`S`** — no hooks; renders in a React Server Component.
> **`H`** — no hooks, but takes event handlers (`onClick`, `onChange`…). It renders on the server, and needs a Client Component parent once you pass a handler.
> **`C`** — uses hooks or attaches its own event handlers; import it from a file marked `"use client"`.

### Actions

| Component | Type | Description |
| --------- | ---- | ----------- |
| `Button`  | `C`  | Primary, secondary and tertiary variants, three sizes, three corner styles, optional left/right icons |

### Form Controls

| Component         | Type | Description |
| ----------------- | ---- | ----------- |
| `Input`           | `C`  | Text input with label, error state, and an optional clear button |
| `TextArea`        | `H`  | Multi-line input with label, error state, and an optional clear button |
| `SelectDropdown`  | `C`  | Single-select dropdown with keyboard navigation, optional search and server-side search |
| `FilterDropdown`  | `C`  | Filter button that opens a panel you render; the panel gets a function to close it |
| `Checkbox`        | `C`  | Checkbox with label, three sizes and corner styles |
| `RadioButton`     | `C`  | Radio input; group several with a shared `name` and `selectedValue` |
| `Switch`          | `C`  | Toggle switch with label, description and three sizes |
| `DatePicker`      | `C`  | Calendar date picker with min/max dates, display formats and optional time selection |
| `FileUploader`    | `C`  | Drag-and-drop or click-to-upload, with a file list, type badges, size limits and remove |
| `ColorPicker`     | `C`  | Swatch, native colour input and hex field with preset colours |
| `MultiSelect`     | `C`  | Multi-option dropdown with chips, search and keyboard navigation |
| `SearchInput`     | `C`  | Search field with a debounced callback, clear button and loading state |
| `Slider`          | `C`  | Single-thumb or two-thumb range slider with sizes and an optional value display |
| `OtpInput`        | `C`  | n-digit code input with auto-advance, paste and masking |
| `TimePicker`      | `C`  | Scroll-column time picker, 12h or 24h, optional seconds |
| `DateRangePicker` | `C`  | Two-month calendar for picking a start and end date, with hover preview |

### Data Display

| Component          | Type | Description |
| ------------------ | ---- | ----------- |
| `Table`            | `S`  | Table driven by column definitions with a `render` function per column; optional stripes and row borders |
| `Pagination`       | `C`  | Previous/next controls with a page-size dropdown |
| `ProgressBar`      | `S`  | Progress bar with types, sizes, optional stripes and animation |
| `StatCard`         | `S`  | Metric tile with label, value, trend and icon |
| `CircularProgress` | `S`  | SVG ring progress with sizes, types and a percentage label |

### Navigation

| Component    | Type | Description |
| ------------ | ---- | ----------- |
| `NavBar`     | `C`  | Collapsible vertical side menu with sub-menus and avatar |
| `MenuBar`    | `C`  | Horizontal top bar with dropdowns, a More menu for overflow, a mobile menu and avatar |
| `Tabs`       | `C`  | Tab list and panel with underline, pill and boxed variants and arrow-key navigation; you control the active tab |
| `Breadcrumb` | `S`  | Breadcrumb trail with slash, chevron and dot separators |
| `Ellipsis`   | `C`  | Truncated text with the full text in a tooltip on hover |

### Content & Layout

| Component   | Type | Description |
| ----------- | ---- | ----------- |
| `Card`      | `S`  | Surface container with optional header and footer, variants and padding sizes |
| `Divider`   | `S`  | Horizontal or vertical separator, solid, dashed or dotted, with an optional label |
| `Banner`    | `S`  | Hero banner with title, subtitle and a background image or colour |
| `Carousel`  | `C`  | Auto-advancing slides built from Banner props |
| `Accordion` | `C`  | Collapsible sections, one or several open at a time |
| `TimeLine`  | `S`  | Vertical event timeline that adds a Pending step until the last event is finished or failed |
| `Stepper`   | `S`  | Horizontal or vertical steps; you set each step's status |
| `List`      | `H`  | Vertical list with icon, description, right slot and clickable rows |

### Overlays

| Component        | Type | Description |
| ---------------- | ---- | ----------- |
| `Modal`          | `C`  | Dialog in four sizes with focus trapping, Escape and backdrop to close |
| `Drawer`         | `C`  | Dialog panel that slides in from any edge, with an optional overlay; Escape closes it and focus stays inside |
| `Popover`        | `C`  | Panel anchored to a trigger, opened on click or hover |
| `CommandPalette` | `C`  | Searchable command launcher with groups, shortcuts and keyboard navigation |
| `DropdownMenu`   | `C`  | Action menu opened from a trigger, with icons, dividers and destructive items |
| `ContextMenu`    | `C`  | The same action menu, opened by right-clicking an area |

### Indicators

| Component     | Type | Description |
| ------------- | ---- | ----------- |
| `Tag`         | `S`  | Coloured label with solid and outline variants |
| `Chip`        | `C`  | Removable label with a × that calls `onClear` |
| `Badge`       | `S`  | Status badge: label, dot plus label, or dot only |
| `Avatar`      | `C`  | Picture or initials, with optional name and email, sizes and label position |
| `AvatarGroup` | `C`  | Overlapping avatars with a +N bubble that lists the rest |
| `Tooltip`     | `S`  | Positioned tooltip bubble; you control when it's visible |
| `Skeleton`    | `S`  | Loading placeholders for text lines, circles and rectangles |
| `Spinner`     | `S`  | Loading ring with sizes and colours |

### Feedback

| Component  | Type | Description |
| ---------- | ---- | ----------- |
| `Snackbar` | `S`  | Notification bar with type and icon; you decide when to show and hide it |
| `Alert`    | `C`  | Inline alert with solid, outline and subtle variants, optionally dismissible |
| `Callout`  | `S`  | Highlighted note: info, warning, tip or danger |
| `States`   | `S`  | Empty, success, error and loading screens with a built-in illustration or your own image |

---

## Icons

**216 SVG icon components**. They use `currentColor`, so they take the text colour, and they fill the element you put them in, so size them with that element.

```tsx
import { SearchSVG, BellSVG, SettingsSVG, UserSVG } from "gwan-design-system";

// Use like any React element — size and color via className
<div className="size-5 text-muted-fg"><SearchSVG /></div>
<div className="size-4 text-primary-default"><BellSVG /></div>
```

Browse the full icon catalogue at [gwan.dev/components-library?tab=Icons](https://gwan.dev/components-library?tab=Icons) — click any icon to get its import name, sizes preview, and ready-to-copy code snippet.

---

## Constants & Types

All components export their variant enums and TypeScript interfaces:

```ts
import {
  // Actions
  BUTTON_VARIANTS,
  // Form Controls
  CHECKBOX_SIZE,
  CHECKBOX_EDGE_STYLE,
  SWITCH_SIZE,
  // Data Display
  PROGRESS_BAR_TYPE,
  PROGRESS_BAR_SIZE,
  // Navigation
  TABS_VARIANT,
  BREADCRUMB_SEPARATOR,
  MENU_BAR_VARIANT,
  MENU_BAR_ITEMS_ALIGN,
  // Content & Layout
  CARD_VARIANT,
  CARD_PADDING,
  DIVIDER_ORIENTATION,
  DIVIDER_VARIANT,
  ACCORDION_VARIANT,
  STEPPER_ORIENTATION,
  STEPPER_VARIANT,
  STEP_STATUS,
  // Overlays
  MODAL_SIZE,
  DRAWER_PLACEMENT,
  DRAWER_SIZE,
  POPOVER_PLACEMENT,
  POPOVER_TRIGGER,
  // Indicators
  TAG_TYPE,
  BADGE_TYPE,
  BADGE_VARIANT,
  BADGE_SIZE,
  AVATAR_VARIANT,
  AVATAR_SIZE,
  AVATAR_LABEL_POSITION,
  TOOLTIP_POSITION,
  SKELETON_VARIANT,
  SPINNER_SIZE,
  SPINNER_COLOR,
  // Feedback
  SNACK_BAR_TYPE,
  ALERT_TYPE,
  ALERT_VARIANT,
  CALLOUT_TYPE,
  STATE_TYPE,
} from "gwan-design-system";

// TypeScript interfaces
import type {
  IButton,
  IInput,
  ITextArea,
  ISelectDropdown,
  ISelectDropdownOption,
  IFilter,
  IFilterOption,
  IFilterCategory,
  ICheckbox,
  IRadioButton,
  ISwitch,
  IDatePicker,
  IFileUploader,
  IColorPicker,
  ITable,
  ITableColumn,
  IPagination,
  IPaging,
  IProgressBar,
  INavBar,
  IMenuItem,
  IMenuBar,
  ITabs,
  ITabItem,
  IBreadcrumb,
  IBreadcrumbItem,
  IEllipsis,
  ICard,
  IDivider,
  IBanner,
  ICarousel,
  IAccordion,
  IAccordionItem,
  ITimeLine,
  ILog,
  IStepper,
  IStep,
  IModal,
  IDrawer,
  IPopover,
  ICommandPalette,
  ICommandItem,
  ITag,
  IChip,
  IBadge,
  IAvatar,
  ITooltip,
  ISkeleton,
  ISpinner,
  ISnackBar,
  IAlert,
  ICallout,
  IState,
  IStateBase,
} from "gwan-design-system";
```

---

## Features

- **Dark mode** — every component reads CSS variables that switch with a `.dark` class
- **TypeScript** — typed props, with enums for variants, sizes and types
- **Tailwind CSS v4** — styles are Tailwind utilities; theme tokens are plain CSS variables
- **Next.js App Router** — works in Client Components, and display components render in Server Components (see the table above)
- **Tree-shakeable** — ESM build with `"sideEffects": false`; importing only `Button` leaves about 2 KB of library code in the bundle
- **ESM + CJS** — ships both ES module and CommonJS builds

---

## Contributing

Contributions are welcome via pull requests.

- Direct pushes to `main` are not allowed
- All changes must go through a pull request with review

```bash
git checkout -b feature/my-feature
git push origin feature/my-feature
# then open a PR on GitHub
```

Fork the repo: [github.com/gwanfonseka/gwan-design-system](https://github.com/gwanfonseka/gwan-design-system)

---

## License

[MIT](./LICENSE) — © Nimesh Fonseka
