"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer";
  const typingSpeed = 150;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(18,247,255,0.1)] dark:bg-[rgba(18,247,255,0.05)]"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[rgba(18,247,255,0.6)] blur-[100px] dark:bg-[rgba(18,247,255,0.3)]"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/30 blur-[100px] dark:bg-blue-500/20"></div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-14 sm:mt-0 mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Thanathipan
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-10">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 mt-4">
            I build modern, responsive web applications using Next.js, React, TypeScript, and more.
            Let's create something amazing together!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-blue-700">
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://drive.google.com/file/d/1tfxRrYmInEyenPLTysTwRYcLGX9QJXeu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Thanathipan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/t-thanathipan-b36483314/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Content (Profile Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex justify-center lg:w-1/2"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-[rgba(18,247,255,0.8)] p-1 shadow-xl animate-pulse">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Thanathipan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-[rgba(18,247,255,0.3)] rounded-full blur-xl -z-10"></div>
            <div className="absolute -inset-8 bg-[rgba(18,247,255,0.2)] rounded-full blur-2xl -z-20 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
