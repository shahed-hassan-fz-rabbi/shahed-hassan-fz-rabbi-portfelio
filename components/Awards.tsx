'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="awards" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
          Awards & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
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
            className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 shadow-lg hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="text-5xl mb-4">{award.icon}</div>

              <h3 className="text-2xl font-bold mb-2 text-[var(--text-main)]">
                {award.title}
              </h3>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full border border-blue-500/20">
                  {award.achievement}
                </span>
              </div>

              <p className="text-[var(--text-muted)] mb-4 leading-relaxed text-sm md:text-base">
                {award.description}
              </p>
            </div>

            <p className="text-[var(--text-muted)] opacity-75 text-sm font-semibold mt-2">
              {award.year}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Awards;