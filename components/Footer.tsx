'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border-color)] pt-16 pb-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Top Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 pb-12 border-b border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] mb-2">
              Have a project in mind?
            </h3>
            <p className="text-[var(--text-muted)] text-lg">
              Let’s build something great together.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white text-base font-semibold hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-md"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[var(--border-color)]"
        >
          {/* Column 1: Brand & Status */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-1">MD Rabbi Miah</h3>
              <p className="text-base font-semibold text-[var(--text-main)] opacity-90">
                Full-Stack Developer & CSE Student
              </p>
            </div>
            <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-sm">
              Building modern web experiences & scalable applications with high performance and clean architecture.
            </p>
            
            {/* Status Badge */}
           
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-[var(--text-main)] mb-4 text-sm tracking-wider uppercase opacity-80">
              Navigation
            </h4>
            <ul className="space-y-3 text-base">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Awards', href: '#awards' },
                { name: 'Contact', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[var(--text-muted)] hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Let's Connect */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-semibold text-[var(--text-main)] text-sm tracking-wider uppercase opacity-80">
              Let&apos;s Connect
            </h4>
            <p className="text-[var(--text-muted)] text-base">
              Open for internships, freelance projects, and full-time remote roles.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] text-sm font-semibold hover:border-blue-500 hover:text-blue-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaGithub className="text-base" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/shahed-hassan-fz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] text-sm font-semibold hover:border-blue-500 hover:text-blue-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaLinkedin className="text-base" /> LinkedIn
              </a>
              <a
                href="mailto:shahedhassan571@gmail.com"
                aria-label="Email"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] text-sm font-semibold hover:border-blue-500 hover:text-blue-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaEnvelope className="text-base" /> Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <p className="text-center sm:text-left">
            © {currentYear} <span className="font-semibold text-[var(--text-main)]">Shahed Hassan FZ Rabbi</span>
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 font-semibold py-2.5 px-5 rounded-full bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            Back to Top <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;