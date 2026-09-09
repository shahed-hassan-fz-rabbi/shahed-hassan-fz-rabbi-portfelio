'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaInfoCircle } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  challenges: string;
  futurePlans: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'W2A Intelligence -- Smart Waste-to-Assets System',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    description: 'Academic project at Comilla University connecting municipal waste collection to recycling partners using Gemini AI and real-time allocation.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MySQL', 'Gemini Vision API'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/W2A-Intelligence',
    live: 'https://w2-a-intelligence-phi.vercel.app',
    challenges: 'Designing a 3NF-normalized relational schema in MySQL and building an allocation algorithm matching batch capacity with recycling partner requirements in real-time.',
    futurePlans: 'Implement automated IoT smart bin sensor integration and expand carbon offset analytics with downloadable PDF reports.',
  },
  {
    id: '2',
    title: 'DriveFleet -- Full Stack Car Rental Platform',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
    description: 'End-to-end car rental web application with Google OAuth + JWT authentication, protected routes, reservation system, and full inventory management.',
    technologies: ['Next.js 15', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'BetterAuth', 'Tailwind CSS'],
    github: 'https://github.com/shahed-hassan-fz-rabbi',
    live: 'https://drivefleet-nine.vercel.app',
    challenges: 'Managing secure cross-origin HTTP-only cookie sessions and preventing overlapping reservations through atomic database operations.',
    futurePlans: 'Integrate automated payment gateway processing (SSLCommerz/Stripe) and live driver location tracking.',
  },
  {
    id: '3',
    title: 'Fable -- Ebook Sharing & Marketplace Platform',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    description: 'Multi-role digital book marketplace (Reader/Writer/Admin) featuring Stripe checkout, webhook order fulfillment, and author sales analytics.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/Ebook-Store',
    live: 'https://ebook-store-steel.vercel.app/',
    challenges: 'Handling asynchronous Stripe webhook lifecycles securely to unlock digital books and manage reader reading state synchronization.',
    futurePlans: 'Add audio-book narration player support and an AI-driven personalized reading recommendation engine.',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[var(--text-muted)] text-lg">
          Production and academic web applications built with modern stacks
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-lg hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-48 overflow-hidden bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--text-main)] line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs font-semibold text-[var(--text-muted)]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => setSelectedProject(project)}
                type="button"
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FaInfoCircle /> View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-red-500 text-xl transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4 pr-8">
                {selectedProject.title}
              </h3>

              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6 border border-[var(--border-color)]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[var(--text-main)] uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[var(--text-main)] uppercase tracking-wider mb-2">
                  Description
                </h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[var(--text-main)] uppercase tracking-wider mb-2">
                  Challenges Faced
                </h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.challenges}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[var(--text-main)] uppercase tracking-wider mb-2">
                  Future Plans & Potential Improvements
                </h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.futurePlans}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--border-color)]">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all shadow-md"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-blue-500 hover:text-blue-500 rounded-xl font-semibold text-sm transition-all"
                >
                  <FaGithub /> GitHub Repository
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;