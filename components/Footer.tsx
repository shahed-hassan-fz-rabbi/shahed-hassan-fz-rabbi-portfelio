'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">MD Rabbi Miah</h3>
            <p className="text-slate-400">
              MERN Stack Developer from Bangladesh 🇧🇩 | CSE Student at Comilla University | 
              Passionate about building scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-slate-400 hover:text-accent-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-accent-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-accent-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
            <div className="space-y-2">
              <a
                href="https://github.com/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-primary transition-colors block"
              >
                → GitHub
              </a>
              <a
                href="https://linkedin.com/in/shahed-hassan-fz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-primary transition-colors block"
              >
                → LinkedIn
              </a>
              <a
                href="mailto:shahedhassan571@gmail.com"
                className="text-slate-400 hover:text-accent-primary transition-colors block"
              >
                → Email
              </a>
              <a
                href="tel:+8801738039808"
                className="text-slate-400 hover:text-accent-primary transition-colors block"
              >
                → Phone
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 pt-8 text-center text-slate-400 text-sm"
        >
          <p>
            © {currentYear} MD Rabbi Miah. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
