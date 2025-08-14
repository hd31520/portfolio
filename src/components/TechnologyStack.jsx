"use client";

import { useRef, useLayoutEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaCcStripe,
  FaGithub,
} from "react-icons/fa";
import {
  SiVite,
  SiMongodb,
  SiShadcnui,
  SiNextdotjs,
  SiExpress,
  SiReactquery,
  SiDaisyui,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";

const TechnologyStack = () => {
  const { theme } = useTheme();
  const scrollerRef = useRef(null);
  const controls = useAnimationControls();
  const doubled = [];
  const animationProps = useRef({ x: 0, transition: {} });

  const technologies = [
    // Brand color icons (same in both modes)
    {
      name: "HTML5",
      icon: <FaHtml5 className="h-8 w-8 text-orange-500" />,
      description: "Semantic markup for web content structure",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="h-8 w-8 text-blue-500" />,
      description: "Styling and layout for modern web apps",
    },
    {
      name: "React",
      icon: <FaReact className="h-8 w-8 text-cyan-400" />,
      description: "Component-based UI library",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="h-8 w-8 text-sky-400" />,
      description: "Utility-first CSS framework",
    },
    {
      name: "DaisyUI",
      icon: <SiDaisyui className="h-8 w-8 text-[#5A21D6]" />,
      description: "Tailwind CSS component library",
    },
    {
      name: "Vite",
      icon: <SiVite className="h-8 w-8 text-[#646CFF]" />,
      description: "Next generation frontend tooling",
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase className="h-8 w-8 text-amber-400" />,
      description: "Backend-as-a-Service platform",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-8 w-8 text-green-500" />,
      description: "NoSQL document database",
    },
    {
      name: "TanStack Query",
      icon: <SiReactquery className="h-8 w-8 text-rose-500" />,
      description: "Data synchronization for React",
    },
    {
      name: "Stripe",
      icon: <FaCcStripe className="h-8 w-8 text-indigo-500" />,
      description: "Online payment processing",
    },

    // Adaptive color icons (change with theme)
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs
          className={`h-8 w-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        />
      ),
      description: "React framework for production",
    },
    {
      name: "Express.js",
      icon: (
        <SiExpress
          className={`h-8 w-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        />
      ),
      description: "Node.js web application framework",
    },
    {
      name: "ShadCN UI",
      icon: (
        <SiShadcnui
          className={`h-8 w-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        />
      ),
      description: "Beautifully designed components",
    },
    {
      name: "GitHub",
      icon: (
        <FaGithub
          className={`h-8 w-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        />
      ),
      description: "Version control and collaboration",
    },
    {
      name: "Vercel",
      icon: (
        <IoLogoVercel
          className={`h-8 w-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        />
      ),
      description: "Cloud platform for frontend",
    },
  ];

  doubled.push(...technologies, ...technologies);

  useLayoutEffect(() => {
    if (scrollerRef.current) {
      const scrollWidth = scrollerRef.current.scrollWidth / 2;
      animationProps.current = {
        x: -scrollWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      };
      controls.start(animationProps.current);
    }
  }, [controls]);

  const onHoverStart = () => controls.stop();
  const onHoverEnd = () => controls.start(animationProps.current);

  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            My Technology Stack
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Tools and technologies I use to build amazing projects
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollerRef}
            className="flex gap-6 w-max py-2"
            animate={controls}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
          >
            {doubled.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className={`flex-shrink-0 w-48 flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="mb-4 p-3 rounded-full">{tech.icon}</div>
                <h3
                  className={`text-lg font-semibold mb-1 text-center ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tech.name}
                </h3>
                <p
                  className={`text-sm text-center ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tech.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
