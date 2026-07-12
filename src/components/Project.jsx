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
  FaNodeJs,
} from "react-icons/fa";
import {
  SiVite,
  SiMongodb,
  SiShadcnui,
  SiNextdotjs,
  SiExpress,
  SiReactquery,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiExpo,
  SiSocketdotio,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

// Assuming you have a file like '@/context/ThemeContext'
// that provides the ThemeProvider and useTheme hook.
// This is the correct way to import it in your application.
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

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
    icon: <FaHtml5 className="text-orange-500" />,
    bg: "bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    bg: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-500" />,
    bg: "bg-cyan-50 dark:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    name: "Vite",
    icon: <SiVite className="text-purple-500" />,
    bg: "bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-sky-500" />,
    bg: "bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-400",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    bg: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
  },
  {
    name: "Firebase",
    icon: <IoLogoFirebase className="text-amber-500" />,
    bg: "bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-600 dark:text-gray-300" />,
    bg: "bg-gray-100 dark:bg-gray-800 text-gray-750 dark:text-gray-300",
  },
  {
    name: "TanStack Query",
    icon: <SiReactquery className="text-red-500" />,
    bg: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    bg: "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400",
  },
  {
    name: "Stripe",
    icon: <FaCcStripe className="text-indigo-500" />,
    bg: "bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-gray-200" />,
    bg: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
  },
  {
    name: "Vercel",
    icon: <IoLogoVercel className="text-black dark:text-white" />,
    bg: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
  },
  {
    name: "ShadCN UI",
    icon: <SiShadcnui className="text-indigo-500" />,
    bg: "bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    bg: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative className="text-cyan-600" />,
    bg: "bg-cyan-50 dark:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
    bg: "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-emerald-600" />,
    bg: "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Expo",
    icon: <SiExpo className="text-gray-900 dark:text-white" />,
    bg: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
    bg: "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400",
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="text-black dark:text-white" />,
    bg: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
  },
];
const projectTechStacks = [
  {
    id: 1,
    url: "https://easyschool.live",
    image: "https://i.ibb.co/LzJXB9xL/school.png",
    clientGithubUrl: "https://github.com/menajpal-design/school-clint.git",
    serverGithubUrl: "https://github.com/menajpal-design/school-server.git",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "PDFKit",
      "Tailwind CSS",
    ],
    title: "Easy School — Multi-tenant School Management System",
    isScrollingEnabled: true,
    description: "A robust, multi-tenant academic ERP SaaS platform designed to centralize administrative, financial, and educational operations. The system isolates data per tenant (school subdomain) and features integrated payment billing, automatic report card generation, and scheduled SMS notifications.",
    features: [
      "Multi-tenant database routing with subdomain mappings to ensure complete data isolation",
      "Granular Role-Based Access Control (RBAC) supporting Admin, Teacher, Accountant, Guardian, and Student",
      "Automated academic fees engine with invoicing and Stripe checkout integration hooks",
      "Server-side PDF generation via PDFKit for official report cards, payment receipts, and enrollment forms",
      "Guardian notifications utility sending batch SMS alerts for monthly fees and dues",
      "Secure document archiving and uploads using Multer with Winston logging middleware",
      "Interactive dashboard charts compiling monthly attendance, fee collections, and tenant statistics"
    ]
  },
  {
    id: 2,
    url: "https://www.karkhana.shop/",
    image: "https://i.ibb.co/1YbkTyJR/karkhana.png",
    clientGithubUrl: "https://github.com/hd31520/karkhana-clint",
    serverGithubUrl: "https://github.com/hd31520/kharkhana-react-server",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    title: "Karkhana Management ERP",
    isScrollingEnabled: true,
    description: "An enterprise-grade manufacturing workflow and stock ERP custom-engineered for factories (karkhanas). It automates raw material inventory, tracks production stages, manages double-entry bookkeeping, and processes worker payrolls based on daily production quotas.",
    features: [
      "Live manufacturing inventory tracker with automated low-stock warnings and reorder alerts",
      "Role-based workflows with dedicated portals for Factory Owners, Managers, and Laborers",
      "Dynamic double-entry accounting ledger detailing manufacturing costs, sales, and net profit margins",
      "Automatic payroll processing with logs for daily production quotas and employee salary slips",
      "Multi-company accounting database structure supporting distinct business ledgers",
      "Interactive production pipeline logs tracking raw materials from intake to finalized shipments"
    ]
  },
  {
    id: 3,
    url: "https://mock-miya.vercel.app/",
    image: "https://i.ibb.co/7dj1vzs8/mock-miya-vercel-app-2026-07-12-14-35-01.png",
    clientGithubUrl: "https://github.com/Pullock4981/MockMiya_client.git",
    serverGithubUrl: "https://github.com/Pullock4981/MockMiya_client.git",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
    ],
    title: "MockMiya — AI Interview Simulator",
    isScrollingEnabled: false,
    description: "An AI-powered interview preparation and resume scoring SaaS designed to simulate actual technical interviews. It parses resumes to extract relevant experience, dynamically prompts candidates using voice/video, and provides instant audio analytics and scoring logs.",
    features: [
      "Dynamic resume parsing with role-specific keyword matching and layout improvement tips",
      "Interactive mock interview simulator utilizing speech-to-text and text-to-speech API engines",
      "Real-time AI analysis grading answer relevance, vocabulary, vocal flow, and facial confidence",
      "Comprehensive scoring dashboard displaying candidate performance logs and historical progress charts",
      "Custom interview builder allowing candidates to target specific roles (Frontend, Backend, MERN)",
      "Secure candidates database storing interview records and customized recommendation logs"
    ]
  },
  {
    id: 4,
    url: "https://fleet-web.duckdns.org/",
    image: "https://i.ibb.co/PzhJ49H4/fleet-web-duckdns-org-2026-07-12-14-48-16.png",
    clientGithubUrl: "https://github.com/menajpal-design/car-manage",
    serverGithubUrl: "https://github.com/menajpal-design/car-manage",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    title: "FleetMaster Pro — Enterprise Fleet & Operations SaaS",
    isScrollingEnabled: true,
    description: "A premium SaaS platform designed for transport and logistics firms to manage vehicles, drivers, and financial transactions. It features live GPS device telemetry, driver trip logging, interactive team calendars, and automated vehicle-specific profit-and-loss auditing.",
    features: [
      "Real-time SinoTrack GPS device telemetry mapping coordinates, vehicle speed, and daily routes via Leaflet Maps",
      "Unified attendance matrix allowing dispatchers to dynamically mark and audit driver/helper schedules",
      "Role-Based Access Control with isolated portals for Fleet Owners, Dispatchers, Accountants, and Drivers",
      "Actual driver trip logging tracking trip mileage (starting/ending odometers) and fuel receipts",
      "Interactive double-entry vehicle ledger accounting for trip incomes, repairs, and net margins",
      "Automated PDF statement generation exporting vehicle-specific P&L sheets for audit purposes",
      "Self-contained MongoDB binary file storage (zero external dependencies) with optimized caching"
    ]
  },
  {
    id: 5,
    url: "https://pdf-reader-and-transltor.vercel.app/",
    image: "https://i.ibb.co/yFtbTMTb/pdf-reader-and-transltor-vercel-app-2026-07-12-14-50-40.png",
    clientGithubUrl: "https://github.com/menajpal-design/pdf-reader-and-transltor.git",
    serverGithubUrl: "https://github.com/menajpal-design/pdf-reader-and-transltor.git",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Vite",
    ],
    title: "PDF Canvas Reader & Translator",
    isScrollingEnabled: false,
    description: "An advanced web-based PDF document reader and translator. It utilizes HTML5 Canvas to render high-fidelity document views, implements an interactive crop tool for instant OCR text extraction, and overlays real-time translations onto the original layout.",
    features: [
      "High-performance document rendering utilizing direct page-by-page HTML5 Canvas API streams",
      "Optical Character Recognition (OCR) scanner utilizing crop tools to capture and extract text from images",
      "Real-time multi-language translation engine overlaying translated text directly onto the document layout",
      "Integrated PDF exporter saving modified pages with translated overlays as high-quality PDF files",
      "Custom markup controls allowing users to highlight, draw, and add notes to document canvas layers",
      "Secure history library saving previously rendered PDFs and translated document templates"
    ]
  },
  {
    id: 6,
    url: "https://petuk-22f6f.web.app/",
    image: "https://i.ibb.co/rRL5bg0R/petuk-22f6f-web-app-2026-07-12-14-36-21.png",
    clientGithubUrl: "https://github.com/hd31520/petuk-clint",
    serverGithubUrl: "https://github.com/hd31520/petuk-server",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
    ],
    title: "Restaurant Management Online (Petuk)",
    isScrollingEnabled: false,
    description: "A modern restaurant management and online food ordering SaaS. It includes digital interactive menus, real-time table reservations, secure checkout pipelines, and a kitchen POS board showing pending order tickets for chefs.",
    features: [
      "Fully interactive digital food menu with fast category searching and responsive filters",
      "Real-time table reservation calendar validating table availability instantly",
      "Chef/POS dashboard displaying live order tickets with status updates (Pending, Cooking, Served)",
      "Secure customer checkout pipeline with order history tracking and JWT session protection",
      "Visual sales analytics dashboard tracking total daily revenue, popular items, and order volume",
      "Integrated discount code system enabling administrators to manage promotional campaigns"
    ]
  },
  {
    id: 7,
    url: "https://adop-a3a82.web.app/",
    image: "https://i.ibb.co/Q2jffXq/screencapture-adop-a3a82-web-app-2026-07-12-16-12-14.png",
    clientGithubUrl: "https://github.com/hd31520/Pet-Adoption",
    serverGithubUrl: "https://github.com/hd31520/petadopter-server",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
    ],
    title: "Pet Adoption Platform",
    isScrollingEnabled: true,
    description: "A full-stack pet rescue database and adoption matching platform. It lists homeless animals with comprehensive medical logs, allows users to submit interactive adoption applications, and provides a portal for shelter staff to review and approve matches.",
    features: [
      "Searchable pet directory filtering by breed, age, size, shelter location, and vaccination status",
      "Interactive pet application portal allowing users to submit adoption requests and details",
      "Admin dashboard for animal shelters to manage pet listings, medical profiles, and adoption queues",
      "Community care section containing shelter guides, volunteer directories, and pet care blogs",
      "Granular user roles isolating pet seekers from shelter administrators and system moderators",
      "Secure message channels enabling adopters to directly contact shelter managers"
    ]
  },
];

