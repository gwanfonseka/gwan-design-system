# ⚡ Gwan Design System – A Component Library for Next.js ⚡

![npm](https://img.shields.io/npm/v/gwan-design-system.svg)

> 🧪 Reusable, composable, and beautifully crafted UI components built with 💚 Next.js — supercharge your apps in minutes!

## 📦 What is Gwan Design System?

**Gwan Design System** is a plug-and-play React component library tailored specifically for **Next.js** projects. Whether you're building a SaaS dashboard, marketing site, or internal tool — we've got you covered.

- ⚡ Built with Next.js App Router
- 🎨 Pre-styled, customizable components
- 🧱 Fully typed with TypeScript
- 💅 Styled with Tailwind CSS
- 🧪 Accessible and production-ready

## 🚀 Getting Started

### 📥 Installation

Install via npm: `npm install gwan-design-system`

or with Yarn: `yarn add gwan-design-system`

### 🧰 Usage

Include this in your `tailwind.config.ts`

```
content: [
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  join(
    dirname(require.resolve("gwan-design-system")),
    "**/*.{js,ts,jsx,tsx,mdx}"
  ),
],
```

Define your custom theme in your `tailwind.config.ts`

```
theme: {
  extend: {
    colors: {
      primary: {
        50: "#F2F3EE",
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
      neutral: {...},
      green: {...},
      red: {...},
      blue: {...},
      yellow: {...}
    }
  }
}
```

Import any component and use it right away!

```
"use client";

import { Button, BUTTON_VARIANTS } from "gwan-design-system";

export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">👋 Welcome to Gwan UI</h1>
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          label="Primary"
          onClick={() => handleClick()}
        />
    </main>
  );
}
```

### 🧱 Components

- 🔘 Buttons
- 🟣 Modals
- 🧾 Tables
- ✅ Checkboxes
- ☑️ Radio Buttons
- 📥 File Uploader
- 📦 Cards
- 🎛 Dropdowns
- 📊 Pagination
- 📎 Tags
- 🧠 States (Empty, Error, Loading, etc.)
- 🔔 Snackbar
- ✨ Tooltips
- 🧭 Navigation Bars
- ...and more!
  > Want to see all available components? Visit 👉 [gwan-design-system](https://gwan-design-system.vercel.app) official website.

### 🛠 Customization

All components are styled using Tailwind CSS. You can easily override styles using your own Tailwind theme or utility classes.

```
<Button className="bg-purple-600 hover:bg-purple-700 text-white" />
```

## 🤝 Contributing

I welcome contributions via pull requests!\
However, to keep the project stable and secure:

🔒 Direct pushes to the main branch are not allowed\
✅ All changes must go through a pull request\
👀 Pull requests require review and approval before merging

Want to contribute?
Fork this 👉 [repository](https://github.com/gwanfonseka/gwan-design-system)

- Create a feature branch: git checkout -b feature/my-feature
- Commit your changes and push: git push origin feature/my-feature
- Open a pull request with a clear description

Thanks for helping improve the project! 🙌

## ✨ Show Some Love

If you like this library:

- ⭐ Star this repo on GitHub
- 🧑‍💻 Use it in your projects
- 🐛 Submit bugs or improvements
- 🥳 Share with the community

## 📦 Coming Soon

- 🔌 Dark mode support
- 🎨 Theming system
- 📚 Storybook documentation
- 🧩 Component playground
