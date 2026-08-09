'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Awards: React.FC = () => {
  const awards = [
    {
      title: 'NEXT Gen Hackathon',
      achievement: 'Top 20 Finalist',
      description: 'Competed among hundreds of participants nationwide and secured a Top 20 position.',
      year: '2026',
      icon: '🏆',
    },
    {
      title: 'ICT Olympiad 2026',
      achievement: 'Semifinalist',
      description: 'Qualified to the semifinal round of the national-level ICT Olympiad.',
      year: '2026',
      icon: '🥇',
    },
    {
      title: 'Complete MERN Stack Development Course',
      achievement: 'In Progress',
      description: 'Advanced full-stack development certification from Programming Hero.',
      year: '2024-2025',
      icon: '📚',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="awards" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Awards & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Recognition and accomplishments in competitive programming and development
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 hover:border-accent-primary/50 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{award.icon}</div>
            
            <h3 className="text-2xl font-bold mb-2 text-white">
              {award.title}
            </h3>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-accent-primary/20 text-accent-primary text-sm font-semibold rounded-full border border-accent-primary/30">
                {award.achievement}
              </span>
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">
              {award.description}
            </p>

            <p className="text-slate-500 text-sm font-semibold">
              {award.year}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Awards;
