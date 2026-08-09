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
            <span className="inline-block px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-sm font-semibold">
              Frontend Web Developer
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
              Hello, I&apos;m <span className="gradient-text">Shahed Hassan</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-light">
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
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transform hover:scale-105 transition-all"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-accent-primary/10 transform hover:scale-105 transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-5 text-2xl text-slate-400"
          >
            <a
              href="https://github.com/shahed-hassan-fz-rabbi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shahed-hassan-fz"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-primary transition"
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
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-primary shadow-2xl shadow-accent-primary/30 flex-shrink-0 bg-slate-800"
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