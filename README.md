This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# 🛒 বাজার দর (Bazar Dor)

A modern, responsive Next.js web application designed to track and monitor daily essential grocery prices across markets in Bangladesh. Users can view current prices, track market fluctuations (risers and fallers), explore category-wise products, and view market-specific breakdown details.

---

## 🚀 Live Demo & Links

- **Live Site**: [https://assignment-7-bazardor.vercel.app](https://assignment-7-bazardor.vercel.app) *(Replace with your actual Vercel link)*
- **GitHub Repository**: [https://github.com/your-username/assignment_7](https://github.com/your-username/assignment_7) *(Replace with your actual GitHub link)*

---

## ✨ Key Features

1. **Real-time Product Market Prices**: Displays daily updated prices for essential items (rice, lentils, oil, vegetables, fish, etc.) in Bengali currency (৳) and units.
2. **Dynamic Price Change Indicators**: Visual indicators (`▲` / `▼` / `—`) highlighting daily price fluctuations with color-coded badges (up, down, or flat).
3. **Category-Based Filtering & Dynamic Routes**: Easily filter products on the homepage or navigate to dedicated category pages (`/categories/[slug]`) with custom empty states.
4. **Detailed Market Breakdown Page**: Dynamic route (`/products/[id]`) showing market-level price ranges across different divisions and regional bazaars in Bangladesh.
5. **Authentication System & User Profiles**: Complete user flow including Sign In (`/sign-in`), Sign Up (`/sign-up`), and Profile details (`/profile`) built with clean form handling and session state.
6. **Responsive Design & Skeletons**: Fully optimized for mobile, tablet, and desktop screens with seamless loading animations using Next.js `loading.tsx` skeletons and custom toast notifications.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Source**: Programming Hero Bazardor Open API (`/products`)
- **Deployment**: [Vercel](https://vercel.com/)

---

## ⚙️ Getting Started Locally

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/assignment_7.git](https://github.com/your-username/assignment_7.git)
   cd assignment_7