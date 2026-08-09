'use client';

import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-800 text-amber-400 border border-slate-700 shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
    >
      {theme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
    </button>
  );
}