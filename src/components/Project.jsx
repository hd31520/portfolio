"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaCcStripe,
  FaGithub,
  FaArrowRight,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import {
  SiVite,
  SiMongodb,
  SiShadcnui,
  SiNextdotjs,
  SiExpress,
  SiReactquery,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";

// Assuming you have a file like '@/context/ThemeContext'
// that provides the ThemeProvider and useTheme hook.
// This is the correct way to import it in your application.
import { useTheme } from "@/context/ThemeContext";

const AutoScrollContainer = ({
  src,
  scrollSpeed = 2,
  returnSpeed = 2,
  isScrollingEnabled,
}) => {
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);
  const scrollDirection = useRef(0);

  // Function to handle continuous scrolling
  const animateScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    // Scroll down on hover
    if (scrollDirection.current === 1) {
      if (scrollTop + clientHeight < scrollHeight) {
        containerRef.current.scrollTop += scrollSpeed;
      } else {
        // Stop scrolling when the bottom is reached
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
        scrollDirection.current = 0;
      }
    }
    // Scroll up when mouse leaves
    else if (scrollDirection.current === -1) {
      if (scrollTop > 0) {
        containerRef.current.scrollTop -= returnSpeed;
      } else {
        // Stop scrolling when the top is reached
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
        scrollDirection.current = 0;
      }
    }

    if (scrollDirection.current !== 0) {
      animationFrameId.current = requestAnimationFrame(animateScroll);
    }
  };

  // Event handler for mouse entering the container
  const handleMouseEnter = () => {
    if (isScrollingEnabled) {
      scrollDirection.current = 1; // Set direction to scroll down
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(animateScroll);
      }
    }
  };

  // Event handler for mouse leaving the container
  const handleMouseLeave = () => {
    if (isScrollingEnabled) {
      scrollDirection.current = -1; // Set direction to scroll up
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(animateScroll);
      }
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        // This makes the entire div clickable to open the link
        e.preventDefault();
        window.open(src, "_blank", "noopener noreferrer");
      }}
      style={{
        height: "400px",
        overflowY: isScrollingEnabled ? "auto" : "hidden", // Conditional overflow based on prop
        borderRadius: "0.5rem",
        padding: "1rem",
        transition: "border-color 0.3s ease-in-out",
        position: "relative",
        cursor: "pointer",
      }}
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg-custom"
    >
      {/* The iframe will display the external website */}
      <iframe
        src={src}
        title="External Website View"
        style={{
          width: "100%",
          height: `${isScrollingEnabled ? "7680px" : "100%"}`, // A large, fixed height to ensure content is available for scroll
          border: "none",
          // This allows mouse events to be handled by the parent div
          pointerEvents: "none",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
};

// --- Data for Projects and Icons ---

const techIcons = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="h-10 w-10 p-2 text-orange-500 rounded-2xl" />,
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="h-10 w-10 p-2 text-blue-500 rounded-2xl" />,
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    name: "React",
    icon: <FaReact className="h-10 w-10 p-2 text-cyan-500 rounded-2xl" />,
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
  },
  {
    name: "Vite",
    icon: <SiVite className="h-10 w-10 p-2 text-purple-500 rounded-2xl" />,
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <RiTailwindCssFill className="h-10 w-10 p-2 text-sky-500 rounded-2xl" />
    ),
    bg: "bg-sky-100 dark:bg-sky-900/30",
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="h-10 w-10 p-2 text-black dark:text-white rounded-2xl" />
    ),
    bg: "bg-gray-100 dark:bg-gray-700",
  },
  {
    name: "Firebase",
    icon: (
      <IoLogoFirebase className="h-10 w-10 p-2 text-amber-500 rounded-2xl" />
    ),
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="h-10 w-10 p-2 text-gray-500 rounded-2xl" />,
    bg: "bg-gray-100 dark:bg-gray-700",
  },
  {
    name: "TanStack Query",
    icon: <SiReactquery className="h-10 w-10 p-2 text-red-500 rounded-2xl" />,
    bg: "bg-red-100 dark:bg-red-900/30",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="h-10 w-10 p-2 text-green-500 rounded-2xl" />,
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    name: "Stripe",
    icon: <FaCcStripe className="h-10 w-10 p-2 text-indigo-500 rounded-2xl" />,
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub className="h-10 w-10 p-2 text-gray-800 dark:text-gray-200 rounded-2xl" />
    ),
    bg: "bg-gray-100 dark:bg-gray-700",
  },
  {
    name: "Vercel",
    icon: (
      <IoLogoVercel className="h-10 w-10 p-2 text-black dark:text-white rounded-2xl" />
    ),
    bg: "bg-gray-100 dark:bg-gray-700",
  },
  {
    name: "ShadCN UI",
    icon: <SiShadcnui className="h-10 w-10 p-2 text-indigo-500 rounded-2xl" />,
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
];
const projectTechStacks = [
  {
    id: 1,
    url: "https://mock-miya.vercel.app/", // From resume.json
    clientGithubUrl: "https://github.com/Pullock4981/MockMiya_client.git", // From resume.json
    serverGithubUrl: "https://github.com/Pullock4981/MockMiya_client.git", // No server-specific link in resume.json
    tech: [
      "Mext.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
    ],
    title: "MockMiya",
    isScrollingEnabled: false,
    description:
      "AI-powered resume generator that creates tailored, role-specific resumes instantly. Interactive interview simulator with text, voice, and video practice modes. Performance analytics and export tools for tracking progress and downloading polished resumes.",
  },
  {
    id: 2,
    url: "https://petuk-22f6f.web.app/",
    clientGithubUrl: "https://github.com/hd31520/petuk-clint",
    serverGithubUrl: "https://github.com/hd31520/petuk-server",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Firebase",
    ],
    title: "Restaurant Management Online",
    isScrollingEnabled: false,
    description:
      "Full-stack MERN platform for managing orders, tables, and reservations. Implemented secure JWT-based authentication & Firebase login. Developed a responsive Ul with Tailwind CSS.",
  },
  {
    id: 3,
    url: "https://adop-a3a82.web.app/",
    clientGithubUrl: "https://github.com/hd31520/Pet-Adoption",
    serverGithubUrl: "https://github.com/hd31520/petadopter-server",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "JWT",
    ],
    title: "Pet Adoption Platform",
    isScrollingEnabled: true,
    description:
      "Web app connecting pets with adopters; implemented secure adoption requests. Role-based user access for admins & adopters. Integrated Firebase authentication with MongoDB backend.",
  },
  
];

