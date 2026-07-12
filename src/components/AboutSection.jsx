"use client";

import { useTheme } from '../context/ThemeContext';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code2, Coffee, Star, GitBranch } from 'lucide-react';

/* ─── Animated Counter ─── */
const Counter = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const controls = animate(0, num, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    });
    return controls.stop;
  }, [inView, target]);

  const prefix = target.startsWith('1,') ? '1,' : '';
  const formatted = prefix
    ? Math.round(display).toString().padStart(3, '0')
    : Number.isInteger(parseFloat(target.replace(/[^0-9.]/g, '')))
    ? Math.round(display)
    : display.toFixed(0);

  return (
    <span ref={ref} className="text-3xl font-black text-green-500">
      {target.includes(',') ? `1,${Math.round(display).toString().padStart(3, '0')}` : formatted}{suffix}
    </span>
  );
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const AboutSection = ({ id }) => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: '3+', label: 'Years Experience', icon: <Coffee className="h-4 w-4" />, suffix: '+' },
    { value: '8+', label: 'Projects Completed', icon: <Code2 className="h-4 w-4" />, suffix: '+' },
    { value: '15+', label: 'Technologies', icon: <Star className="h-4 w-4" />, suffix: '+' },
    { value: '1,000+', label: 'GitHub Commits', icon: <GitBranch className="h-4 w-4" />, suffix: '+' },
  ];

  const highlights = ['React & Next.js', 'Node.js & Express', 'MongoDB', 'TypeScript', 'REST APIs', 'Socket.io'];

  return (
    <section
      id={id}
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-background)] text-[var(--color-foreground)] relative overflow-hidden transition-colors duration-300"
    >
      {/* Background glows */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-green-500/[var(--glow-opacity)] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-indigo-500/[var(--glow-opacity)] blur-[100px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column – Photo */}
          <motion.div
            variants={fadeLeft}
            className="md:col-span-5 relative p-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[24px] shadow-xl max-w-sm mx-auto w-full group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Glowing border on hover */}
            <motion.div
              className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(99,102,241,0.1))' }}
            />

            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <motion.img
                src="/hridoy2.png"
                alt="Md. Hridoy Sheikh"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/60 via-transparent to-transparent" />

              {/* Available badge */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-white text-xs font-medium">Open to opportunities</span>
              </motion.div>
            </div>

            {/* Floating skill chip */}
            <motion.div
              className="absolute -top-4 -right-4 bg-[var(--card-bg)] border border-green-500/20 shadow-lg rounded-2xl px-3 py-2 text-xs font-bold text-green-500 flex items-center gap-1.5"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Code2 className="h-3.5 w-3.5" /> Full Stack
            </motion.div>
          </motion.div>

          {/* Right Column – Content */}
          <motion.div variants={fadeRight} className="md:col-span-7 space-y-6">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight"
            >
              Who I Am &{' '}
              <span className="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text text-transparent">
                My Journey
              </span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I'm Hridoy! A passionate full-stack developer with 3+ years building modern web applications. I specialize in JavaScript technologies across the whole stack — React, Next.js, Node.js, Express, and MongoDB.
              </p>
              <p>
                My development philosophy centers around clean, modular code, optimized databases, and intuitive user journeys. I translate complex demands into elegant, scalable digital systems.
              </p>
            </motion.div>

            {/* Skill tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {highlights.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-xs font-medium text-[var(--text-muted)] hover:border-green-500/30 hover:text-green-500 transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-[20px] bg-[var(--card-bg)] border border-[var(--card-border)] shadow-md flex flex-col justify-center items-center text-center group hover:border-green-500/20 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(34,197,94,0.08)' }}
                >
                  {/* Shimmer on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="text-green-500/20 mb-1">{stat.icon}</span>
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <span className="text-xs text-[var(--text-muted)] mt-1 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
