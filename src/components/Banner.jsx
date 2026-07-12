"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Github, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CodingIllustration = () => {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-green-500/5 blur-[120px] animate-pulse"></div>
      <div className="absolute w-60 h-60 rounded-full bg-indigo-500/5 blur-[100px] delay-1000 animate-pulse"></div>

      {/* Floating abstract code terminal */}
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-[380px] h-auto drop-shadow-[0_20px_50px_rgba(34,197,94,0.05)] z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Laptop/Console Body */}
        <rect x="50" y="80" width="300" height="210" rx="16" fill="#0b1129" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
        <rect x="58" y="88" width="284" height="194" rx="10" fill="#070c1e" />
        
        {/* Terminal Header */}
        <circle cx="78" cy="106" r="4.5" fill="#ef4444" />
        <circle cx="94" cy="106" r="4.5" fill="#f59e0b" />
        <circle cx="110" cy="106" r="4.5" fill="#22c55e" />
        <text x="130" y="110" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="monospace">bash - hridoy@developer</text>

        {/* Code Mockups */}
        <text x="78" y="145" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">const developer = {"{"}</text>
        <text x="94" y="165" fill="#f43f5e" fontSize="11" fontFamily="monospace">&nbsp;&nbsp;name:</text>
        <text x="145" y="165" fill="#22c55e" fontSize="11" fontFamily="monospace">"Md. Hridoy Sheikh",</text>
        <text x="94" y="185" fill="#f43f5e" fontSize="11" fontFamily="monospace">&nbsp;&nbsp;role:</text>
        <text x="145" y="185" fill="#22c55e" fontSize="11" fontFamily="monospace">"MERN Stack Developer",</text>
        <text x="94" y="205" fill="#f43f5e" fontSize="11" fontFamily="monospace">&nbsp;&nbsp;skills:</text>
        <text x="160" y="205" fill="#e2e8f0" fontSize="11" fontFamily="monospace">[</text>
        <text x="175" y="205" fill="#fbbf24" fontSize="11" fontFamily="monospace">"React", "Node", "MongoDB"</text>
        <text x="160" y="220" fill="#e2e8f0" fontSize="11" fontFamily="monospace">],</text>
        <text x="94" y="240" fill="#f43f5e" fontSize="11" fontFamily="monospace">&nbsp;&nbsp;passionate:</text>
        <text x="185" y="240" fill="#38bdf8" fontSize="11" fontFamily="monospace">true</text>
        <text x="78" y="260" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">{"};"}</text>

        {/* Floating circles/grids */}
        <g opacity="0.2">
          <circle cx="340" cy="80" r="20" fill="url(#grad1)" />
          <circle cx="40" cy="300" r="30" fill="url(#grad2)" />
        </g>

        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#050816" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating tags */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-6 bg-[#0c1330]/80 border border-white/5 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-[10px] text-green-400 font-mono backdrop-blur-sm"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></div>
        &lt;React /&gt;
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 left-6 bg-[#0c1330]/80 border border-white/5 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-[10px] text-cyan-400 font-mono backdrop-blur-sm"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
        Node.js
      </motion.div>
    </div>
  );
};

const Banner = ({ title }) => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] pt-16">
      {/* Background SVG Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Glowing blur effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              MERN Stack Developer
            </motion.div>

            {/* Main Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              Hi, I'm <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">{title}</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Build modern web applications with clean code and exceptional user experience. Specializing in highly interactive React & Next.js systems and secure backend APIs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <motion.a 
                href="/projects" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-[#050816] text-sm font-bold shadow-lg shadow-green-500/10 transition-colors"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a 
                href="/#contact" 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-semibold transition-colors"
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3.5 pt-4">
              {[
                { icon: <Github className="h-4.5 w-4.5" />, url: "https://github.com/hd31520" },
                { icon: <Linkedin className="h-4.5 w-4.5" />, url: "https://www.linkedin.com/in/mdhridoysheikh/" },
                { icon: <Facebook className="h-4.5 w-4.5" />, url: "https://www.facebook.com/Hridoy3240/" },
                { icon: <Mail className="h-4.5 w-4.5" />, url: "mailto:mdhridoy3240@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-green-500 hover:border-green-500/30 hover:bg-white/10 transition-all shadow-sm"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column (Illustration) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <CodingIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
