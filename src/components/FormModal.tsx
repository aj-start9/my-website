"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { X, Mail, User, MessageCircle } from "lucide-react";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define props for the modal component
interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose(); // Close modal after submission
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white bg-opacity-90 shadow-lg p-6 rounded-2xl w-96">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">Let's Connect</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition text-gray-800"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition text-gray-800"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 text-gray-500" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition resize-none text-gray-800"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
