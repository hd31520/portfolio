"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Code, Paintbrush, Smartphone, Server, Shield, Rocket, ArrowRight } from "lucide-react";

const ServicesSection = ({ id }) => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const services = [
    {
      icon: <Code />,
      title: "Web Development",
      description: "Responsive and modern websites using React, Next.js, and Tailwind CSS.",
      color: "from-blue-500/10 to-cyan-500/10",
      border: "hover:border-blue-500/30",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: <Paintbrush />,
      title: "UI/UX Design",
      description: "Clean, user-friendly interfaces with accessibility and aesthetics in mind.",
      color: "from-pink-500/10 to-rose-500/10",
      border: "hover:border-pink-500/30",
      iconColor: "text-pink-500",
      iconBg: "bg-pink-500/10",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Friendly",
      description: "Optimized for all screen sizes including phones, tablets, and desktops.",
      color: "from-purple-500/10 to-violet-500/10",
      border: "hover:border-purple-500/30",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
    },
    {
      icon: <Server />,
      title: "Backend Integration",
      description: "Scalable APIs with Node.js, Express, Firebase, and MongoDB.",
      color: "from-green-500/10 to-emerald-500/10",
      border: "hover:border-green-500/30",
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10",
    },
    {
      icon: <Shield />,
      title: "Secure Deployment",
      description: "Deployed with HTTPS, JWT auth, and platforms like Vercel or Firebase.",
      color: "from-yellow-500/10 to-amber-500/10",
      border: "hover:border-yellow-500/30",
      iconColor: "text-yellow-500",
      iconBg: "bg-yellow-500/10",
    },
    {
      icon: <Rocket />,
      title: "Performance Optimization",
      description: "Lazy loading, code splitting, image compression, and fast load times.",
      color: "from-orange-500/10 to-red-500/10",
      border: "hover:border-orange-500/30",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
    },
  ];

  return (
    <section
      id={id}
      ref={ref}
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] text-[var(--color-foreground)] relative overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/[var(--glow-opacity)] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Available Banner */}
        <motion.div
          className="mb-12 p-4 rounded-2xl text-center bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />
          <div className="inline-flex items-center justify-center gap-3 relative z-10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="font-semibold text-base text-[var(--color-foreground)]">
              Currently available for freelance work & new opportunities
            </span>
          </div>
          <p className="mt-1.5 text-sm text-[var(--text-muted)]">
            Let's build something amazing together! Get in touch to discuss your project.
          </p>
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-3">
            What I Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
            End-to-end solutions — from design to deployment — tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative p-6 rounded-[22px] bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg group cursor-pointer overflow-hidden transition-all duration-300 ${service.border}`}
            >
              {/* Gradient bg on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl ${service.iconBg} ${service.iconColor} mb-5`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                {React.cloneElement(service.icon, { className: `h-6 w-6 ${service.iconColor}` })}
              </motion.div>

              <h3 className={`relative z-10 text-lg font-bold text-[var(--color-foreground)] mb-2 group-hover:${service.iconColor} transition-colors`}>
                {service.title}
              </h3>
              <p className="relative z-10 text-sm text-[var(--text-muted)] leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <motion.div
                className={`relative z-10 mt-4 flex items-center gap-1 text-xs font-semibold ${service.iconColor} opacity-0 group-hover:opacity-100`}
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                Learn more <ArrowRight className="h-3 w-3" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
