'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaSearch,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaLayerGroup,
} from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & ML' | 'E-Commerce';
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  features: string[];
  challenges: string;
  contribution: string;
  futurePlans: string;
}

const allProjectsData: Project[] = [
  {
    id: '1',
    title: 'W2A Intelligence',
    subtitle: 'Smart Waste-to-Assets System',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    description: 'Municipal waste-to-assets allocation platform connecting local collection hubs with recycling facilities using computer vision classification and relational capacity scoring.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MySQL', 'Gemini Vision API'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/W2A-Intelligence',
    live: 'https://w2-a-intelligence-phi.vercel.app',
    features: [
      'Gemini Vision API integration for real-time recyclable category detection',
      'Relational capacity allocation matching batch quotas with registered recyclers',
      'Role-based administrative dashboards for municipal audit trails',
    ],
    contribution: 'Architected the 3NF relational database schema in MySQL, implemented server-side capacity scoring, and engineered Gemini Vision classification routes.',
    challenges: 'Designing a 3NF-normalized relational schema in MySQL and creating an automated allocation engine balancing factory capacity in real time.',
    futurePlans: 'Integrate IoT smart-bin weight telemetry sensors and generate downloadable carbon credit certificates.',
  },
  {
    id: '2',
    title: 'DriveFleet',
    subtitle: 'Full-Stack Car Rental Platform',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
    description: 'End-to-end vehicle booking and inventory management platform featuring Google OAuth + JWT authentication, role-based route guards, and scheduling workflows.',
    technologies: ['Next.js 15', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'BetterAuth', 'Tailwind CSS'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/DriveFleet',
    live: 'https://drivefleet-nine.vercel.app',
    features: [
      'Google OAuth and JWT session management using HTTP-only cookies',
      'Role-protected customer and fleet manager dashboards',
      'Atomic vehicle reservation workflows preventing double bookings',
    ],
    contribution: 'Engineered the authentication lifecycle, built backend inventory REST APIs, and structured dynamic vehicle filter interfaces with Next.js 15.',
    challenges: 'Managing secure cross-origin HTTP-only cookie sessions and preventing overlapping vehicle reservations using atomic database operations.',
    futurePlans: 'Implement automated payment processing (Stripe / SSLCommerz) and GPS driver tracking.',
  },
  {
    id: '3',
    title: 'Fable',
    subtitle: 'Digital Ebook Marketplace & Reader',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    description: 'Multi-role digital book marketplace featuring Stripe checkouts, asynchronous webhook order fulfillment, author sales analytics, and personalized digital libraries.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/Ebook-Store',
    live: 'https://ebook-store-steel.vercel.app/',
    features: [
      'Stripe Payment Gateway checkout with secure webhook order verification',
      'Author portal for catalog management, sales insights, and revenue tracking',
      'Protected digital reading shelf with synchronized reading states',
    ],
    contribution: 'Constructed asynchronous Stripe webhook pipelines for instant fulfillment, designed the MongoDB digital library schemas, and built reader interfaces.',
    challenges: 'Handling asynchronous Stripe webhook lifecycles securely to unlock digital books immediately while maintaining transactional integrity.',
    futurePlans: 'Add interactive audio-book narration player support and vector-based personalized reading recommendations.',
  },
  {
    id: '4',
    title: 'Loop Feedback Analysis',
    subtitle: 'Automated Sentiment & Insights Engine',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    description: 'Automated customer feedback analysis platform designed to process qualitative reviews, analyze sentiment trends, and generate metric dashboards.',
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/Loop-Feedback-Analysis',
    live: 'https://ebook-store-steel.vercel.app/',
    features: [
      'Unstructured feedback text ingestion and sentiment categorization',
      'Interactive visual metrics and sentiment distribution charts with Recharts',
      'High-performance aggregation pipelines for rapid metric querying',
    ],
    contribution: 'Developed full-stack API aggregation routes in Node.js/Express, designed optimized MongoDB indexing, and created interactive charting components.',
    challenges: 'Designing real-time feedback aggregation pipelines that transform unstructured user reviews into quantifiable sentiment metrics without query bottleneck.',
    futurePlans: 'Implement automated webhook alerts for negative sentiment spikes and integrate Slack/Discord ingestion connectors.',
  },
  
];

const Projects: React.FC = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [archiveCategory, setArchiveCategory] = useState<string>('All');
  const [archiveSearch, setArchiveSearch] = useState<string>('');

  // Lock body scroll when archive or modal is open
  useEffect(() => {
    if (isArchiveOpen || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isArchiveOpen, selectedProject]);

  // Close archive if user clicks a navbar link (#about, #contact, etc.)
  useEffect(() => {
    const handleHashChange = () => setIsArchiveOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProject) setSelectedProject(null);
        else if (isArchiveOpen) setIsArchiveOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isArchiveOpen, selectedProject]);

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    return {
      All: allProjectsData.length,
      'Full-Stack': allProjectsData.filter((p) => p.category === 'Full-Stack').length,
      'AI & ML': allProjectsData.filter((p) => p.category === 'AI & ML').length,
      'E-Commerce': allProjectsData.filter((p) => p.category === 'E-Commerce').length,
    };
  }, []);

  // Filtered archive records
  const filteredArchiveProjects = useMemo(() => {
    return allProjectsData.filter((project) => {
      const matchesCat =
        archiveCategory === 'All' || project.category === archiveCategory;
      const q = archiveSearch.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [archiveCategory, archiveSearch]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Main Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          <FaLayerGroup /> Selected Projects
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)]">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="mt-3 text-[var(--text-muted)] text-sm sm:text-base max-w-2xl">
          A showcase of full-stack web applications, AI integrations, and database architectures built with high engineering standards.
        </p>
      </motion.div>

      {/* Primary 4 Featured Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-7"
      >
        {allProjectsData.slice(0, 4).map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-52 overflow-hidden bg-slate-900/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold bg-black/70 backdrop-blur-md text-white rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-[var(--text-muted)] text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-[11px] font-semibold text-[var(--text-muted)]">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-[var(--border-color)]/60 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(project)}
                type="button"
                className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                View Case Study →
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-blue-600 hover:border-blue-500 transition-all text-sm cursor-pointer"
                  title="Source Code"
                >
                  <FaGithub />
                </a>

                {project.live && project.live !== project.github && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xs transition-all shadow-sm cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Right: "View all projects" Link Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={() => setIsArchiveOpen(true)}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all cursor-pointer py-2 px-3 rounded-xl hover:bg-blue-500/10"
        >
          <span>View all projects ({allProjectsData.length})</span>
          <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>

      {/* =========================================================================
          ARCHIVE INDEX WINDOW (Placed at z-40 so fixed Navbar at z-50 stays ON TOP)
         ========================================================================= */}
      <AnimatePresence>
        {isArchiveOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[var(--bg-main)] px-4 pt-24 pb-16 sm:px-8 lg:px-16"
          >
            <div className="max-w-7xl mx-auto">
              {/* Secondary Return Bar */}
              <div className="mb-8 flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                <button
                  type="button"
                  onClick={() => setIsArchiveOpen(false)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-blue-500 transition-colors cursor-pointer"
                >
                  <FaArrowLeft className="text-xs" />
                  <span>Return to Portfolio</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsArchiveOpen(false)}
                  aria-label="Close Archive"
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                >
                  <FaTimes className="text-base" />
                </button>
              </div>

              {/* Archive Index Header Title */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-3">
                  <FaLayerGroup className="text-blue-500 text-xs" />
                  <span>Archive Index</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-main)]">
                  All Projects
                </h1>
                <p className="mt-3 text-[var(--text-muted)] text-sm sm:text-base max-w-2xl leading-relaxed">
                  A complete log of built modules, production services, and prototype application platforms.
                </p>
              </div>

              {/* Archive Layout: Sidebar + Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
                {/* Left Sidebar: Categories */}
                <aside className="space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Categories
                  </h4>

                  <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                    {(['All', 'Full-Stack', 'AI & ML', 'E-Commerce'] as const).map((cat) => {
                      const count = categoryCounts[cat];
                      const isActive = archiveCategory === cat;
                      const label = cat === 'All' ? 'All Projects' : cat;

                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setArchiveCategory(cat)}
                          className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                            isActive
                              ? 'bg-[var(--bg-card)] text-blue-600 dark:text-blue-400 border border-blue-500/30 shadow-sm'
                              : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]/50'
                          }`}
                        >
                          <span>{label}</span>
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              isActive
                                ? 'bg-blue-600 text-white'
                                : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)]'
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </aside>

                {/* Right Area: Search + Cards Grid */}
                <main className="space-y-6">
                  {/* Search Bar */}
                  <div className="relative w-full">
                    <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]" />
                    <input
                      type="text"
                      value={archiveSearch}
                      onChange={(e) => setArchiveSearch(e.target.value)}
                      placeholder="Search archive by keyword, technology, or title..."
                      className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 outline-none focus:border-blue-500 transition-colors placeholder:text-[var(--text-muted)]"
                    />
                    {archiveSearch && (
                      <button
                        type="button"
                        onClick={() => setArchiveSearch('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>

                  {/* Empty Search Result */}
                  {filteredArchiveProjects.length === 0 ? (
                    <div className="text-center py-16 px-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                      <h3 className="text-base font-bold text-[var(--text-main)]">No archive records found</h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1 max-w-sm mx-auto">
                        No projects matched &quot;{archiveSearch}&quot; under &quot;{archiveCategory}&quot;.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setArchiveSearch('');
                          setArchiveCategory('All');
                        }}
                        className="mt-4 px-4 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                      >
                        Reset Filter
                      </button>
                    </div>
                  ) : (
                    /* Archive Cards Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredArchiveProjects.map((project) => (
                        <div
                          key={project.id}
                          className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative w-full h-44 overflow-hidden bg-slate-900/40">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[10px] font-semibold bg-black/70 backdrop-blur-md text-white rounded-full border border-white/10">
                                {project.category}
                              </span>
                            </div>

                            <div className="p-5">
                              <div className="mb-2">
                                <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {project.title}
                                </h3>
                                <p className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                                  {project.subtitle}
                                </p>
                              </div>

                              <p className="text-[var(--text-muted)] text-xs mb-4 leading-relaxed line-clamp-2">
                                {project.description}
                              </p>

                              <div className="flex flex-wrap items-center gap-1.5 mb-1">
                                {project.technologies.slice(0, 4).map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-0.5 text-[10px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-500/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 4 && (
                                  <span className="px-1.5 py-0.5 text-[10px] font-semibold text-[var(--text-muted)]">
                                    +{project.technologies.length - 4}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="px-5 pb-5 pt-2 border-t border-[var(--border-color)]/60 flex items-center justify-between gap-3">
                            <button
                              onClick={() => setSelectedProject(project)}
                              type="button"
                              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                            >
                              Case Study →
                            </button>

                            <div className="flex items-center gap-2">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} GitHub repository`}
                                className="p-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-blue-600 hover:border-blue-500 transition-all text-xs cursor-pointer"
                                title="Source Code"
                              >
                                <FaGithub />
                              </a>

                              {project.live && project.live !== project.github && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${project.title} live demo`}
                                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-[11px] transition-all shadow-sm cursor-pointer"
                                >
                                  <FaExternalLinkAlt className="text-[9px]" />
                                  <span>Demo</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </main>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          DEEP CASE STUDY MODAL (z-[200] so it sits above everything)
         ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] text-lg transition-colors cursor-pointer rounded-lg hover:bg-[var(--bg-main)]"
                aria-label="Close modal"
                type="button"
              >
                <FaTimes />
              </button>

              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-main)] mt-1 pr-8">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-5">
                {selectedProject.subtitle}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Built With
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-[var(--text-main)] text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2.5">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-main)]">
                      <FaCheckCircle className="text-blue-500 mt-0.5 text-xs flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contribution */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  My Contribution & Role
                </h4>
                <p className="text-[var(--text-main)] text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.contribution}
                </p>
              </div>

              {/* Challenges */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Key Challenges & Architecture
                </h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.challenges}
                </p>
              </div>

              {/* Roadmap */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Roadmap & Future Improvements
                </h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.futurePlans}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--border-color)]">
                {selectedProject.live && selectedProject.live !== selectedProject.github && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Preview</span>
                  </a>
                )}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-blue-500 hover:text-blue-500 rounded-xl font-semibold text-sm transition-all cursor-pointer"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub Repository</span>
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