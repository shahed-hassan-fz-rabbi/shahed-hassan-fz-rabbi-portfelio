'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    role: 'Intern',
    organization: 'Bangladesh Youth Skill Development Organization',
    duration: 'June 2026 -- Present',
    responsibilities: [
      'Supporting youth skill-development programs and technical communication.',
      'Streamlining digital workflows, program execution, and project tracking.',
    ],
  },
  {
    role: 'Executive Member',
    organization: 'CSE Department Development Club, Comilla University',
    duration: 'Present',
    responsibilities: [
      'Organizing departmental hackathons, workshops, and coding initiatives.',
      'Mentoring juniors in algorithmic problem-solving and software engineering basics.',
    ],
  },
  {
    role: 'President -- Media & Publication Wing',
    organization: 'Finding Mental Peace Club',
    duration: '01/2024 -- 01/2025',
    responsibilities: [
      'Directed campus-wide media outreach and creative publication campaigns.',
      'Managed digital content strategy and student mental health initiatives.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
          Work & <span className="gradient-text">Leadership</span>
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
          Internship experience and university club leadership roles
        </p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 md:p-8 shadow-lg hover:border-blue-500/40 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 text-lg">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)]">{exp.role}</h3>
                  <p className="text-blue-500 text-sm font-semibold">{exp.organization}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] self-start md:self-auto">
                {exp.duration}
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1 text-sm text-[var(--text-muted)] leading-relaxed">
              {exp.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;