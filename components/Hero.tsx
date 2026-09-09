"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaDownload,
  FaArrowRight,
  FaGraduationCap,
  FaLayerGroup,
} from "react-icons/fa";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100vh-64px)] overflow-hidden bg-[var(--bg-main)] px-6 pt-20 pb-12 sm:pt-24 lg:px-12 lg:pt-16 flex items-center transition-colors duration-300"
    >
      {/* Background Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[15%] -z-10 h-[380px] w-[380px] lg:h-[450px] lg:w-[450px] rounded-full bg-blue-500/[0.03] dark:bg-blue-500/[0.06] blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-14">
          
          {/* ================= LEFT COLUMN: CONTENT ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-6"
          >
            {/* Availability Indicator */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span>Open to Software Engineering Opportunities</span>
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-extrabold tracking-tight text-[var(--text-main)] leading-[1.08]">
                Md Rabbi Miah
              </h1>
              <p className="text-lg sm:text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                Software Engineer <span className="text-[var(--text-muted)] font-normal">·</span> Full-Stack Developer
              </p>
            </motion.div>

            {/* Impact Statement */}
            <motion.div variants={itemVariants}>
              <p className="mx-auto lg:mx-0 max-w-xl text-sm sm:text-base leading-relaxed text-[var(--text-muted)] font-normal">
                I build scalable and user-focused web applications with modern full-stack
                technologies. I enjoy solving complex problems, writing maintainable code,
                and turning ideas into reliable software.
              </p>
            </motion.div>

            {/* Key Stats Bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-base">
                  <FaCode />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm sm:text-base text-[var(--text-main)] leading-none">
                    500+
                  </div>
                  <span className="text-xs text-[var(--text-muted)] font-medium">
                    Problems Solved
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-base">
                  <FaLayerGroup />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm sm:text-base text-[var(--text-main)] leading-none">
                    3+
                  </div>
                  <span className="text-xs text-[var(--text-muted)] font-medium">
                    Full-Stack Projects
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-base">
                  <FaGraduationCap />
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm sm:text-base text-[var(--text-main)] leading-none">
                    CSE
                  </div>
                  <span className="text-xs text-[var(--text-muted)] font-medium">
                    Undergraduate
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                View Projects
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="/resume.pdf"
                download="Md_Rabbi_Miah_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-6 py-3.5 text-sm font-semibold text-[var(--text-main)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 active:translate-y-0 cursor-pointer"
              >
                <FaDownload className="text-xs" />
                Download Resume
                <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  PDF
                </span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <a
                href="https://github.com/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href="https://linkedin.com/in/shahed-hassan-fz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin className="text-base" />
              </a>

              <a
                href="https://codeforces.com/profile/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codeforces Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaCode className="text-base" />
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN: PORTRAIT & ANCHORED RINGS ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto flex w-full max-w-[480px] lg:max-w-none items-center justify-center"
          >
            <div className="relative h-[440px] w-full sm:h-[490px] lg:h-[550px] flex items-end justify-center">

              {/* Anchored Outer Concentric Ring */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[470px] lg:w-[470px] rounded-full border border-blue-500/10 dark:border-blue-400/15 pointer-events-none"
              />

              {/* Anchored Inner Ring */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 h-[230px] w-[230px] sm:h-[300px] sm:w-[300px] lg:h-[370px] lg:w-[370px] rounded-full border border-blue-500/10 dark:border-blue-400/10 pointer-events-none"
              />

              {/* Tech Matrix Dot Grid */}
              <div
                aria-hidden="true"
                className="absolute right-[2%] top-[30%] hidden sm:block h-28 w-28 opacity-25 dark:opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #3b82f6 1.2px, transparent 1.2px)",
                  backgroundSize: "11px 11px",
                }}
              />

              {/* Top Handwritten Annotation (Hidden on Mobile) */}
              <div className="absolute top-[2%] right-[4%] sm:right-[10%] z-20 hidden sm:flex flex-col items-start pointer-events-none">
                <span className="text-xs sm:text-sm font-normal italic text-[var(--text-muted)] tracking-wide font-serif">
                  Let&apos;s build <br /> something great
                </span>
                <svg
                  className="w-8 h-8 text-slate-400 dark:text-slate-500 mt-1 ml-4 rotate-[15deg]"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M 5 5 Q 35 15, 20 42"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 12 36 L 20 42 L 25 35"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Floating Card: Clean Code (Hidden on Mobile, Visible on sm+) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 sm:-left-[4%] top-[35%] z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/90 backdrop-blur-md p-3 sm:px-4 sm:py-3 shadow-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-600/30">
                  &lt;/&gt;
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-main)]">
                    Clean Code
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] font-medium">
                    Better Tomorrow
                  </div>
                </div>
              </motion.div>

              {/* Floating Card: Tech Stack (Hidden on Mobile, Visible on sm+) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 sm:-right-[4%] bottom-[20%] z-20 hidden sm:flex items-start gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/90 backdrop-blur-md p-3.5 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white text-xs shadow-md shadow-blue-600/30 mt-0.5">
                  <FaLayerGroup />
                </div>
                <div className="text-left space-y-0.5">
                  {["React", "Next.js", "Node.js", "MongoDB"].map((tech) => (
                    <div
                      key={tech}
                      className="text-[11px] font-semibold text-[var(--text-muted)] hover:text-blue-500 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Uncropped Focal Portrait Image */}
              <div className="relative z-10 w-72 h-[410px] sm:w-80 sm:h-[460px] lg:w-[410px] lg:h-[520px] lg:-translate-y-2 flex items-end justify-center">
                <Image
                  src="/md rabbi miah.png"
                  alt="Md Rabbi Miah - Software Engineer"
                  width={520}
                  height={650}
                  priority
                  className="h-full w-auto max-w-full object-contain object-bottom select-none drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Seamless Transition Fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg-main)] to-transparent pointer-events-none"
      />
    </section>
  );
}