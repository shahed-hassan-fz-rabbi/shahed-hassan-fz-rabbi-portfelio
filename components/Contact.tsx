'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setLoading(false);

      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
          I&apos;m open to internship opportunities and interesting projects. Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Email</h3>
            <a
              href="mailto:shahedhassan571@gmail.com"
              className="text-[var(--text-muted)] hover:text-blue-500 transition-colors"
            >
              shahedhassan571@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Phone</h3>
            <a
              href="tel:+8801738039808"
              className="text-[var(--text-muted)] hover:text-blue-500 transition-colors"
            >
              +880 1738-039808
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Social</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-blue-500 transition-colors font-semibold"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/shahed-hassan-fz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-blue-500 transition-colors font-semibold"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Location</h3>
            <p className="text-[var(--text-muted)]">Narsingdi, Dhaka, Bangladesh 🇧🇩</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Availability</h3>
            <p className="text-[var(--text-muted)]">Open for Remote Internships & Projects</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[var(--text-main)]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[var(--text-main)]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[var(--text-main)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell me about your opportunity..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/30 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-blue-500 font-semibold text-center"
            >
              ✓ Message sent! I&apos;ll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;