"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle, Rocket, Code, Smartphone, Server } from "lucide-react";

export default function AboutSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-16">
      {/* About Me Section */}
      <section className="text-center">
        <p className="text-sm text-yellow-500 inline-block px-4 py-1 rounded-full border border-yellow-500">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          A <span className="text-yellow-500">passionate</span> developer crafting <br />
          seamless <span className="text-yellow-500">web & mobile experiences</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Specializing in frontend development, Node.js backend solutions, and mobile app development with React Native.
        </p>
      </section>

      {/* Mission, Vision, Focus Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "My Mission", text: "To build high-performance, scalable, and user-friendly web and mobile applications that solve real-world problems." },
          { title: "My Vision", text: "Empowering businesses with modern tech stacks, creating smooth digital experiences across web and mobile platforms." },
          { title: "My Focus", text: "Delivering clean, maintainable code and scalable architectures for web applications, backend APIs, and mobile apps." },
        ].map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="text-yellow-500 text-3xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Dream Project CTA */}
      <section className="mt-12 bg-gray-900 p-10 rounded-lg text-center">
        <p className="text-sm text-yellow-500 inline-block px-4 py-1 rounded-full border border-yellow-500">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Have a <span className="text-yellow-500">dream project?</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Whether it's a modern web app, a robust backend system, or a cross-platform mobile app, I help businesses build fast, scalable, and maintainable solutions.
        </p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition">
          Let's Build Together
        </button>
      </section>

      {/* FAQ Section */}
      <section className="mt-12 text-center">
        <p className="text-sm text-yellow-500 inline-block px-4 py-1 rounded-full border border-yellow-500">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">Your Questions, My Answers</h2>
        <p className="text-gray-400 mt-3">
          Have questions? Here are some common inquiries about my development services.
        </p>

        {/* FAQ List */}
        <div className="mt-6 max-w-2xl mx-auto">
          {[
            "How do you approach frontend development?",
            "What backend technologies do you use?",
            "Can you build cross-platform mobile apps?",
            "How do you ensure performance and scalability?",
          ].map((question, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md my-2">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-200">{question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="text-yellow-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              {openFAQ === index && (
                <p className="mt-3 text-gray-400">
                  {/* Customize FAQ answers */}
                  {index === 0 && "I specialize in React and Next.js for building high-performance, responsive, and SEO-friendly user interfaces."}
                  {index === 1 && "I primarily use Node.js with Express, MongoDB, and Firebase to build scalable and efficient backend architectures."}
                  {index === 2 && "Yes! I develop cross-platform mobile applications using React Native and Expo for seamless iOS & Android experiences."}
                  {index === 3 && "I follow industry best practices, including code optimization, caching strategies, and scalable infrastructure using cloud solutions."}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>All rights reserved, ©2025</p>
        <div className="mt-3 flex justify-center gap-6">
          <a href="#" className="hover:text-white">Changelog</a>
          <a href="#" className="hover:text-white">License</a>
        </div>
      </footer>
    </div>
  );
}
