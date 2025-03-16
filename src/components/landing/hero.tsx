"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Server, BadgeCheck, Brain, Cpu } from "lucide-react"; // Lucide icons
import FormModal from "../FormModal";
import { useState } from "react";

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 bg-white">
                <div className="text-xl font-semibold"></div>
                <ul className="hidden md:flex space-x-6 text-gray-600">
                    <li className="hover:text-gray-900 cursor-pointer" onClick={() => { scrollToSection('home') }}>Home</li>
                    <li className="hover:text-gray-900 cursor-pointer" onClick={() => { scrollToSection('projects') }}>Projects</li>
                    <li className="hover:text-gray-900 cursor-pointer" onClick={() => { scrollToSection('testimonials') }}>Testimonials</li>
                </ul>
                <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                    Hire Me
                </button>
            </nav>

            {/* Hero Section */}
            <header className="text-center mt-10 px-4" id="home">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-300"></div>
                <p className="mt-2 text-gray-600">Available for Freelance Work</p>
                <h1 className="text-3xl md:text-4xl font-bold mt-4">
                    Expert in <span className="text-yellow-500">Frontend, Node.js, React Native & AI Integration</span>
                </h1>
                <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                    I build fast, scalable web and mobile applications using modern frontend technologies, robust backend solutions with Node.js, React Native for mobile apps, and AI-powered integrations.
                </p>
                <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700" onClick={() => setIsModalOpen(true)}>
                    Get in Touch
                </button>
            </header>

            {/* Tech Stack Section */}
            <section className="mt-12 px-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Tech Stack I Work With:</h2>

                <motion.div
                    className="flex flex-wrap justify-center gap-4 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* React */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Code className="text-gray-600 text-lg" /> React
                    </span>

                    {/* Next.js */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Code className="text-gray-600 text-lg" /> Next.js
                    </span>

                    {/* Tailwind CSS */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Code className="text-gray-600 text-lg" /> Tailwind CSS
                    </span>

                    {/* TypeScript */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Code className="text-gray-600 text-lg" /> TypeScript
                    </span>

                    {/* Node.js */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Server className="text-gray-600 text-lg" /> Node.js
                    </span>

                    {/* Express.js */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Server className="text-gray-600 text-lg" /> Express.js
                    </span>

                    {/* MongoDB */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Server className="text-gray-600 text-lg" /> MongoDB
                    </span>

                    {/* Firebase */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Server className="text-gray-600 text-lg" /> Firebase
                    </span>

                    {/* Clerk */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Server className="text-gray-600 text-lg" /> Clerk
                    </span>

                    {/* Framer Motion */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Server className="text-gray-600 text-lg" /> Framer Motion
                    </span>

                    {/* ShadCN */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Server className="text-gray-600 text-lg" /> ShadCN
                    </span>

                    {/* React Native */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Smartphone className="text-gray-600 text-lg" /> React Native
                    </span>

                    {/* Expo */}
                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Smartphone className="text-gray-600 text-lg" /> Expo
                    </span>

                    <span className="flex items-center gap-2 text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-md">
                        <Brain className="text-gray-600 text-lg" /> AI Integration
                    </span>
                </motion.div>
            </section>



            {/* What Makes Me Different Section */}
            <section className="mt-16 text-center px-4 py-16 bg-gray-900 text-white rounded-lg relative">
                {/* Centered Large Logo */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 p-6 rounded-full shadow-lg">
                    <BadgeCheck className="text-yellow-500 text-6xl" />
                </div>

                <h2 className="text-3xl font-semibold mt-12">
                    What makes me <span className="text-yellow-500">different?</span>
                </h2>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                    My approach combines technical expertise, problem-solving skills, and a user-focused mindset to create seamless digital experiences.
                </p>

                {/* Unique Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg flex flex-col items-center text-center">
                        <Code className="text-yellow-500 text-5xl mb-4" />
                        <h3 className="font-semibold text-lg">Performance-Driven Frontend</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            I build fast, responsive, and optimized web applications with React, Next.js, and Tailwind CSS.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg flex flex-col items-center text-center">
                        <Server className="text-yellow-500 text-5xl mb-4" />
                        <h3 className="font-semibold text-lg">Scalable Backend Solutions</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            I develop robust, secure, and scalable backend services with Node.js, Express, and databases.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg flex flex-col items-center text-center">
                        <Smartphone className="text-yellow-500 text-5xl mb-4" />
                        <h3 className="font-semibold text-lg">Mobile App Development</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Creating high-performance mobile applications with React Native and Expo.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg flex flex-col items-center text-center">
                        <BadgeCheck className="text-yellow-500 text-5xl mb-4" />
                        <h3 className="font-semibold text-lg">Attention to Detail</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Every project I work on is crafted with precision, focusing on UX/UI and smooth user experiences.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg flex flex-col items-center text-center">
                        <BadgeCheck className="text-yellow-500 text-5xl mb-4" />
                        <h3 className="font-semibold text-lg">AI Integration</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Implementing AI-powered features, automation, and intelligent solutions for modern applications.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg flex flex-col items-center text-center">
                        <BadgeCheck className="text-yellow-500 text-5xl mb-4" />
                        <h3 className="font-semibold text-lg">End-to-End Development</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            From UI/UX to backend architecture, I ensure smooth project execution with clean and maintainable code.
                        </p>
                    </div>
                </div>
            </section>



            {/* Services I Offer Section */}
            <section className="mt-16 text-center px-4 py-16">
                <h2 className="text-4xl font-bold text-gray-900">Services I Offer</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    I provide high-quality development services focusing on scalability, performance, and user experience.
                    Whether it's a sleek frontend, a robust backend, a feature-rich mobile app, or AI-powered solutions, I ensure seamless execution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {/* Frontend Development */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 transform transition duration-300 hover:scale-105">
                        <Code className="text-blue-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
                        <p className="text-gray-600 mt-2">
                            Building pixel-perfect, fast, and responsive UIs using <strong>React, Next.js, and Tailwind CSS</strong>.
                        </p>
                        <ul className="text-gray-500 mt-4 text-sm list-disc list-inside">
                            <li>Modern UI/UX design principles</li>
                            <li>SEO-friendly static & dynamic pages</li>
                            <li>Performance optimization</li>
                        </ul>
                    </div>

                    {/* Backend Development */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 transform transition duration-300 hover:scale-105">
                        <Server className="text-green-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900">Backend & API Development</h3>
                        <p className="text-gray-600 mt-2">
                            Creating <strong>secure, scalable, and high-performance APIs</strong> using <strong>Node.js, Express, and MongoDB</strong>.
                        </p>
                        <ul className="text-gray-500 mt-4 text-sm list-disc list-inside">
                            <li>RESTful & GraphQL APIs</li>
                            <li>Authentication & authorization (JWT, Clerk)</li>
                            <li>Database modeling & optimization</li>
                        </ul>
                    </div>

                    {/* Mobile Development */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 transform transition duration-300 hover:scale-105">
                        <Smartphone className="text-yellow-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900">Mobile App Development</h3>
                        <p className="text-gray-600 mt-2">
                            Building <strong>cross-platform mobile applications</strong> using <strong>React Native & Expo</strong> for a seamless experience.
                        </p>
                        <ul className="text-gray-500 mt-4 text-sm list-disc list-inside">
                            <li>Custom UI components</li>
                            <li>Native API integrations</li>
                            <li>App store deployment (iOS & Android)</li>
                        </ul>
                    </div>

                    {/* AI Integration */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 transform transition duration-300 hover:scale-105">
                        <Cpu className="text-purple-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900">AI Integration</h3>
                        <p className="text-gray-600 mt-2">
                            Implementing <strong>AI-powered features, automation, and intelligent solutions</strong> to enhance applications.
                        </p>
                        <ul className="text-gray-500 mt-4 text-sm list-disc list-inside">
                            <li>AI-driven chatbots & virtual assistants</li>
                            <li>Machine learning model integration</li>
                            <li>Predictive analytics & automation</li>
                        </ul>
                    </div>
                </div>
            </section>

            <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
