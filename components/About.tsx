"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaLightbulb,
  FaArrowRight,
  FaGamepad,
  FaBookOpen,
  FaCamera,
} from "react-icons/fa";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Development",
      description: "Architecting modern, scalable web applications with Next.js & Node.js.",
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      description: "Solved 500+ CP problems focusing on algorithms & optimal logic.",
    },
    {
      icon: <FaPalette />,
      title: "UI & Visual Design",
      description: "Crafting intuitive, accessible, and high-conversion interfaces.",
    },
    {
      icon: <FaLightbulb />,
      title: "Continuous Growth",
      description: "Exploring distributed architecture, system design, and AI integration.",
    },
  ];

  const personalInterests = [
    { icon: <FaPalette />, label: "Graphic Design & UI/UX" },
    { icon: <FaCamera />, label: "Media & Digital Content" },
    { icon: <FaBookOpen />, label: "Tech Articles & Research" },
    { icon: <FaGamepad />, label: "Strategic Gaming" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-[var(--bg-main)] transition-colors duration-300"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-20 -left-32 w-72 h-72 rounded-full bg-blue-500/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-72 h-72 rounded-full bg-purple-500/[0.04] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-blue-600 dark:bg-blue-400" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight">
            Building software with{" "}
            <span className="gradient-text">curiosity & purpose.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            A snapshot of my engineering journey, architectural principles, and the driving curiosity behind my work.
          </p>
        </motion.div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm"
        >
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left: Narrative Content */}
            <div className="p-7 sm:p-9 md:p-11 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-lg">
                    <FaLaptopCode />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                      My Background
                    </p>
                    <h3 className="text-lg font-bold text-[var(--text-main)]">
                      Software Engineering & CSE Student
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
                  <p>
                    My programming journey began with an inquisitive fascination about how complex 
                    web platforms operate seamlessly behind the interface. That initial curiosity quickly 
                    evolved into an obsession with building production-grade full-stack applications—mastering 
                    every layer from low-latency databases to refined micro-interactions.
                  </p>

                  <p>
                    I thrive in solving challenging algorithmic problems, structuring clean 3NF database 
                    architectures, and translating abstract business logic into resilient code. My core tech 
                    focus centers around <strong>Next.js, TypeScript, React, Node.js, Express, and PostgreSQL/MongoDB</strong>.
                  </p>

                  <p>
                    <strong>Beyond the screen:</strong> When I am not writing code or debugging queries, I channel 
                    my creativity into graphic design, digital visual campaigns, and reading up on advancements 
                    in AI and distributed systems. Maintaining this balance keeps my problem-solving approach fresh 
                    and grounded.
                  </p>
                </div>

                {/* Personal Interests / Hobbies Badges */}
                <div className="mt-6 pt-5 border-t border-[var(--border-color)]">
                  <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-3">
                    Hobbies & Creative Interests
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {personalInterests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-main)]"
                      >
                        <span className="text-blue-500">{interest.icon}</span>
                        {interest.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Work CTA Link */}
              <div className="mt-8 pt-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors group cursor-pointer"
                >
                  Explore my featured projects
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Pillars / Highlights Sidebar */}
            <div className="border-t lg:border-t-0 lg:border-l border-[var(--border-color)] p-7 sm:p-9 md:p-11 bg-black/[0.015] dark:bg-white/[0.015] flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-6">
                  What Drives My Work
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="group flex gap-4 p-3.5 rounded-2xl border border-transparent hover:border-[var(--border-color)] hover:bg-[var(--bg-card)] transition-all duration-200"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                        {item.icon}
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm text-[var(--text-main)]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Engineering Mindset Block */}
              <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2">
                  Engineering Philosophy
                </p>
                <p className="text-sm font-medium leading-relaxed text-[var(--text-main)]">
                  Learn deeply. Build consistently.{" "}
                  <span className="gradient-text font-bold">
                    Solve meaningful problems.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;