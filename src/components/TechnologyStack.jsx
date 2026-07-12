"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const TechnologyStack = ({ id }) => {
  const { theme } = useTheme();

  const skills = [
    {
      name: "React.js",
      icon: <FaReact className="h-8 w-8 text-[#61DAFB]" />,
      description: "Component-driven UI library for building rich interactive web frontends.",
      glowColor: "rgba(97, 218, 251, 0.15)",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="h-8 w-8 text-[#339933]" />,
      description: "JavaScript runtime engine for executing high-performance server-side logic.",
      glowColor: "rgba(51, 153, 51, 0.15)",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="h-8 w-8 text-gray-300" />,
      description: "Minimalist web framework for Node.js to create scalable RESTful APIs.",
      glowColor: "rgba(255, 255, 255, 0.1)",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-8 w-8 text-[#47A248]" />,
      description: "Flexible NoSQL database for rapid document-based data management.",
      glowColor: "rgba(71, 162, 72, 0.15)",
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase className="h-8 w-8 text-[#FFCA28]" />,
      description: "Serverless backend platform for instant user auth and real-time syncing.",
      glowColor: "rgba(255, 202, 40, 0.15)",
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="h-8 w-8 text-[#38BDF8]" />,
      description: "Utility-first CSS framework for crafting beautiful responsive styling layouts.",
      glowColor: "rgba(56, 189, 248, 0.15)",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-8 w-8 text-[#F7DF1E]" />,
      description: "The core language powering client-side interaction and server-side processing.",
      glowColor: "rgba(247, 223, 30, 0.15)",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-8 w-8 text-white" />,
      description: "React framework for production-ready SSR, static generation, and page routing.",
      glowColor: "rgba(255, 255, 255, 0.15)",
    },
  ];

  return (
    <section
      id={id}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050816] text-white relative overflow-hidden"
    >
      {/* Background vector glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-3">
            Core Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            My Technology Stack
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
            The programming languages, frameworks, and backend solutions I leverage to engineer premium applications.
          </p>
        </div>

        {/* Grid of Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 10px 30px ${skill.glowColor}`,
                borderColor: "rgba(34, 197, 94, 0.3)"
              }}
              className="p-6 rounded-[22px] bg-white/5 border border-white/5 shadow-lg flex flex-col items-start gap-4 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-2xl bg-white/5 group-hover:scale-105 transition-transform duration-300">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
