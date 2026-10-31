# 🕸️ Spider-Tech Lab // Personal Web Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel)
![Status](https://img.shields.io/badge/Status-Active_Development-emerald?style=for-the-badge)

A high-performance, modern personal web portfolio engineered with Next.js App Router, TypeScript, and Tailwind CSS. Built with a signature **Spider-Man & Symbiote Cyberpunk Aesthetic**, featuring interactive micro-interactions, an embedded tech terminal, dynamic theme switching, and strict UI/UX consistency.

🚀 **Live Demo:** [portfolio-sdrhana.vercel.app](https://portfolio-sdrhana.vercel.app)

---

## 📌 Key Features & Engineering Highlights

- 🔴🔵 **Classic vs. Symbiote Dual Theme Switcher**: 
  - **Classic Suit Mode**: Vibrant Red Crimson & Royal Navy theme with custom Spider-Grid background.
  - **Symbiote Dark Mode**: Deep Monochrome Obsidian & Silver theme. Uses a custom `SpiderImage` component to guarantee **100% Client-Safe Hydration** without layout glitches during asset switching (`Spiderman.png` -> `BlackSpider.png`).
- 📏 **100vh Viewport Optimization (Zero-Scroll Hero)**:
  - Compact typography scaling and precision padding ensure the Hero Section fits flawlessly within a single desktop screen without triggering vertical scrollbars.
- ⚡ **Zero-CLS Typewriter Animations**:
  - **TypewriterLoop**: Infinite typewriter sequence on the Hero title with strict height locking (`min-h`) to prevent Cumulative Layout Shifts (CLS) on mobile.
  - **TypewriterTitle**: Single-pass typewriter header animation on all internal sub-pages for a clean, non-distracting reading experience.
- 🎨 **Unified Component Architecture**:
  - Global implementation of `SectionBadge` (Cyberpunk Pulsing Dot) and `TiltCard` (Crimson-Obsidian Dark Gradient) for 100% design consistency across all routes. Solid crimson CTA buttons with glowing drop-shadows.
- 🖥️ **Peter's Tech Lab Terminal (`[>_]`)**: 
  - Interactive modal terminal capable of executing custom commands (`help`, `skills`, `projects`, `contact`, `clear`) with synthetic audio feedback.
- 🕷️ **Spider-Sense Trailing Ring Cursor**:
  - Custom trailing interactive cursor ring mimicking Spider-Sense alerts on mouse movement and click ripples.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Typing)
- **Styling & Design**: [Tailwind CSS](https://tailwindcss.com/) with CSS Custom Variables & Webkit Blending
- **Component Architecture**: Client-Side Shell Architecture (`ClientShell`), Custom Hooks for Theme Management, and Modular UI Cards
- **Deployment & CI/CD**: [Vercel](https://vercel.com/) Auto-Deployment Engine

---

## 📂 Repository Structure

```text
├── app/
│   ├── components/            # Modular & Reusable UI Components
│   │   ├── ClientShell.tsx    # Root interactive wrapper & cursor ring
│   │   ├── SectionBadge.tsx   # Unified Cyberpunk Red Badge Component
│   │   ├── ScrollReveal.tsx   # On-scroll reveal animation wrapper
│   │   ├── SpiderImage.tsx    # Client-safe dark/light theme image renderer
│   │   ├── SpiderTerminal.tsx # Peter's Tech Lab terminal engine
│   │   ├── TiltCard.tsx       # Interactive 3D tilt hover effect card
│   │   ├── TypewriterLoop.tsx # Infinite hero name typewriter engine
│   │   └── TypewriterTitle.tsx# Single-pass page header typewriter
│   ├── context/
│   │   └── ThemeContext.tsx   # React Context for Classic/Symbiote switching
│   ├── about/                 # Background, Education & Skill Matrix
│   ├── portfolio/             # Featured Projects Carousel & Modal View
│   ├── resume/                # Experience & Leadership Timeline
│   ├── certifications/        # Credentials, Badges & Verification Links
│   ├── contact/               # Interactive Form & Direct Collaboration Card
│   ├── globals.css            # Custom CSS Animations, Blending & Grid Themes
│   ├── layout.tsx             # Root layout & SEO Metadata
│   └── page.tsx               # Landing Hero Section (100vh Optimized)
├── public/                    # Assets (PNG, Icons, Audio, PDF Resume)
└── README.md                  # Project Documentation

```
---
## 👤 Author
### Choqy Pananda Sirait
