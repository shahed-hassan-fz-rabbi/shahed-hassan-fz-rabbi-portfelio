"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Side: Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Hello, I&apos;m Shahed Hassan
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Frontend Web Developer
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Building modern, responsive, and user-friendly web applications using React, Next.js, and Tailwind CSS.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <a
              href="/resume.pdf"
              download="Shahed_Resume.pdf"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-700 dark:text-gray-300">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
          <Image
            src="/profile.png"
            alt="Shahed Hassan"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}