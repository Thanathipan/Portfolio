"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-2xl">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-[rgba(18,247,255,0.4)] z-10 mix-blend-overlay"></div> */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(18,247,255,0.2)] to-blue-500/20 z-20"></div> */}
              <Image
                src="/profile.jpg"
                alt="Thanathipan"
                fill
                className="object-cover z-0"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-500/40 to-transparent z-30"></div>
            </div>
            {/* <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[rgba(18,247,255,0.3)] rounded-full blur-3xl -z-10"></div> */}
            {/* <div className="absolute -top-5 -left-5 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"></div> */}
            
            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full border-4 border-[rgba(18,247,255,0.6)] -z-10"></div>
            <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full border-4 border-blue-500/40 -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Full-Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I specialize in building robust and scalable applications using Next.js, React, 
              TypeScript, and Node.js. With a strong foundation in both frontend and backend 
              development, I create seamless user experiences while ensuring solid architecture.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 block md:hidden">
              My journey in software development has equipped me with a problem-solving mindset 
              and attention to detail. I'm constantly learning and adapting to new technologies 
              to deliver the best solutions for complex challenges.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[rgba(18,247,255,1)] hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">Computer Science</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Remote</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-[rgba(18,247,255,1)] hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Languages</h4>
                  <p className="text-gray-600 dark:text-gray-400">English</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}