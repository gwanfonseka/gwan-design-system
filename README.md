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

### 1. Configure Tailwind CSS

Add the library's source to your Tailwind `content` paths so component styles are included in your build:

```ts
// tailwind.config.ts
import { join, dirname } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    join(
      dirname(require.resolve("gwan-design-system")),
      "**/*.{js,ts,jsx,tsx,mdx}"
    ),
  ],
  // ...
};
```

### 2. Define your theme colors

Components reference a consistent color palette. Extend your Tailwind theme with these tokens:

```ts
theme: {
  extend: {
    colors: {
      primary: {
        50:  "#F2F3EE",
        100: "#E1E3DA",
        200: "#D0D3C6",
        300: "#BEC3B2",
        400: "#ADB39E",
        500: "#9EA593",
        600: "#8C9382",
        700: "#787D6E",
        800: "#64675A",
        900: "#505146",
      },
      // also define: neutral, green, red, blue, yellow
    },
  },
},
```

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

| Component | Description |
|-----------|-------------|
| `Avatar` | User avatars with multiple variants |
| `Banner` | Page-level announcement banners |
| `Button` | Primary, secondary, ghost, and more variants |
| `Callout` | Inline info, warning, success, and error messages |
| `Carousel` | Image and content carousels |
| `Checkbox` | Accessible checkbox input |
| `Chip` | Small selectable/filterable labels |
| `Ellipsis` | Text overflow with tooltip |
| `FileUploader` | Drag-and-drop and click-to-upload file input |
| `FilterDropdown` | Multi-category filter dropdown |
| `Input` | Text input with label and validation states |
| `Modal` | Dialog modals in multiple sizes |
| `NavBar` | Responsive top navigation bar |
| `Pagination` | Page navigation controls |
| `RadioButton` | Accessible radio input group |
| `SelectDropdown` | Single-select dropdown |
| `Snackbar` | Toast-style notifications |
| `States` | Empty, error, and loading state screens |
| `Table` | Sortable, typed data table |
| `Tag` | Categorization tags with color variants |
| `TimeLine` | Vertical timeline / activity log |
| `Tooltip` | Hover tooltips with configurable position |
| `Icons` | 100+ SVG icon components |

---

## Constants & Types

All components export their variant enums and TypeScript types:

```ts
import {
  BUTTON_VARIANTS,   // PRIMARY | SECONDARY | GHOST | DANGER | ...
  CALLOUT_TYPE,      // INFO | WARNING | SUCCESS | ERROR
  AVATAR_VARIANT,    // CIRCLE | SQUARE
  MODAL_SIZE,        // SM | MD | LG
  SNACK_BAR_TYPE,    // SUCCESS | ERROR | WARNING | INFO
  STATE_TYPE,        // EMPTY | ERROR | LOADING
  TAG_TYPE,          // DEFAULT | SUCCESS | WARNING | ERROR | INFO
  TOOLTIP_POSITION,  // TOP | BOTTOM | LEFT | RIGHT
} from "gwan-design-system";

// TypeScript types
import type {
  IButton, IModal, ITable, ITableColumn,
  IAvatar, IBanner, ICallout, ICarousel,
  ICheckbox, IChip, IEllipsis, IFileUploader,
  IFilter, IFilterOption, IFilterCategory,
  IInput, ITextArea, INavBar, IMenuItem,
  IPagination, IPaging, IRadioButton,
  ISelectDropdown, ISelectDropdownOption,
  ISnackBar, IState, IStateBase,
  ITag, ITimeLine, ILog, ITooltip,
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
