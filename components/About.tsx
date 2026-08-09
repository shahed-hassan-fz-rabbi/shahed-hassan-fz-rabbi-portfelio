'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-5 text-slate-300 text-lg leading-relaxed bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-8"
      >
        <p>
          My programming journey started with curiosity about how websites actually work behind the
          scenes. That curiosity turned into a real passion for the MERN stack, and today I build
          full-stack web applications as a CSE student at Comilla University.
        </p>
        <p>
          I enjoy solving problems with Data Structures and Algorithms, designing clean user
          interfaces, and turning ideas into working products with React, Node.js, Express, and
          MongoDB. Building authentication systems, REST APIs, and responsive UIs gives me real
          creative satisfaction.
        </p>
        <p>
          Outside of coding, I am involved in my university's IT Society as part of the graphics
          team, and I lead media and publication activities for a mental wellness club on campus.
          I enjoy graphic design with Adobe Illustrator and Photoshop, and I am currently exploring
          Machine Learning and Cyber Security as my next areas of growth.
        </p>
      </motion.div>
    </section>
  );
};

export default About;