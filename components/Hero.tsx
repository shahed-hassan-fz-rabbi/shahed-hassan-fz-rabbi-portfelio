'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  // Variants type ডিফাইন করে দেওয়া হয়েছে
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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-5xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center gap-12"
        >
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 text-accent-primary text-sm font-semibold">
                MERN Stack Developer
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
                Hey, I'm <span className="gradient-text">MD Rabbi Miah</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 font-light">
                MERN Stack Developer | Problem Solver | CSE Student
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Full-stack developer specializing in React.js, Node.js, Express.js, and MongoDB.
              CSE student at Comilla University with expertise in DSA, OOP, and modern web technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
            >
              <a
                href="/resume.pdf"
                download="MD_Rabbi_Miah_Resume.pdf"
                className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transform hover:scale-105 transition-all"
              >
                Download Resume
              </a>
              
              <a
                href="#contact"
                className="px-8 py-3 border border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-accent-primary/10 transform hover:scale-105 transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-6 pt-2 flex-wrap">
              <a
                href="https://github.com/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-primary font-semibold text-sm"
              >
                GitHub
              </a>
              
              <a
                href="https://linkedin.com/in/shahed-hassan-fz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-primary font-semibold text-sm"
              >
                LinkedIn
              </a>
              
              <a
                href="mailto:shahedhassan571@gmail.com"
                className="text-slate-400 hover:text-accent-primary font-semibold text-sm"
              >
                Email
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            variants={itemVariants}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent-primary/50 shadow-2xl flex-shrink-0 bg-slate-800"
          >
            <Image
              src="/profile.png"
              alt="MD Rabbi Miah"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-accent-secondary/10 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;