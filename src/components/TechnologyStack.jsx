"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
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
  const scrollerRef = useRef(null);
  const controls = useAnimationControls();
  const doubled = [];
  const animationProps = useRef({ x: 0, transition: {} });

  const technologies = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" />,
      description: "Semantic markup for web content structure",
      color: "bg-orange-500 text-white",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="h-8 w-8 text-[#1572B6]" />,
      description: "Styling and layout for modern web apps",
      color: "bg-blue-500 text-white",
    },
    {
      name: "React",
      icon: <FaReact className="h-8 w-8 text-[#61DAFB]" />,
      description: "Component-based UI library",
      color: "bg-cyan-600 text-white",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-8 w-8 text-black" />,
      description: "React framework for production",
      color: "bg-gray-800 text-white",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="h-8 w-8 text-[#06B6D4]" />,
      description: "Utility-first CSS framework",
      color: "bg-sky-500 text-white",
    },
    {
      name: "DaisyUI",
      icon: <SiDaisyui className="h-8 w-8 text-[#5A21D6]" />,
      description: "Tailwind CSS component library",
      color: "bg-yellow-500 text-white",
    },
    {
      name: "Vite",
      icon: <SiVite className="h-8 w-8 text-[#646CFF]" />,
      description: "Next generation frontend tooling",
      color: "bg-purple-600 text-white",
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase className="h-8 w-8 text-[#FFCA28]" />,
      description: "Backend-as-a-Service platform",
      color: "bg-amber-500 text-white",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-8 w-8 text-[#47A248]" />,
      description: "NoSQL document database",
      color: "bg-green-600 text-white",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="h-8 w-8 text-black" />,
      description: "Node.js web application framework",
      color: "bg-gray-600 text-white",
    },
    {
      name: "TanStack Query",
      icon: <SiReactquery className="h-8 w-8 text-[#FF4154]" />,
      description: "Data synchronization for React",
      color: "bg-red-600 text-white",
    },
    {
      name: "Stripe",
      icon: <FaCcStripe className="h-8 w-8 text-[#635BFF]" />,
      description: "Online payment processing",
      color: "bg-indigo-600 text-white",
    },
    {
      name: "ShadCN UI",
      icon: <SiShadcnui className="h-8 w-8 text-black" />,
      description: "Beautifully designed components",
      color: "bg-indigo-500 text-white",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="h-8 w-8 text-[#181717]" />,
      description: "Version control and collaboration",
      color: "bg-gray-700 text-white",
    },
    {
      name: "Vercel",
      icon: <IoLogoVercel className="h-8 w-8 text-black" />,
      description: "Cloud platform for frontend",
      color: "bg-gray-900 text-white",
    },
  ];

  // Double the technologies array for an infinite loop effect
  doubled.push(...technologies, ...technologies);
  
  // Use useLayoutEffect to calculate the width before the component paints
  useLayoutEffect(() => {
    if (scrollerRef.current) {
      // The scroll width is the total width of all items. We want to scroll
      // exactly half of that to create a seamless loop.
      const scrollWidth = scrollerRef.current.scrollWidth / 2;
      animationProps.current = {
        x: -scrollWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25, // 30 seconds for a full loop
            ease: "linear",
          },
        },
      };
      // Start the animation after calculating the width
      controls.start(animationProps.current);
    }
  }, [controls]);

  // Handlers to stop and resume animation on hover
  const onHoverStart = () => {
    controls.stop();
  };

  const onHoverEnd = () => {
    controls.start(animationProps.current);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            My Technology Stack
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
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
                className="flex-shrink-0 w-48 flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div
                  className={`mb-4 p-3 rounded-full ${tech.color}`}
                  title={tech.name}
                >
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1 text-center text-gray-900">
                  {tech.name}
                </h3>
                <p className="text-sm text-center text-gray-600">
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
