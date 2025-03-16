"use client";

import { Code, ExternalLink, Smartphone, Server } from "lucide-react";

const projects = [
  {
    title: "Task Management App",
    description: "A full-stack task management application with real-time collaboration.",
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
    icon: <Code className="text-blue-500 text-4xl" />,
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce platform with secure payments and product management.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    icon: <Server className="text-green-500 text-4xl" />,
  },
  {
    title: "Mobile Expense Tracker",
    description: "A React Native mobile app for tracking expenses with Firebase authentication.",
    techStack: ["React Native", "Expo", "Firebase", "Tailwind CSS"],
    link: "#",
    icon: <Smartphone className="text-yellow-500 text-4xl" />,
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-12" id="projects">
      <div className="text-center">
        <p className="text-sm text-yellow-500 inline-block px-4 py-1 rounded-full border border-yellow-500">
          Recent Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Showcasing My <span className="text-yellow-500">Latest Work</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Here are some of my recent projects, ranging from full-stack web applications to cross-platform mobile apps.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">{project.icon}</div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="mt-4 inline-block text-yellow-500 hover:text-yellow-600 font-semibold flex items-center gap-2">
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
