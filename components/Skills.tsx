'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'C++', 'Java', 'PHP', 'SQL'],
    },
    {
      category: 'Frontend Development',
      skills: ['Next.js (App Router)', 'React.js', 'Tailwind CSS', 'DaisyUI', 'Framer Motion', 'Recharts'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Stripe API', 'Prisma ORM', 'Better Auth', 'JWT'],
    },
    {
      category: 'Databases & Cloud Tools',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Render'],
    },
    {
      category: 'Core CS & Problem Solving',
      skills: ['Data Structures & Algorithms (500+ Solved)', 'OOP', 'Problem Solving', 'System Design Basics'],
    },
    {
      category: 'Design Tools',
      skills: ['Adobe Photoshop CC', 'Adobe Illustrator CC', 'UI/UX Design'],
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
          Technologies and tools I use in production applications
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-lg transition-colors"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400 border-b border-[var(--border-color)] pb-2">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:scale-105 transition-transform cursor-default"
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