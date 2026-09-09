'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Awards: React.FC = () => {
  const awards = [
    {
      title: 'PROTICHAMP AI Championship 1.0',
      achievement: '1st Runner-Up',
      description: 'Secured 1st Runner-Up in the national-level AI championship in August 2026.',
      year: '2026',
      icon: '🥈',
    },
    {
      title: 'NEXT-Gen Hackathon-2025',
      achievement: 'Top 20 Finalist',
      description: 'Competed nationwide among top student developer teams and secured a Top 20 position.',
      year: '2025',
      icon: '🏆',
    },
    {
      title: 'National ICT Olympiad 2026',
      achievement: 'Semifinalist',
      description: 'Qualified to the semifinal stage of the prestigious nationwide ICT Olympiad.',
      year: '2026',
      icon: '🥇',
    },
    {
      title: 'Competitive Programming',
      achievement: '500+ Solved',
      description: 'Solved over 500 algorithmic problems across Codeforces (450+), LeetCode, and Beecrowd.',
      year: 'Active',
      icon: '⚡',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          Key <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
          Competitions, hackathons, and competitive programming highlights
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-lg hover:border-blue-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-4">{award.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-[var(--text-main)]">
                {award.title}
              </h3>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">
                  {award.achievement}
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-4">
                {award.description}
              </p>
            </div>
            <p className="text-[var(--text-muted)] text-xs font-semibold opacity-75">
              {award.year}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Awards;