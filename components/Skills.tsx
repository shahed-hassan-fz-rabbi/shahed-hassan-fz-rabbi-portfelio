'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js 15', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'DaisyUI', 'Framer Motion'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT Authentication', 'REST APIs', 'Cookie-based Sessions'],
    },
    {
      category: 'Database & Tools',
      skills: ['MongoDB Atlas', 'Git/GitHub', 'VS Code', 'Vercel', 'Render', 'Adobe Illustrator', 'Adobe Photoshop'],
    },
    {
      category: 'Programming Languages',
      skills: ['JavaScript/TypeScript', 'Python', 'Java', 'C++', 'PHP', 'HTML/CSS'],
    },
    {
      category: 'Core Competencies',
      skills: ['Data Structures & Algorithms', 'OOP Principles', 'Problem Solving', 'Full Stack Development', 'Responsive Design'],
    },
    {
      category: 'Specializations',
      skills: ['MERN Stack', 'Full Stack Web Development', 'API Development', 'Authentication Systems', 'UI/UX Design'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-accent-primary">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="text-slate-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent-secondary rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
