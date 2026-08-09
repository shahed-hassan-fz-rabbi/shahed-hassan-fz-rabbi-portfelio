'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        'React.js',
        'Next.js 15',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'HTML5 / CSS3',
        'Framer Motion',
        'DaisyUI',
      ],
    },
    {
      category: 'Backend & Database',
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB / Mongoose',
        'PostgreSQL',
        'MySQL',
        'REST APIs',
        'JWT Authentication',
      ],
    },
    {
      category: 'Tools & Languages',
      skills: [
        'Git / GitHub',
        'TypeScript',
        'C++',
        'Python',
        'VS Code',
        'Data Structures & Algorithms',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
          Expertise across the full MERN/PERN stack and modern web technologies
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-lg transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b border-[var(--border-color)] pb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 text-sm font-semibold rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;