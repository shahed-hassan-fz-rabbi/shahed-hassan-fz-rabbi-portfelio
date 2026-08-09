'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Profile Avatar Image + Name */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-blue-500 shadow-sm group-hover:scale-105 transition-transform duration-200 bg-slate-800">
            <Image
              src="/profile.png"
              alt="Shahed Hassan"
              fill
              className="object-cover object-top"
            />
          </div>
          <span className="text-lg font-bold text-[var(--text-main)] group-hover:text-blue-500 transition-colors">
            Shahed <span className="gradient-text">Hassan</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="text-[var(--text-main)] hover:text-blue-500 transition-colors font-semibold text-base"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="https://github.com/shahed-hassan-fz-rabbi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md shadow-blue-600/30 transition-all text-sm"
          >
            View Code
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-600 dark:text-blue-400 p-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[var(--bg-card)]/95 backdrop-blur-md border-t border-[var(--border-color)] transition-colors duration-300"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-[var(--text-main)] hover:text-blue-500 transition-colors font-semibold text-base"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/shahed-hassan-fz-rabbi"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-center text-sm"
            >
              View Code
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;