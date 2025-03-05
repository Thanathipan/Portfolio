"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Code, Database, Server, Globe, GitBranch, Cloud, PenTool, Layers } from "lucide-react";

import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiMongodb, SiDocker, SiGithub, SiFigma, SiCanva, SiVercel } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="h-6 w-6 text-orange-500" />,
    skills: [
      {
        id: 1,
        name: "Next.js",
        icon: <SiNextdotjs className="h-4 w-4 text-orange-500" />,
      },
      {
        id: 2,
        name: "React",
        icon: <SiReact className="h-4 w-4 text-orange-500" />,
      },
      {
        id: 3,
        name: "TypeScript",
        icon: <SiTypescript className="h-4 w-4 text-orange-500" />,
      },
      {
        id: 4,
        name: "JavaScript",
        icon: <SiJavascript className="h-4 w-4 text-orange-500" />,
      },
      {
        id: 5,
        name: "HTML 5",
        icon: <SiHtml5 className="h-4 w-4 text-orange-500" />,
      },
      {
        id: 6,
        name: "CSS 3",
        icon: <SiCss3 className="h-4 w-4 text-orange-500" />,
      }
    ]
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-yellow-500" />,
    // skills: ["Node.js", "Express", "REST API"],
    skills: [
      {
        id: 1,
        name: "Node.js",
        icon: <SiNodedotjs className="h-4 w-4 text-yellow-500" />,
      },
      {
        id: 2,
        name: "Express",
        icon: <SiExpress className="h-4 w-4 text-yellow-500" />,
      },
    ]
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-green-500" />,
    skills: [
      {
        id: 1,
        name: "MongoDB",
        icon: <SiMongodb className="h-4 w-4 text-green-500" />,
      }
    ],
  },
  {
    title: "DevOps",
    icon: <Cloud className="h-6 w-6 text-blue-500" />,
    // skills: ["AWS", "Cloudinary", "Docker", "CI/CD", "Vercel"],
    skills: [
      {
        id: 1,
        name: "AWS",
        icon: <SiGithub className="h-4 w-4 text-blue-500" />,
      },
      {
        id: 2,
        name: "Cloudinary",
        icon: <SiGithub className="h-4 w-4 text-blue-500" />,
      },
      {
        id: 3,
        name: "Docker",
        icon: <SiDocker className="h-4 w-4 text-blue-500" />,
      },
      {
        id: 4,
        name: "CI/CD",
        icon: <SiGithub className="h-4 w-4 text-blue-500" />,
      },
      {
        id: 5,
        name: "Vercel",
        icon: <SiVercel className="h-4 w-4 text-blue-500" />,
      }
    ],
  },
  {
    title: "Version Control",
    icon: <GitBranch className="h-6 w-6 text-red-500" />,
    // skills: ["Git", "GitHub"],
    skills: [
      {
        id: 1,
        name: "Git",
        icon: <SiGithub className="h-4 w-4 text-red-500" />,
      },
      {
        id: 2,
        name: "GitHub",
        icon: <SiGithub className="h-4 w-4 text-red-500" />,
      }
    ],
  },
  {
    title: "Tools",
    icon: <PenTool className="h-6 w-6 text-purple-500" />,
    // skills: ["Figma", "Canva", "Google Workspace", "VS Code"],
    skills: [
      {
        id: 1,
        name: "Figma",
        icon: <SiFigma className="h-4 w-4 text-purple-500" />,
      },
      {
        id: 2,
        name: "Canva",
        icon: <SiCanva className="h-4 w-4 text-purple-500" />,
      },
      {
        id: 3,
        name: "Google Workspace",
        icon: <SiCanva className="h-4 w-4 text-purple-500" />,
      },
      {
        id: 4,
        name: "VS Code",
        icon: <SiCanva className="h-4 w-4 text-purple-500" />,
      }
    ],
  },
  {
    title: "Other",
    icon: <Globe className="h-6 w-6 text-pink-500" />,
    // skills: ["Responsive Design", "PWA", "SEO", "Web Accessibility"],
    skills: [
      {
        id: 1,
        name: "Responsive Design",
        icon: <Layers className="h-4 w-4 text-pink-500" />,
      },
    ]
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-2">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.id} className="flex items-center gap-4">
                        <div className="">{skill.icon}</div>
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}