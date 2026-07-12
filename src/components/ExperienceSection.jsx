"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = ({ id }) => {
  const experiences = [
    {
      role: "Full Stack MERN Developer",
      company: "Freelance & Client-Contract Projects",
      duration: "2024 - Present",
      description: "Architected and delivered custom multi-tenant SaaS platforms (such as FleetMaster Pro and Easy School ERP). Implemented secure Node/Express backend layers, real-time Socket.io channels, parent/student push portals, and robust MongoDB aggregations.",
    },
    {
      role: "Frontend Developer",
      company: "Independent Web Contractor",
      duration: "2023 - 2024",
      description: "Built high-performance, SEO-friendly React and Next.js frontends. Focused on pixel-perfect UI designs, Tailwind CSS styling, responsive grid alignment, and Framer Motion micro-interactions.",
    },
  ];

  return (
    <section
      id={id || "experience"}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050816] text-white relative overflow-hidden"
    >
      {/* Background vector glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-green-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 bg-green-500 rounded-full p-1.5 border-4 border-[#050816] shadow-md shadow-green-500/20">
                <Briefcase className="h-3 w-3 text-[#050816]" />
              </div>

              {/* Experience Card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="p-6 rounded-[22px] bg-white/5 border border-white/5 shadow-lg flex flex-col gap-3 group hover:border-green-500/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                    <Calendar className="h-3 w-3" />
                    {exp.duration}
                  </div>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-1">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
