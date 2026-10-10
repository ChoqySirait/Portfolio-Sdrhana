# 🕸️ Spider-Tech Lab // Personal Web Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel)
![Status](https://img.shields.io/badge/Status-Active_Development-emerald?style=for-the-badge)

A high-performance, modern personal web portfolio engineered with Next.js App Router, TypeScript, and Tailwind CSS. Built with a signature **Spider-Man & Symbiote Cyberpunk Aesthetic**, featuring interactive micro-interactions, an embedded tech terminal, dynamic theme switching, and smooth responsive layouts.

🚀 **Live Demo:** [portfolio-sdrhana.vercel.app](https://portfolio-sdrhana.vercel.app)

---

## 📌 Key Features & Micro-Interactions

- 🔴🔵 **Classic vs. Symbiote Dual Theme Switcher**: 
  - **Classic Suit Mode**: Vibrant Red Crimson & Royal Navy theme with custom Spider-Grid background.
  - **Symbiote Dark Mode**: Deep Monochrome Obsidian & Silver theme with instant asset switching (`Spiderman.png` $\rightarrow$ `BlackSpider.png`).
- 🖥️ **Peter's Tech Lab Terminal (`[&gt;_]`)**: 
  - Interactive modal terminal capable of executing custom commands (`help`, `skills`, `projects`, `contact`, `clear`) with synthetic audio feedback.
- ⚡ **Zero-CLS Typewriter Animations**:
  - **TypewriterLoop**: Infinite typewriter sequence on the Hero title with strict height locking to prevent layout shifts on mobile.
  - **TypewriterTitle**: Single-pass typewriter header animation on all internal sub-pages.
- 🕷️ **Spider-Sense Trailing Ring Cursor**:
  - Custom trailing interactive cursor ring mimicking Spider-Sense alerts on mouse movement and click ripples.
- 🖼️ **Radial Masking Image Integration**:
  - Custom CSS radial masking (`spider-mask-radial`) ensuring 100% seamless transparency and zero background box artifacts on character assets.
- 📱 **Fully Responsive Carousel & Modals**:
  - Touch-friendly horizontal swipe carousels for Portfolio showcase and Experience timeline, supplemented with high-detail project modal views.

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
│   └── page.tsx               # Landing Hero Section
├── public/                    # Assets (PNG, Icons, Audio, PDF Resume)
└── README.md                  # Project Documentation
```

---

## 👤 Author
Choqy Pananda Sirait

Information Systems Student at Del Institute of Technology (IT Del)

Web Development • System Analysis • Cybersecurity Triage • UI/UX Design

- 🌐 Portfolio: portfolio-sdrhana.vercel.app

- 🐙 GitHub: @ChoqySirait

- 💼 LinkedIn: Choqy Pananda Sirait

- 📧 Email: choqypenandasirait@gmail.com

Made with 🔴, 🔵, and 🕷️ Spider-Tech.

Enjoy :D