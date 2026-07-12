"use client";

import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const AboutSection = ({ id }) => {
  const { theme } = useTheme();

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "8+", label: "Projects Completed" },
    { value: "15+", label: "Technologies Mastered" },
    { value: "1,000+", label: "GitHub Contributions" },
  ];

  return (
    <section 
      id={id}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050816] text-white relative overflow-hidden"
    >
      {/* Background vector glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-green-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Image with corrected aspect ratio */}
          <div className="md:col-span-5 relative p-2 bg-white/5 border border-white/10 rounded-[24px] shadow-xl shadow-green-500/5 group max-w-sm mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src="/hridoy2.png"
                alt="Md. Hridoy Sheikh"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-3">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Who I Am & My Journey
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I'm Hridoy! I am a passionate full-stack developer with 3+ years of experience building modern web applications. I specialize in JavaScript technologies across the whole stack—specifically React, Next.js, Node.js, Express, and MongoDB.
              </p>
              
              <p>
                My development philosophy centers around writing clean, modular code, optimizing databases for speed and scale, and building intuitive user journeys. I enjoy translating complex technical demands into elegant, scalable digital systems.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -2 }}
                  className="p-5 rounded-[20px] bg-white/5 border border-white/5 shadow-md flex flex-col justify-center items-center text-center group hover:border-green-500/20 transition-all duration-300"
                >
                  <span className="text-3xl font-black text-green-500 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
