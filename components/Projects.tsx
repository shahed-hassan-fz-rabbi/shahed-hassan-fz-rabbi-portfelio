'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  _id?: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const defaultProjects: Project[] = [
    {
      title: 'DriveFleet - Full Stack Car Rental Platform',
      description:
        'Complete car rental platform with Google OAuth + JWT authentication, protected private routes, secure cookie-based sessions. Full CRUD for car listings, booking system with personal dashboard, cancellation support, real-time search/filter. Deployed on Vercel & Render with Framer Motion animations.',
      technologies: ['Next.js 15', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/shahed-hassan-fz-rabbi',
      featured: true,
    },
    {
      title: 'Job Tracker Application',
      description:
        'Dynamic job application tracker with filtered views, status management, and event delegation patterns. Responsive UI with Tailwind CSS & DaisyUI. Supports add, update, and delete operations without page reload.',
      technologies: ['JavaScript', 'Tailwind CSS', 'DaisyUI', 'Event Delegation'],
      github: 'https://github.com/shahed-hassan-fz-rabbi',
      featured: true,
    },
    {
      title: 'G3 Architecture Website',
      description: 'Fully responsive architecture firm showcase website with modern design principles and clean layout. Professional portfolio site demonstrating responsive design expertise.',
      technologies: ['HTML5', 'CSS3', 'Responsive Design'],
      github: 'https://github.com/shahed-hassan-fz-rabbi',
      featured: false,
    },
    {
      title: 'Meal Management System',
      description: 'Meal planning application built with vanilla JavaScript featuring dynamic rendering, intuitive UI, and structured data management for meal organization.',
      technologies: ['Vanilla JavaScript', 'DOM Manipulation', 'Local Storage'],
      github: 'https://github.com/shahed-hassan-fz-rabbi',
      featured: false,
    },
    {
      title: 'TechWave Landing Page',
      description: 'Modern tech-focused landing page with responsive UI and interactive JavaScript-driven components. Clean design showcasing web technology products and services.',
      technologies: ['CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/shahed-hassan-fz-rabbi',
      featured: false,
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          setProjects(defaultProjects);
        }
      } catch (error) {
        console.log('Using default projects');
        setProjects(defaultProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
  const otherProjects = projects.filter((p) => !p.featured);
  const displayProjects = [...featuredProjects, ...otherProjects];

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Full-stack applications showcasing my MERN stack expertise
        </p>
      </motion.div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary"></div>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {displayProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 hover:border-accent-primary/50 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-secondary/0 group-hover:from-accent-primary/5 group-hover:to-accent-secondary/5 rounded-lg transition-all duration-300"></div>

              <div className="relative z-10">
                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-semibold bg-accent-primary/10 text-accent-primary border border-accent-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-primary hover:text-accent-secondary font-semibold text-sm transition-colors"
                    >
                      → View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-secondary hover:text-accent-primary font-semibold text-sm transition-colors"
                    >
                      → Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
