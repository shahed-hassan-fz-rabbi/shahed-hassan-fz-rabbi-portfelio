'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js / Next.js', level: 85 },
        { name: 'JavaScript (ES6+) / TypeScript', level: 80 },
        { name: 'Tailwind CSS / HTML5 / CSS3', level: 90 },
        { name: 'Framer Motion / DaisyUI', level: 75 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js / Express.js', level: 75 },
        { name: 'MongoDB / Mongoose', level: 75 },
        { name: 'JWT Authentication / REST APIs', level: 80 },
      ],
    },
    {
      category: 'Tools & Languages',
      skills: [
        { name: 'Git / GitHub', level: 85 },
        { name: 'Python / Java / C++', level: 65 },
        { name: 'Data Structures & Algorithms', level: 70 },
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
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Expertise across the full MERN stack and modern web technologies
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
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-6 text-accent-primary">{cat.category}</h3>
            <div className="space-y-5">
              {cat.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2 text-sm font-medium text-slate-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-accent-primary to-accent-secondary h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;