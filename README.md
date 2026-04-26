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

This library targets **Tailwind CSS v4**. The setup differs from v3 — all theme tokens live in CSS, not `tailwind.config.ts`.

### 1. Configure Tailwind CSS

In your `tailwind.config.ts`, add the library's source to `content` so Tailwind scans component class names:

```ts
// tailwind.config.ts
import { join, dirname } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    join(
      dirname(require.resolve("gwan-design-system")),
      "**/*.{js,ts,jsx,tsx}",
    ),
  ],
};

export default config;
```

### 2. Import Tailwind and define your theme

In your global CSS file, import Tailwind v4 and declare all design tokens inside `@theme {}`. Components read from these CSS custom properties at runtime, so dark mode works automatically.

```css
/* globals.css */
@import "tailwindcss";

/* ─── Light theme ────────────────────────────────────────────── */
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
  --primary-muted: #adc09e;
  --primary-muted-fg: #2c3629;

  --muted: #e3e9da;
  --muted-fg: #60705a;

  --success: #059669;
  --success-bg: #ecfdf5;
  --success-fg: #064e3b;

  --danger: #e11d48;
  --danger-bg: #fff1f2;
  --danger-fg: #881337;

  --warning: #d97706;
  --warning-bg: #fffbeb;
  --warning-fg: #78350f;
}

/* ─── Dark theme ─────────────────────────────────────────────── */
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
  --primary-muted: #435240;
  --primary-muted-fg: #e2eada;

  --muted: #252e22;
  --muted-fg: #9ea593;

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

/* ─── Tailwind v4 theme registration ────────────────────────── */
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
  --color-primary-muted: var(--primary-muted);
  --color-primary-muted-fg: var(--primary-muted-fg);

  --color-muted: var(--muted);
  --color-muted-fg: var(--muted-fg);

  --color-success: var(--success);
  --color-success-bg: var(--success-bg);
  --color-success-fg: var(--success-fg);

  --color-danger: var(--danger);
  --color-danger-bg: var(--danger-bg);
  --color-danger-fg: var(--danger-fg);

  --color-warning: var(--warning);
  --color-warning-bg: var(--warning-bg);
  --color-warning-fg: var(--warning-fg);

  /* Primary scale */
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

> The values above match the default gwan-design-system palette (Sage Green). Swap them for your own brand colors — just keep the same token names.

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

**42+ components** across foundations, form controls, data display, navigation, overlays, and feedback.

> **`C` = Client Component** (uses React hooks — add `"use client"` to the importing file if needed)  
> **`S` = Server Component** (pure render, no hooks — safe to use in React Server Components)

### Actions

| Component | Type | Description                                          |
| --------- | ---- | ---------------------------------------------------- |
| `Button`  | `S`  | Primary, secondary, ghost, danger, and more variants |

### Form Controls

| Component        | Type | Description                                                |
| ---------------- | ---- | ---------------------------------------------------------- |
| `Input`          | `S`  | Text input with label, validation states, and clear button |
| `TextArea`       | `S`  | Multi-line text input with label and validation            |
| `SelectDropdown` | `C`  | Single-select dropdown with search                         |
| `FilterDropdown` | `C`  | Multi-category checkbox filter dropdown                    |
| `Checkbox`       | `S`  | Accessible checkbox with size and edge-style variants      |
| `RadioButton`    | `S`  | Accessible radio input                                     |
| `Switch`         | `S`  | Toggle switch with sizes and disabled state                |
| `DatePicker`     | `C`  | Calendar date picker with min/max and keyboard support     |
| `FileUploader`   | `C`  | Drag-and-drop and click-to-upload file input               |
| `ColorPicker`    | `C`  | Swatch + hex input with preset palette                     |

### Data Display

| Component     | Type | Description                                        |
| ------------- | ---- | -------------------------------------------------- |
| `Table`       | `S`  | Sortable, typed data table                         |
| `Pagination`  | `C`  | Page navigation controls                           |
| `ProgressBar` | `S`  | Striped and solid progress bars with size variants |

### Navigation

| Component    | Type | Description                                              |
| ------------ | ---- | -------------------------------------------------------- |
| `NavBar`     | `C`  | Vertical side navigation with sub-menus and avatar       |
| `MenuBar`    | `C`  | Horizontal top navigation bar with overflow and avatar   |
| `Tabs`       | `S`  | Tab panels with underline, pill, and boxed variants      |
| `Breadcrumb` | `S`  | Breadcrumb trail with slash, chevron, and dot separators |
| `Ellipsis`   | `C`  | Text overflow with tooltip                               |

### Content & Layout

| Component   | Type | Description                                                      |
| ----------- | ---- | ---------------------------------------------------------------- |
| `Card`      | `S`  | Surface container with optional header/footer slots and variants |
| `Divider`   | `S`  | Horizontal/vertical separator — solid, dashed, or dotted         |
| `Banner`    | `S`  | Page-level announcement banners                                  |
| `Carousel`  | `C`  | Image and content carousels                                      |
| `Accordion` | `C`  | Collapsible panels with single/multi-open modes                  |
| `TimeLine`  | `C`  | Vertical timeline / activity log                                 |
| `Stepper`   | `S`  | Horizontal and vertical step indicators                          |

### Overlays

| Component        | Type | Description                                           |
| ---------------- | ---- | ----------------------------------------------------- |
| `Modal`          | `C`  | Dialog modals in multiple sizes                       |
| `Drawer`         | `C`  | Slide-in panels from any edge                         |
| `Popover`        | `C`  | Anchored overlay with click or hover trigger          |
| `CommandPalette` | `C`  | Full-screen command launcher with keyboard navigation |

### Indicators

| Component  | Type | Description                                              |
| ---------- | ---- | -------------------------------------------------------- |
| `Tag`      | `S`  | Categorization tags with color variants                  |
| `Chip`     | `S`  | Small selectable/filterable labels                       |
| `Badge`    | `S`  | Dot, dot+label, and label-only status badges             |
| `Avatar`   | `C`  | User avatars with sizes, variants, and label positioning |
| `Tooltip`  | `S`  | Hover tooltips with configurable position                |
| `Skeleton` | `S`  | Loading placeholders for text, circles, and rects        |
| `Spinner`  | `S`  | Animated loading ring with size and color variants       |

### Feedback

| Component  | Type | Description                                            |
| ---------- | ---- | ------------------------------------------------------ |
| `Snackbar` | `S`  | Toast-style notifications                              |
| `Alert`    | `C`  | Inline alerts with solid, outline, and subtle variants |
| `Callout`  | `S`  | Inline info, warning, success, and error messages      |
| `States`   | `S`  | Empty, error, and loading state screens                |

---

## Icons

**146 SVG icon components** — all sized at 24×24, using `currentColor` so they inherit text color and respond to Tailwind color utilities.

```tsx
import { SearchSVG, BellSVG, SettingsSVG, UserSVG } from "gwan-design-system";

// Use like any React element — size and color via className
<div className="size-5 text-muted-fg"><SearchSVG /></div>
<div className="size-4 text-primary-default"><BellSVG /></div>
```

Browse the full icon catalogue at [gwan.dev/components?item=Icons](https://gwan.dev/components?item=Icons) — click any icon to get its import name, sizes preview, and ready-to-copy code snippet.

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

- **Dark mode** — Built-in dark mode support via `next-themes`
- **TypeScript** — Full type definitions for every component and prop
- **Tailwind CSS** — All styles use Tailwind utility classes, fully customizable
- **Next.js App Router** — Compatible with the App Router and React Server Components patterns
- **Accessible** — Built with semantic HTML and ARIA attributes
- **ESM + CJS** — Ships both ES module and CommonJS builds

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
