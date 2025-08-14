"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Code,
  Paintbrush,
  Smartphone,
  Server,
  Shield,
  Rocket,
} from "lucide-react";

const ServicesSection = ({ id }) => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Code />,
      title: "Web Development",
      description:
        "Responsive and modern websites using React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <Paintbrush />,
      title: "UI/UX Design",
      description:
        "Clean, user-friendly interfaces with accessibility and aesthetics in mind.",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Friendly",
      description:
        "Optimized for all screen sizes including phones and tablets.",
    },
    {
      icon: <Server />,
      title: "Backend Integration",
      description: "APIs with Node.js, Express, Firebase, and MongoDB.",
    },
    {
      icon: <Shield />,
      title: "Secure Deployment",
      description:
        "Deployed with HTTPS, JWT auth, and services like Firebase or Vercel.",
    },
    {
      icon: <Rocket />,
      title: "Performance Optimization",
      description:
        "Lazy loading, code splitting, image compression, and fast load times.",
    },
  ];

  return (
    <section
      id={id}
      className={`w-full py-16 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Available for Work Banner */}
        <div
          className={`mb-12 p-4 rounded-lg text-center ${
            theme === "dark"
              ? "bg-indigo-900/50 border border-indigo-700"
              : "bg-indigo-100 border border-indigo-200"
          }`}
        >
          <div className="inline-flex items-center justify-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  theme === "dark" ? "bg-green-400" : "bg-green-500"
                } opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  theme === "dark" ? "bg-green-500" : "bg-green-600"
                }`}
              ></span>
            </span>
            <span className="font-medium text-lg">
              Currently available for freelance work & new opportunities
            </span>
          </div>
          <p className="mt-2 text-sm">
            Let's build something amazing together! Get in touch to discuss
            your project.
          </p>
        </div>

        {/* Services Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition duration-300 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  theme === "dark" ? "bg-indigo-500" : "bg-indigo-100"
                }`}
              >
                {React.cloneElement(service.icon, {
                  className: `h-10 w-10 ${
                    theme === "dark" ? "text-white" : "text-indigo-600"
                  }`,
                })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
