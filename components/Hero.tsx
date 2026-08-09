'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

const Hero: React.FC = () => {
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 md:px-8">
      <div className="max-w-4xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 text-accent-primary text-sm font-semibold">
              MERN Stack Developer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Hey, I'm{' '}
              <span className="gradient-text">MD Rabbi Miah</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light">
              MERN Stack Developer | Problem Solver | CSE Student
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Full-stack developer specializing in React.js, Node.js, Express.js, and MongoDB. 
            CSE student at Comilla University with expertise in DSA, OOP, and modern web technologies. 
            Passionate about building scalable applications and exploring ML & Cyber Security.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent-primary text-accent-primary rounded-lg font-semibold hover:bg-accent-primary/10 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 pt-4 flex-wrap">
            <a
              href="https://github.com/shahed-hassan-fz-rabbi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent-primary transition-colors"
            >
              <span className="text-sm font-semibold">→ GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/shahed-hassan-fz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent-primary transition-colors"
            >
              <span className="text-sm font-semibold">→ LinkedIn</span>
            </a>
            <a
              href="mailto:shahedhassan571@gmail.com"
              className="text-slate-400 hover:text-accent-primary transition-colors"
            >
              <span className="text-sm font-semibold">→ Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-accent-secondary/10 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;