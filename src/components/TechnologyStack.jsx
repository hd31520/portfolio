"use client";

import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useRef, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiJavascript, SiTypescript, SiSocketdotio } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

/* ─── 3D Tilt Card ─── */
const TiltCard = ({ skill, index, inView }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -16;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="p-6 rounded-[22px] bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg flex flex-col items-start gap-4 group hover:border-green-500/30 transition-all duration-300 relative overflow-hidden cursor-pointer h-full"
        whileHover={{
          boxShadow: theme === 'dark'
            ? `0 16px 40px ${skill.glowColor}`
            : '0 16px 40px rgba(0,0,0,0.08)',
        }}
      >
        {/* Background gradient reveal */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 0%, ${skill.glowColor} 0%, transparent 70%)` }}
        />

        {/* Icon */}
        <motion.div
          className="p-3.5 rounded-2xl bg-white/5 border border-transparent group-hover:border-[var(--card-border)] relative z-10"
          whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.4 }}
        >
          {skill.icon}
        </motion.div>

        {/* Text */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-[var(--color-foreground)] group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-200">
            {skill.name}
          </h3>
          <p className="text-[var(--text-muted)] text-xs mt-1.5 leading-relaxed">
            {skill.description}
          </p>
        </div>

        {/* Level bar */}
        <div className="w-full relative z-10 mt-auto">
          <div className="flex justify-between text-[10px] text-[var(--text-muted)] mb-1">
            <span>Proficiency</span>
            <span className="text-green-500">{skill.level}%</span>
          </div>
          <div className="w-full h-1 rounded-full bg-[var(--card-border)] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : {}}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.07, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TechnologyStack = ({ id }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const skills = [
    { name: "React.js", icon: <FaReact className="h-8 w-8 text-[#61DAFB]" />, description: "Component-driven UI library for rich interactive web frontends.", glowColor: "rgba(97,218,251,0.12)", level: 95 },
    { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8 text-[var(--color-foreground)]" />, description: "React framework for SSR, static generation, and routing.", glowColor: "rgba(255,255,255,0.08)", level: 90 },
    { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 text-[#339933]" />, description: "JavaScript runtime for high-performance server-side logic.", glowColor: "rgba(51,153,51,0.12)", level: 92 },
    { name: "Express.js", icon: <SiExpress className="h-8 w-8 text-gray-400 dark:text-gray-300" />, description: "Minimalist framework for scalable RESTful APIs.", glowColor: "rgba(255,255,255,0.07)", level: 90 },
    { name: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-[#47A248]" />, description: "Flexible NoSQL database for document-based data management.", glowColor: "rgba(71,162,72,0.12)", level: 88 },
    { name: "Firebase", icon: <IoLogoFirebase className="h-8 w-8 text-[#FFCA28]" />, description: "Serverless platform for instant auth and real-time syncing.", glowColor: "rgba(255,202,40,0.12)", level: 82 },
    { name: "TypeScript", icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" />, description: "Typed superset of JavaScript for large-scale applications.", glowColor: "rgba(49,120,198,0.12)", level: 80 },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="h-8 w-8 text-[#38BDF8]" />, description: "Utility-first CSS for beautiful responsive layouts.", glowColor: "rgba(56,189,248,0.12)", level: 95 },
    { name: "Socket.io", icon: <SiSocketdotio className="h-8 w-8 text-[var(--color-foreground)]" />, description: "Real-time bidirectional communication between clients and servers.", glowColor: "rgba(255,255,255,0.08)", level: 78 },
    { name: "JavaScript", icon: <SiJavascript className="h-8 w-8 text-[#F7DF1E]" />, description: "Core language for client-side and server-side processing.", glowColor: "rgba(247,223,30,0.12)", level: 96 },
  ];

  return (
    <section
      id={id}
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] text-[var(--color-foreground)] relative overflow-hidden transition-colors duration-300"
    >
      {/* Background orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/[var(--glow-opacity)] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-green-500/[var(--glow-opacity)] blur-[100px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-3"
            whileHover={{ scale: 1.05 }}
          >
            Core Expertise
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight">
            My{' '}
            <span className="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
            The languages, frameworks, and tools I use to engineer premium applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <TiltCard key={skill.name} skill={skill} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
