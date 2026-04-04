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
      "**/*.{js,ts,jsx,tsx}"
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

**38+ components** across foundations, form controls, data display, navigation, overlays, and feedback.

### Actions
| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, danger, and more variants |

### Form Controls
| Component | Description |
|-----------|-------------|
| `Input` | Text input with label, validation states, and clear button |
| `TextArea` | Multi-line text input with label and validation |
| `SelectDropdown` | Single-select dropdown with search |
| `FilterDropdown` | Multi-category checkbox filter dropdown |
| `Checkbox` | Accessible checkbox with size and edge-style variants |
| `RadioButton` | Accessible radio input |
| `Switch` | Toggle switch with sizes and disabled state |
| `DatePicker` | Calendar date picker with min/max and keyboard support |
| `FileUploader` | Drag-and-drop and click-to-upload file input |
| `ColorPicker` | Swatch + hex input with preset palette |

### Data Display
| Component | Description |
|-----------|-------------|
| `Table` | Sortable, typed data table |
| `Pagination` | Page navigation controls |
| `ProgressBar` | Striped and solid progress bars with size variants |

### Navigation
| Component | Description |
|-----------|-------------|
| `NavBar` | Responsive top navigation bar |
| `Tabs` | Tab panels with underline, pill, and boxed variants |
| `Breadcrumb` | Breadcrumb trail with slash, chevron, and dot separators |
| `Ellipsis` | Text overflow with tooltip |

### Content & Layout
| Component | Description |
|-----------|-------------|
| `Banner` | Page-level announcement banners |
| `Carousel` | Image and content carousels |
| `Accordion` | Collapsible panels with single/multi-open modes |
| `TimeLine` | Vertical timeline / activity log |
| `Stepper` | Horizontal and vertical step indicators |

### Overlays
| Component | Description |
|-----------|-------------|
| `Modal` | Dialog modals in multiple sizes |
| `Drawer` | Slide-in panels from any edge |
| `Popover` | Anchored overlay with click or hover trigger |
| `CommandPalette` | Full-screen command launcher with keyboard navigation |

### Indicators
| Component | Description |
|-----------|-------------|
| `Tag` | Categorization tags with color variants |
| `Chip` | Small selectable/filterable labels |
| `Badge` | Dot, dot+label, and label-only status badges |
| `Avatar` | User avatars with multiple variants |
| `Tooltip` | Hover tooltips with configurable position |
| `Skeleton` | Loading placeholders for text, circles, and rects |

### Feedback
| Component | Description |
|-----------|-------------|
| `Snackbar` | Toast-style notifications |
| `Alert` | Inline alerts with solid, outline, and subtle variants |
| `Callout` | Inline info, warning, success, and error messages |
| `States` | Empty, error, and loading state screens |

### Foundations
| Component | Description |
|-----------|-------------|
| `Icons` | 100+ SVG icon components |

---

## Constants & Types

All components export their variant enums and TypeScript interfaces:

```ts
import {
  // Actions
  BUTTON_VARIANTS,          // PRIMARY | SECONDARY | GHOST | DANGER | ...
  // Form Controls
  CHECKBOX_SIZE, CHECKBOX_EDGE_STYLE,
  SWITCH_SIZE,
  // Data Display
  PROGRESS_BAR_TYPE, PROGRESS_BAR_SIZE,
  // Navigation
  TABS_VARIANT,
  BREADCRUMB_SEPARATOR,
  // Content & Layout
  ACCORDION_VARIANT,
  STEPPER_ORIENTATION, STEPPER_VARIANT, STEP_STATUS,
  // Overlays
  MODAL_SIZE,
  DRAWER_PLACEMENT, DRAWER_SIZE,
  POPOVER_PLACEMENT, POPOVER_TRIGGER,
  // Indicators
  TAG_TYPE,
  BADGE_TYPE, BADGE_VARIANT, BADGE_SIZE,
  AVATAR_VARIANT,
  TOOLTIP_POSITION,
  SKELETON_VARIANT,
  // Feedback
  SNACK_BAR_TYPE,
  ALERT_TYPE, ALERT_VARIANT,
  CALLOUT_TYPE,
  STATE_TYPE,
} from "gwan-design-system";

// TypeScript interfaces
import type {
  IButton,
  IInput, ITextArea, ISelectDropdown, ISelectDropdownOption,
  IFilter, IFilterOption, IFilterCategory,
  ICheckbox, IRadioButton, ISwitch, IDatePicker, IFileUploader, IColorPicker,
  ITable, ITableColumn, IPagination, IPaging, IProgressBar,
  INavBar, IMenuItem, ITabs, ITabItem, IBreadcrumb, IBreadcrumbItem, IEllipsis,
  IBanner, ICarousel, IAccordion, IAccordionItem, ITimeLine, ILog, IStepper, IStep,
  IModal, IDrawer, IPopover, ICommandPalette, ICommandItem,
  ITag, IChip, IBadge, IAvatar, ITooltip, ISkeleton,
  ISnackBar, IAlert, ICallout, IState, IStateBase,
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
