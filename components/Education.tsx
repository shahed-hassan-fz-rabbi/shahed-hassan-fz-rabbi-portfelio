'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'B.Sc. (Hons) in Computer Science & Engineering',
    institution: 'Comilla University, Bangladesh',
    duration: '2023 -- Present (7th Semester)',
    grade: 'Last Semester CGPA: 3.18 / 4.00',
    description: 'Relevant Coursework: OOP, Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Software Requirements Specification, Distributed Systems.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) in Science',
    institution: 'Narsingdi, Dhaka, Bangladesh',
    duration: 'Completed',
    grade: 'GPA: 5.00 / 5.00',
    description: 'Focused on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).',
  },
  {
    degree: 'Secondary School Certificate (SSC) in Science',
    institution: 'Narsingdi, Dhaka, Bangladesh',
    duration: 'Completed',
    grade: 'GPA: 4.89 / 5.00',
    description: 'Strong foundation in Science and Mathematics.',
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
          My academic qualifications and core coursework
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-lg hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center text-2xl mb-4">
                <FaGraduationCap />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 inline-block mb-3">
                {edu.duration}
              </span>
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-1">
                {edu.degree}
              </h3>
              <p className="text-blue-500 font-medium text-sm mb-2">
                {edu.institution}
              </p>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs mb-3">
                {edu.grade}
              </p>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">
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