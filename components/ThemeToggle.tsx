"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  // হাইড্রেশন মিসম্যাচ এড়াতে
  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] opacity-50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Theme"
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] shadow-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"
    >
      {theme === "light" ? (
        <FaMoon className="text-sm text-slate-700" />
      ) : (
        <FaSun className="text-sm text-amber-400" />
      )}
    </button>
  );
}