// --- Project Mockup Component to replace iframes (which are blocked by X-Frame-Options) ---
const ProjectMockup = ({ projectId, theme }) => {
  const renderBrowserHeader = (url) => (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 text-[10px] text-gray-500 select-none">
      <div className="flex gap-1.5 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
      </div>
      <div className="flex-1 mx-4 px-3 py-0.5 bg-white dark:bg-gray-950 rounded border border-gray-200/60 dark:border-gray-800/60 text-center font-mono overflow-hidden whitespace-nowrap text-ellipsis">
        {url}
      </div>
    </div>
  );

  switch (projectId) {
    case 2: // Karkhana ERP
      return (
        <div className="w-full h-full flex flex-col font-sans bg-gray-50 dark:bg-gray-950 text-[11px]">
          {renderBrowserHeader("https://www.karkhana.shop")}
          <div className="flex-1 p-3 grid grid-cols-3 gap-2.5 overflow-hidden">
            {/* Sidebar */}
            <div className="col-span-1 bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex flex-col gap-1.5">
              <div className="font-bold text-gray-800 dark:text-gray-200 border-b dark:border-gray-800 pb-1 mb-0.5 flex items-center gap-1">🏭 Karkhana</div>
              <div className="bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded font-semibold">📊 Dashboard</div>
              <div className="text-gray-500 dark:text-gray-400 px-2 py-0.5">📦 Inventory</div>
              <div className="text-gray-500 dark:text-gray-400 px-2 py-0.5">💸 Payroll</div>
              <div className="text-gray-500 dark:text-gray-400 px-2 py-0.5">💼 Accounts</div>
            </div>
            {/* Dashboard Content */}
            <div className="col-span-2 flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                  <div className="text-gray-405 text-[10px]">Inventory Stock</div>
                  <div className="text-sm font-bold text-green-605 mt-0.5">12,840 kg</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-green-500 h-full w-[70%]"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                  <div className="text-gray-405 text-[10px]">Work Orders</div>
                  <div className="text-sm font-bold text-indigo-605 mt-0.5">34 Active</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[85%]"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex-1 overflow-hidden">
                <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1.5">Recent Sales Ledger</div>
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="flex justify-between border-b pb-0.5 dark:border-gray-800">
                    <span className="text-gray-500">TexStyle Mills</span>
                    <span className="font-bold text-green-600">+$2,450.00</span>
                  </div>
                  <div className="flex justify-between border-b pb-0.5 dark:border-gray-800">
                    <span className="text-gray-500">Apex Leather Co.</span>
                    <span className="font-bold text-green-600">+$1,890.00</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Raw Cotton Buy</span>
                    <span className="font-bold text-red-500">-$980.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 3: // MockMiya AI
      return (
        <div className="w-full h-full flex flex-col font-sans bg-gray-50 dark:bg-gray-950 text-[11px]">
          {renderBrowserHeader("https://mock-miya.vercel.app")}
          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
            <div className="bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-800 dark:text-gray-200">AI Resume Optimizer</div>
                <div className="text-gray-450 text-[10px]">React Developer Applicant</div>
              </div>
              <div className="h-9 w-9 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/40 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400">
                88%
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex-1 flex flex-col gap-2 overflow-hidden">
              <div className="font-semibold text-gray-800 dark:text-gray-200">AI Mock Interview Simulator</div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded text-gray-600 dark:text-gray-300 italic border-l-2 border-indigo-500 text-[10px]">
                "Tell me about a time you resolved a major bug in production under pressure."
              </div>
              <div className="space-y-1.5 mt-1">
                <div>
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>Speech Clarity & Flow</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>Technical Relevance</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 6: // Restaurant
      return (
        <div className="w-full h-full flex flex-col font-sans bg-gray-50 dark:bg-gray-950 text-[11px]">
          {renderBrowserHeader("https://petuk-22f6f.web.app")}
          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
            <div className="flex justify-between items-center bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
              <span className="font-bold text-red-500 flex items-center gap-1">🍔 Online Petuk</span>
              <span className="bg-red-50 dark:bg-red-950/50 text-red-650 dark:text-red-400 px-2 py-0.5 rounded text-[10px] font-bold">Cart: 2 items</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 flex-1 overflow-hidden">
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex flex-col justify-between">
                <div className="h-14 bg-gray-100 dark:bg-gray-800 rounded mb-1 flex items-center justify-center text-lg">🍕</div>
                <div>
                  <div className="font-bold text-gray-800 dark:text-gray-200 text-[10px]">Margherita Pizza</div>
                  <div className="text-red-500 font-bold">$12.50</div>
                </div>
                <button className="bg-red-500 hover:bg-red-650 text-white rounded py-0.5 mt-1 text-[9px] font-semibold">Add to Cart</button>
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex flex-col justify-between">
                <div className="h-14 bg-gray-100 dark:bg-gray-800 rounded mb-1 flex items-center justify-center text-lg">🍜</div>
                <div>
                  <div className="font-bold text-gray-800 dark:text-gray-200 text-[10px]">Spicy Ramen</div>
                  <div className="text-red-500 font-bold">$14.20</div>
                </div>
                <button className="bg-red-500 hover:bg-red-655 text-white rounded py-0.5 mt-1 text-[9px] font-semibold">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      );

    case 7: // Pet Adoption
      return (
        <div className="w-full h-full flex flex-col font-sans bg-gray-50 dark:bg-gray-950 text-[11px]">
          {renderBrowserHeader("https://adop-a3a82.web.app")}
          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
            <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex justify-between items-center">
              <span className="font-bold text-amber-600 flex items-center gap-1">🐕 PetAdopter</span>
              <span className="text-gray-400 text-[10px]">Faridpur, BD</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 flex-1 overflow-hidden">
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex flex-col items-center text-center justify-center">
                <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-xl mb-1">🐶</div>
                <div className="font-bold text-gray-800 dark:text-gray-200">Rocky</div>
                <div className="text-gray-400 text-[9px]">Golden Retriever</div>
                <span className="bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full text-[8px] mt-1 font-semibold">Healthy</span>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex flex-col items-center text-center justify-center">
                <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-950/50 flex items-center justify-center text-xl mb-1">🐱</div>
                <div className="font-bold text-gray-800 dark:text-gray-200">Luna</div>
                <div className="text-gray-400 text-[9px]">Siamese Cat</div>
                <span className="bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full text-[8px] mt-1 font-semibold">Vaccinated</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 1: // Easy School ERP
      return (
        <div className="w-full h-full flex flex-col font-sans bg-gray-50 dark:bg-gray-950 text-[11px]">
          {renderBrowserHeader("https://easyschool.live")}
          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
            {/* Header Stats */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                <div className="text-gray-400 text-[9px]">Students</div>
                <div className="font-bold text-indigo-600 dark:text-indigo-400 text-xs mt-0.5">1,250</div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                <div className="text-gray-400 text-[9px]">Attendance</div>
                <div className="font-bold text-green-600 text-xs mt-0.5">96.4%</div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
                <div className="text-gray-400 text-[9px]">Fees Paid</div>
                <div className="font-bold text-orange-600 text-xs mt-0.5">89%</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex-1 overflow-hidden">
              <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1 flex items-center gap-1">🏫 Tenant Manager</div>
              <div className="space-y-1 font-mono text-[9px]">
                <div className="flex justify-between border-b pb-0.5 border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">rosewood.easyschool.live</span>
                  <span className="text-green-600 font-semibold">Active</span>
                </div>
                <div className="flex justify-between border-b pb-0.5 border-gray-100 dark:border-gray-800">
                  <span className="text-gray-500">greenfields.easyschool.live</span>
                  <span className="text-green-600 font-semibold">Active</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>monthly-sms task</span>
                  <span className="text-amber-500 font-semibold">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 4: // FleetMaster Pro
      return (
        <div className="w-full h-full flex flex-col font-sans bg-gray-50 dark:bg-gray-950 text-[11px]">
          {renderBrowserHeader("https://fleet-web.duckdns.org")}
          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
            <div className="flex justify-between items-center bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">🚚 FleetMaster Board</span>
              <span className="bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 px-2 py-0.5 rounded text-[9px] font-bold">12 Vehicles Active</span>
            </div>
            
            <div className="grid grid-cols-5 gap-2.5 flex-1 overflow-hidden">
              {/* Minimap Mock */}
              <div className="col-span-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200/10 overflow-hidden relative flex items-center justify-center">
                {/* Simulated Map Grid */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:10px_10px]"></div>
                {/* Location Marker */}
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </div>
                <div className="absolute bottom-1.5 left-1.5 bg-white/95 dark:bg-gray-900/95 px-1.5 py-0.5 rounded text-[8px] shadow font-mono border dark:border-gray-800">
                  SinoTrack: ST-901 (Online)
                </div>
              </div>

              {/* Stats column */}
              <div className="col-span-2 flex flex-col gap-2">
                <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex-1 flex flex-col justify-center">
                  <div className="text-gray-400 text-[9px]">Speed Telemetry</div>
                  <div className="font-bold text-gray-800 dark:text-gray-200 text-xs mt-0.5">82 km/h</div>
                  <span className="text-[8px] text-green-500 font-semibold mt-0.5">Within Limit</span>
                </div>
                <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex-1 flex flex-col justify-center">
                  <div className="text-gray-400 text-[9px]">Net Profit P&L</div>
                  <div className="font-bold text-green-600 text-xs mt-0.5">+$12,400</div>
                  <span className="text-[8px] text-gray-400 mt-0.5">Automated Report</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 5: // PDF Reader
      return (
        <div className="w-full h-full flex flex-col font-sans bg-gray-50 dark:bg-gray-950 text-[11px]">
          {renderBrowserHeader("https://pdf-reader-and-transltor.vercel.app")}
          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
            <div className="bg-white dark:bg-gray-900 p-2 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex justify-between items-center">
              <span className="font-bold flex items-center gap-1">📄 Canvas PDF Reader</span>
              <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[9px] font-bold">Crop Target</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 flex-1 overflow-hidden">
              {/* Original Canvas Page */}
              <div className="bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-dashed border-indigo-300 dark:border-indigo-800 relative flex flex-col justify-between overflow-hidden">
                <div className="text-indigo-500 font-bold text-[9px] uppercase tracking-wider mb-0.5">Canvas (Source)</div>
                <div className="flex-1 bg-gray-50/50 dark:bg-gray-955/50 p-1.5 rounded font-serif text-[9px] text-gray-550 dark:text-gray-400 leading-relaxed overflow-hidden border dark:border-gray-800">
                  "Artificial Intelligence (AI) is transforming software development."
                </div>
                <div className="absolute top-1/2 left-1.5 right-1.5 border border-indigo-500 bg-indigo-500/15 h-5 flex items-center justify-end px-1">
                  <span className="bg-indigo-600 text-white text-[7px] px-1 py-0.5 rounded font-bold">Crop Area</span>
                </div>
              </div>

              {/* Translated Output */}
              <div className="bg-white dark:bg-gray-900 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50 flex flex-col justify-between overflow-hidden">
                <div className="text-green-500 font-bold text-[9px] uppercase tracking-wider mb-0.5">Translation (Bengali)</div>
                <div className="flex-1 bg-gray-50/50 dark:bg-gray-955/50 p-1.5 rounded font-sans text-[9px] text-gray-700 dark:text-gray-300 leading-relaxed overflow-hidden border dark:border-gray-800">
                  "কৃত্রিম বুদ্ধিমত্তা (AI) সফটওয়্যার ডেভেলপমেন্টকে রূপান্তরিত করছে।"
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-650 text-white rounded py-1 text-[8px] font-bold mt-1">Export PDF</button>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-[var(--color-background)] border border-[var(--card-border)] text-gray-500 text-xs">
          No Mockup Available
        </div>
      );
  }
};

const Project = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-3">
          My Creations
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight">
          Featured Projects
        </h1>
        <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-2 leading-relaxed">
          Explore a curated selection of full-stack MERN & React applications, engineered for production scalability.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {projectTechStacks.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`w-full grid md:grid-cols-2 gap-8 items-center bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 rounded-[24px] shadow-lg transition-all duration-300 ${
                isFeatured ? "ring-1 ring-green-500/20 shadow-[0_20px_50px_rgba(34,197,94,0.05)] border-green-500/10" : "hover:border-green-500/15"
              }`}
            >
              {/* Project Details */}
              <div className={`space-y-5 ${index % 2 === 0 ? "order-1 md:order-2" : "order-1 md:order-1"}`}>
                {isFeatured && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-600 dark:text-green-400 text-[9px] font-bold uppercase tracking-wider">
                    ★ Featured Project
                  </div>
                )}
                
                <h2 className="text-2xl font-bold text-[var(--color-foreground)] tracking-tight">
                  {project.title}
                </h2>
                
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {techIcons
                    .filter((icon) => project.tech.includes(icon.name))
                    .map((icon) => (
                      <div
                        key={icon.name}
                        title={icon.name}
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--color-foreground)] transition-colors"
                      >
                        <span className="flex items-center justify-center">{icon.icon}</span>
                        <span>{icon.name}</span>
                      </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-3">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-xs font-bold transition-all shadow-md shadow-green-500/5"
                  >
                    Live Demo <FaArrowRight className="h-3 w-3" />
                  </motion.a>
                  <motion.a
                    href={project.clientGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-bg)]/80 text-[var(--color-foreground)] border border-[var(--card-border)] text-xs font-semibold transition-all"
                  >
                    <FaGithub className="h-3.5 w-3.5" /> Client
                  </motion.a>
                  {project.serverGithubUrl && project.serverGithubUrl !== project.clientGithubUrl && (
                    <motion.a
                      href={project.serverGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-bg)]/80 text-[var(--color-foreground)] border border-[var(--card-border)] text-xs font-semibold transition-all"
                    >
                      <FaGithub className="h-3.5 w-3.5" /> Server
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Mockup Frame / Screenshots */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => window.open(project.url, "_blank", "noopener noreferrer")}
                className={`h-[280px] sm:h-[340px] w-full rounded-2xl overflow-hidden shadow-lg border border-[var(--card-border)] cursor-pointer relative group ${
                  index % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-2"
                }`}
              >
                {project.image ? (
                  <div className="w-full h-full relative overflow-hidden bg-[var(--color-background)]">
                    {/* Browser-like header */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)]/90 backdrop-blur-sm border-b border-[var(--card-border)] text-[9px] text-[var(--text-muted)] select-none">
                      <div className="flex gap-1.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
                      </div>
                      <div className="flex-1 mx-4 px-3 py-0.5 bg-[var(--color-background)] rounded border border-[var(--card-border)] text-center font-mono overflow-hidden whitespace-nowrap text-ellipsis text-[var(--text-muted)]">
                        {project.url.replace(/^https?:\/\//, "")}
                      </div>
                    </div>
                    {/* Image container */}
                    <div className="w-full h-full pt-7 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-103"
                      />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-slate-900 px-4 py-2 rounded-full text-[10px] font-bold shadow-md flex items-center gap-1.5 transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                        Open Live Site <FaArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <ProjectMockup projectId={project.id} theme={theme} />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
