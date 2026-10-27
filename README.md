# Deep — Personal Developer Portfolio

A clean, professional developer portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**.

## Overview

This is the personal portfolio website of **Md. Arif Shahriar Deep**, an aspiring full-stack developer focused on frontend development with React, Next.js, and TypeScript. The portfolio showcases skills, featured projects, and contact information for internship and junior developer opportunities.

## Features

- ⚡ **Next.js 16 App Router** with Turbopack
- 🎨 **Light / Dark theme toggle** with no flash on load
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🧠 **TypeScript** throughout
- 🎯 **Single-page layout** with smooth scroll navigation
- 🖼️ **Optimized images** via `next/image`
- ♿ **Accessible** — semantic HTML, keyboard navigation, visible focus states
- 🚀 **Production-ready** — clean build, no lint errors

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Introduction, availability badge, CTA buttons, profile photo |
| **About** | Background, approach, and highlights |
| **Skills** | Languages, frontend, and tools I work with |
| **Projects** | Two featured real projects with GitHub and Live Demo links |
| **Contact** | Email, GitHub, and LinkedIn links |

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript 5](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first styling
- [Lucide React](https://lucide.dev/) — Icon library

## Projects

### Bazar Dor
A Bengali-focused grocery price information web application designed to help users explore everyday products and their prices through a localized, user-friendly interface.

- **Live Demo:** [bazar-dor-two-ashen.vercel.app](https://bazar-dor-two-ashen.vercel.app/)
- **GitHub:** [github.com/arifdeep75/bazar-dor](https://github.com/arifdeep75/bazar-dor)
- **Stack:** Next.js, TypeScript, Tailwind CSS

### Fit Log
A fitness-focused web application for exploring workouts and organizing personal workout plans through a clean, responsive interface.

- **Live Demo:** [fit-log-beta-nine.vercel.app](https://fit-log-beta-nine.vercel.app/)
- **GitHub:** [github.com/arifdeep75/fit-log](https://github.com/arifdeep75/fit-log)
- **Stack:** Next.js, TypeScript, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/arifdeep75/deep-portfolio.git
cd deep-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
deep-portfolio/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ThemeProvider.tsx
│   ├── globals.css
│   ├── icon.tsx          ← Favicon (AS monogram)
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── profile.jpg       ← Profile photo
│   └── resume.pdf        ← Resume
└── next.config.ts
```

## Contact

- **Email:** [arifdeep75@gmail.com](mailto:arifdeep75@gmail.com)
- **GitHub:** [github.com/arifdeep75](https://github.com/arifdeep75)
- **LinkedIn:** [linkedin.com/in/arifdeep75](https://www.linkedin.com/in/arifdeep75)
