# Splash App – Advanced State Management with React & Next.js

This project demonstrates **modern React development practices** using Next.js, Tailwind CSS, TypeScript, ContextAPI, and Redux.  
The focus is on building reusable components, managing state globally, and implementing scalable architecture.

---

## 📌 Overview
Splash App is a Next.js application showcasing:
- Reusable layouts (Header, Footer, Layout)
- Component-based architecture
- Routing with Next.js
- Type-safe code using TypeScript
- Responsive design with Tailwind CSS
- Global state management (ContextAPI & Redux)

---

## 📝 Tasks Completed

### **Task 0: Counter App with `useState`**
- Added a fun **Counter App** at `/counter-app`.
- Used React’s `useState` hook to manage counter state.
- Features:
  - Increment & Decrement buttons
  - Prevents counter from going below 0
  - Funny messages at certain counts (🔥 on multiples of 10)

📄 File: `pages/counter-app.tsx`

---

### **Task 1: Global State with ContextAPI**
- Introduced **ContextAPI** for app-wide state sharing.
- Created `CountContext.tsx` under `context/`.
- Wrapped the app with `CountProvider` in `_app.tsx`.
- Updated `Header.tsx` to reflect the same counter state as `CounterApp`.

📄 Files:
- `context/CountContext.tsx`
- `pages/_app.tsx`
- `components/layouts/Header.tsx`

---

### **Task 2: Global State with Redux Toolkit**
- Integrated **Redux Toolkit** for scalable state management.
- Installed dependencies:  
  ```bash
  npm install redux react-redux @reduxjs/toolkit
  npm install @types/react-redux
