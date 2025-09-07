# Jitendra-DevOps---React-Tailwind-Portfolio

/*
README & Setup (short):

This is a single-file React + Tailwind portfolio component (App.jsx) designed to be dropped into a Vite + React project.

Recommended quick setup (Vite):
1. npm create vite@latest jitendra-portfolio -- --template react
2. cd jitendra-portfolio
3. npm install
4. Install Tailwind:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
5. In tailwind.config.cjs, set content to ['./index.html','./src/**/*.{js,jsx,ts,tsx}']
6. In ./src/index.css add:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
7. Replace ./src/App.jsx with this file content and ./src/main.jsx stays default.
8. npm run dev