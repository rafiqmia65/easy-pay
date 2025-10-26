# ⚡ Easy Pay - Modern Fintech Landing Page 💳

A sleek, responsive, and high-performance landing page template designed for Fintech applications, built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Next.js 14+:** Server-side rendering (SSR) and static site generation (SSG) for fast performance.
- **TypeScript:** Full type safety for reliable and scalable code.
- **Tailwind CSS:** Utility-first CSS framework for rapid and custom design implementation.
- **Modular Component Structure:** Clean and reusable components (following a folder structure like `components/Benefits`, `components/Security`, etc.).
- **Responsive Design:** Optimized for all screen sizes (Mobile, Tablet, Desktop).
- **Modern UI:** Features like testimonials carousel, security grid, and strong Call-to-Action (CTA) sections.

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/) (preferred) or npm/yarn.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/rafiqmia65/easy-pay.git
cd easy-pay

# Using pnpm
pnpm install

# OR using npm
# npm install
```

### 3. Running the Development Server

```bash
pnpm dev
# OR
# npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Building for Production

```bash
pnpm build
# OR
# npm run build

pnpm start
# OR
# npm run start
```

---

## 📁 Project Structure

```
EASY-PAY/
├── app/                  # Next.js App Router root layout and pages
├── components/           # All reusable UI components organized by section
│   ├── Benefits/
│   ├── CtaSection/
│   ├── Features/
│   ├── Footer/
│   ├── Header/
│   ├── HowItWorks/
│   ├── Pricing/
│   ├── Security/         # e.g., SecurityFeaturesGrid component
│   ├── shared/           # Utility components (e.g., buttons, cards)
│   ├── Sponsors/
│   └── Testimonial/
├── lib/                  # Utility functions and non-component logic
├── public/               # Static assets (images, fonts, bullet icons, etc.)
└── ...
```

---

## 🎨 Customization

### Tailwind Configuration

All styling is managed by Tailwind CSS. You can customize the theme, colors, and fonts in `tailwind.config.ts`.

### Static Assets

Place all images, SVGs, and other static files (like the security bullet icons) in the `/public` folder. They can be referenced directly from the root (e.g., `/Security/Bullet1.png`).

---

## 📄 License

This project is licensed under the MIT License.
