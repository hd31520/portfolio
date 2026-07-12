"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = ({ id }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const experiences = [
    {
      role: "Full Stack MERN Developer",
      company: "Freelance & Client-Contract Projects",
      location: "Remote",
      duration: "2024 – Present",
      type: "Full-Time",
      description:
        "Architected and delivered custom multi-tenant SaaS platforms (FleetMaster Pro, Easy School ERP). Implemented secure Node/Express backend layers, real-time Socket.io channels, and robust MongoDB aggregations.",
      tags: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Express"],
      color: "from-green-500/10 to-emerald-500/5",
      dot: "bg-green-500",
    },
    {
      role: "Frontend Developer",
      company: "Independent Web Contractor",
      location: "Remote",
      duration: "2023 – 2024",
      type: "Contract",
      description:
        "Built high-performance, SEO-friendly React and Next.js frontends. Focused on pixel-perfect UI designs, Tailwind CSS styling, responsive grid alignment, and Framer Motion micro-interactions.",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-indigo-500/10 to-violet-500/5",
      dot: "bg-indigo-500",
    },
  ];

  return (
    <section
      id={id || "experience"}
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] text-[var(--color-foreground)] relative overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-green-500/[var(--glow-opacity)] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.25, 1], x: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-indigo-500/30 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <div className="pl-12 sm:pl-16 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.3 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute -left-[31px] sm:-left-[39px] top-5 ${exp.dot} rounded-full p-1.5 border-4 border-[var(--color-background)] shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ type: "spring", delay: 0.4 + index * 0.2, stiffness: 300 }}
                  whileHover={{ scale: 1.4 }}
                >
                  <Briefcase className="h-3 w-3 text-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative p-6 rounded-[22px] bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg group hover:border-green-500/20 transition-all duration-300 overflow-hidden`}
                >
                  {/* Gradient reveal */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.7 }}
                  />

                  <div className="relative z-10">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--color-foreground)] group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] font-medium mt-0.5">
                          <ExternalLink className="h-3.5 w-3.5" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mt-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1.5">
                        <div className="inline-flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                          <Calendar className="h-3 w-3" />
                          {exp.duration}
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] px-2 py-0.5 rounded bg-[var(--card-border)]/50">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[var(--color-background)] border border-[var(--card-border)] text-[10px] font-semibold text-[var(--text-muted)] hover:border-green-500/30 hover:text-green-500 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + index * 0.2 + i * 0.05 }}
                          whileHover={{ y: -1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
