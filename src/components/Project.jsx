"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaCcStripe,
  FaGithub,
  FaArrowRight,
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
import Image from "next/image";
import AutoScrollContainer from "./AutoScrollContainer";

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
    url: "https://petuk-22f6f.web.app/",
    tech: [
      "HTML5",
      "CSS3",
      "React",
      "Vite",
      "Tailwind CSS",
      "Next.js",
      "Firebase",
      "Express.js",
      "TanStack Query",
      "MongoDB",
      "Stripe",
      "GitHub",
      "Vercel",
    ],
    title: "Restaurant Management",
  },
  {
    id: 2,
    url: "https://adop-a3a82.web.app/",
    tech: [
      "HTML5",
      "CSS3",
      "React",
      "Vite",
      "Tailwind CSS",
      "ShadCN UI",
      "TanStack Query",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Stripe",
      "GitHub",
      "Vercel",
    ],
    title: "Pet Adoption Platform",
  },
];

const Project = () => {
  return (
    <div className="w-full p-4 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-center pt-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">
            <FaReact className="inline" />
          </span>
          My Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col md:flex-row items-center  justify-center gap-8">
        {projectTechStacks.map((project) => (
          <div
            key={project.id}
            className="flex-1 w-full space-y-4 bg-indigo-500 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {project.title}
            </h2>
            <div className="px-5 flex flex-wrap justify-center bg-gray-100 dark:bg-gray-700 gap-3 py-2 rounded-lg">
              {techIcons
                .filter((icon) => project.tech.includes(icon.name))
                .map((icon) => (
                  <div
                    key={icon.name}
                    title={icon.name}
                    className={`${icon.bg} rounded-2xl`}
                  >
                    {icon.icon}
                  </div>
                ))}
            </div>
            <AutoScrollContainer src={project.url} />
          </div>
        ))}
      </div>

      {/* Footer Button */}
      
    </div>
  );
};

export default Project;
