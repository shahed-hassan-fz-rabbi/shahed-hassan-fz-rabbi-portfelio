"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full">
        {/* Left Side: Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left space-y-6"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 dark:text-blue-400 text-sm font-semibold">
              Frontend Web Developer
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight text-[var(--text-main)]">
              Hello, I&apos;m <span className="gradient-text">Shahed Hassan</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-muted)] font-light">
              Building modern, responsive, and user-friendly web applications using React, Next.js, and Tailwind CSS.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href="/resume.pdf"
              download="Shahed_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/30 transform hover:scale-105 transition-all cursor-pointer"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transform hover:scale-105 transition-all cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-5 text-2xl text-[var(--text-muted)]"
          >
            <a
              href="https://github.com/shahed-hassan-fz-rabbi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shahed-hassan-fz"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/30 flex-shrink-0 bg-gray-200 dark:bg-slate-800"
        >
          <Image
            src="/profile.png"
            alt="Profile Photo"
            fill
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}