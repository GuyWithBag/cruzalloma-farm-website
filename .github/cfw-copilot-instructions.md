# ReactJS

## Why do we need to follow this?

To make sure that the code is consistent and easy to read, this is **very important**.

## Naming Convention

- **Folders:** kebab-case
- **Files:** PascalCase
- **Functions, Variables, Parameters:** camelCase
- **Types, Interfaces, Classes:** PascalCase

## Folder Structure

my-react-ts-app/
├── public/ # Static Files not processed by Webpack (See "Where to put assets" below for more information)
│ ├── images
│ ├── fonts
│ └── favicon.ico
├── src/ # Source files
│ ├── layout.tsx # Root layout that will be a wrapper for all pages, like in NextJS
│ ├── App.tsx # Home page that will contain the routing logic
│ ├── index.css # Global styles
│ ├── api/ # API routes
│ │ └── route.ts
│ ├── favicon.ico # Favicon
│ ├── assets/ # Assets like images, svgs, fonts (See "Where to put assets" below for more information)
│ │ ├── images
│ │ └── svgs
│ ├── components/ # Reusable UI components
│ │ ├── ui/ # This is the default folder for ShadCN components
│ │ │ ├── button.tsx
│ │ ├── dev-ui/ # This is for shared components that are not from shadcn
│ │ │ └── Card.tsx
│ │ │ └── NavbarButton.tsx
│ │ ├── layout/ # Components that are a group of shared components
│ │ │ ├── Sidebar.tsx
│ │ │ └── Footer.tsx
│ │ ├── sections/ # Components that are sections of a page
│ │ │ ├── HeroSection.tsx
│ │ │ └── CTASection.tsx
│ ├── lib/ # Utilities and shared logic
│ │ ├── api/ # API client functions
│ │ │ └── fetcher.ts
│ │ ├── constants/ # Constants (e.g., API URLs, themes)
│ │ │ └── index.ts
│ │ ├── types/ # TypeScript type definitions
│ │ │ └── user.ts
│ │ └── utils/ # Helper functions
│ │ └── formatDate.ts
│ ├── hooks/ # Custom React hooks
│ │ └── useAuth.ts # Will be camelCased because it's a function
│ ├── pages/ # Pages that will mimic how NextJS App Router works
│ │ └── HomePage.tsx
├── .eslintrc.json # ESLint configuration
├── .prettierrc # Prettier configuration
├── package.json # Project dependencies
├── tsconfig.json # TypeScript configuration
├── README.md # Project documentation
└── .gitignore # Git ignore file

## Components Folder Structure

- **dev-ui/** and **ui/**: Shared, reusable UI elements (buttons, cards, modals, inputs, etc.). Promotes reusability and consistency.
- **layout/**: Layout components (headers, footers, sidebars, nav). Keeps layout logic separate from features.

## Where to put assets

In React, static assets are handled via:

- **/public**: Place assets in the public folder (e.g., public/images/logo.png) for direct access at the root URL (/images/logo.png) without bundler processing. Reference in code using `/` or `process.env.PUBLIC_URL`.
- **/src/assets**: Import assets (e.g., images, fonts) from the src folder into JS/JSX (e.g., import logo from './assets/logo.png'). The bundler processes and optimizes these assets.

Unlike Next.js, which primarily uses the public folder for static assets, React offers flexibility to use either the public folder or import assets, depending on whether bundler optimization is needed. Use public for unprocessed assets like favicons; import assets for dynamic use or optimization.

## Setting Up Styles

**Using Tailwind V4.1**

Please refer to the Tailwind V4.1 docs, as Tailwind V3 has completely different variables.

All styles should be set before development begins so:

- Developers use the correct variables
- Styles are consistent
- Developers are not blocked by confusion

Styles should be named and set in Figma by the UI/UX designers.

**Example:**

@theme {
--color-primary-500: #00000;
/_ Other colors here _/
--spacing-mobile: 5rem;
/_ Other spacing here _/
--text-display-lg: clamp(3rem, calc(2rem + 6vw), 6rem); /_ ~80px to ~120px _/
}

## Colors, Typography

Exclusively use the colors defined by the frontend lead in globals.css. Naming depends on the UI/UX designer; refer to the project’s Figma.

Examples:

- bg-primary-500
- bg-neutral-500 (gray)
- bg-neutral-800 (dark gray)
- bg-neutral-200 (light gray)

Typography: use the text styles/typescale defined in globals.css. Naming depends on the UI/UX designer and is shown in Figma.

Example:

- text-display-lg

## Padding and Margins

For responsive padding, use the values defined in globals.css. Naming depends on the UI/UX designer; refer to Figma.

Examples:

- px-mobile
- px-desktop

## Responsiveness

- Desktop-only style: md:bg-red-500
- Desktop + mobile fallback:
  - md:bg-red-500 bg-blue-500
  - flex md:flex-row flex-col
- Mobile-only style: max-md:bg-red-500

## Semantics

Please use correct semantics.

Since we want our workflow to be fast, you can use this AI prompt:

Analyze the following HTML code and revise it to use proper semantic HTML elements and improve accessibility. Ensure the code follows best practices for semantics (e.g., using <header>, <nav>, <main>, <article>, <section>, <footer>, etc.) and accessibility (e.g., adding aria-label, aria-current, descriptive alt attributes, proper heading hierarchy, and meta tags for SEO). Provide comments explaining the changes and keep the code concise without adding styling. Here’s the HTML code:

**Example (Semantics Guide):**

<header>
  <!-- Introductory content -->
  <h1>HTML Semantics Guide</h1>
  <!-- Main heading -->
  <nav>
    <!-- Navigation links -->
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <!-- Primary page content -->
  <section>
    <!-- Groups related content -->
    <h2>Semantic HTML</h2>
    <!-- Section heading -->
    <p>
      Uses tags to describe content meaning, improving accessibility and SEO.
    </p>
    <!-- Paragraph describing semantics -->
  </section>

  <section>
    <h2>Common Elements</h2>
    <!-- article: Self-contained content -->
    <article>
      <h3>Article Title</h3>
      <p>Content like a blog post.</p>
    </article>
    <!-- aside: Secondary content -->
    <aside>
      <h3>Related</h3>
      <p>Sidebar content.</p>
    </aside>
    <!-- figure/figcaption: Image with caption -->
    <figure>
      <img src="example.jpg" alt="Example image" />
      <figcaption>Image caption</figcaption>
    </figure>
  </section>
</main>

<footer>
  <!-- Page footer -->
  <p>2025 Semantics Guide</p>
</footer>
