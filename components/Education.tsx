'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'B.Sc in Computer Science & Engineering (CSE)',
    institution: 'Comilla University',
    duration: '2022 - Present',
    description: 'Focusing on Software Engineering, Data Structures & Algorithms, Database Systems, Web Development, and Machine Learning.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Narsingdi Government College',
    duration: '2019 - 2021',
    description: 'Science Group | Focused on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
          Educational <span className="gradient-text">Qualification</span>
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
          My academic background and educational journey
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 shadow-lg hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center text-2xl mb-6">
                <FaGraduationCap />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 inline-block mb-3">
                {edu.duration}
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">
                {edu.degree}
              </h3>
              <p className="text-blue-500 font-medium mb-4 text-sm">
                {edu.institution}
              </p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;