// --- Project Component ---

const Project = () => {
  const { theme } = useTheme();
  console.log("Current Theme:", theme);

  return (
    <div className=" w-full p-4 space-y-12 relative">
      {/* Dynamic background element based on theme */}
      {/* <div
        className={`absolute right-1/4 bottom-0 w-64 h-64 rounded-full blur-3xl ${
          theme === "dark" ? "bg-black" : "bg-blue-200"
        }`}
      ></div> */}

      {/* Header */}
      <div className="flex items-center justify-center pt-8">
        <h1 className={`text-3xl font-bold flex items-center gap-2 text-gray-900  ${theme === "dark" ? "text-white" : "" }`}>
          <span className={`text-blue-600 ${theme === "dark" ? "text-blue-400" : ""} `}>
            <FaReact className="inline" />
          </span>
          My Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-12">
        {projectTechStacks.map((project, index) => (
          <div
            key={project.id}
            className={`w-full grid md:grid-cols-2 gap-8 items-center bg-gray-100 ${theme === "dark" ? "bg-gray-800" : ""}  p-6 rounded-xl shadow-lg transition-shadow`}
          >
            {/* Project Details and Links (conditionally ordered) */}
            <div
              className={`space-y-6 ${
                index % 2 === 0 ? "order-1 md:order-2" : "order-1 md:order-1"
              }`}
            >
              <h2 className={`text-2xl font-bold text-gray-800 ${theme === "dark" ? "text-white" : ""}  `}>
                {project.title}
              </h2>
              <p className={`text-gray-600 ${theme === "dark" ? "text-white" : "" }  text-base`}>
                {project.description}
              </p>

              {/* Technology Stack Icons */}
              <div className="flex flex-wrap gap-3">
                {techIcons
                  .filter((icon) => project.tech.includes(icon.name))
                  .map((icon) => (
                    <div
                      key={icon.name}
                      title={icon.name}
                      className={`${icon.bg} rounded-2xl flex-shrink-0`}
                    >
                      {icon.icon}
                    </div>
                  ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300 shadow-md"
                >
                  Live Site <FaArrowRight />
                </a>
                <a
                  href={project.clientGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-gray-900 text-white ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : ""}  font-semibold transition-colors duration-300 shadow-md`}
                >
                  <FaGithub /> Client
                </a>
                <a
                  href={project.serverGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-gray-900 text-white ${theme === "dark" ? "hover:bg-gray-600 bg-gray-70" : ""}  font-semibold transition-colors duration-300 shadow-md`}
                >
                  <FaGithub /> Server
                </a>
              </div>
            </div>

            {/* Live project iframe (conditionally ordered) */}
            <div
              className={`h-96 w-full rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-700 ${
                index % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-2"
              }`}
            >
              <AutoScrollContainer
                isScrollingEnabled={project.isScrollingEnabled}
                src={project.url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
