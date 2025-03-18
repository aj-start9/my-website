"use client";

import { Code, ExternalLink, Smartphone, Server } from "lucide-react";

const projects = [
  {
    title: "Marmin",
    description: "AI-powered application built with Next.js.",
    techStack: ["Next.js", "AI", "Tailwind CSS"],
    link: "https://app.marmin.ai/login",
    icon: <Code className="text-blue-500 text-4xl" />,
  },
  {
    title: "Dotpe",
    description: "Barista store platform for seamless ordering.",
    techStack: ["Next.js", "Commerce", "Tailwind CSS"],
    link: "https://barista.dotpe.in/order",
    icon: <Server className="text-green-500 text-4xl" />,
  },
  {
    title: "PayU",
    description: "Secure and scalable online payments platform.",
    techStack: ["Next.js", "Payments", "Node.js"],
    link: "https://payu.in/",
    icon: <Server className="text-green-500 text-4xl" />,
  },
  {
    title: "OpenMic",
    description: "AI-powered music collaboration platform.",
    techStack: ["Next.js", "AI", "Music"],
    link: "https://www.openmic.ai/",
    icon: <Code className="text-blue-500 text-4xl" />,
  },
  {
    title: "One Percent Club (Web App)",
    description: "Exclusive community-driven platform.",
    techStack: ["Next.js", "Community", "Tailwind CSS"],
    link: "https://onepercentclub.io/",
    icon: <Server className="text-green-500 text-4xl" />,
  },
  {
    title: "Freedom App (Mobile App)",
    description: "A React Native app available on Google Play Store.",
    techStack: ["React Native", "Expo", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.freedom.android&hl=en_IN",
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
            <a href={project.link} className="mt-4 inline-block text-yellow-500 hover:text-yellow-600 font-semibold flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
