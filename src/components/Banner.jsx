"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Github, Linkedin, Facebook, ArrowRight, Download } from 'lucide-react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

/* ─── Typewriter Hook ─── */
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ─── Particle Field ─── */
const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-green-400/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

/* ─── Magnetic Button ─── */
const MagneticButton = ({ children, className, href, download, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

/* ─── Animated Code Terminal ─── */
const CodingIllustration = () => {
  const lines = [
    { delay: 0.3, color: '#38bdf8', text: 'const developer = {' },
    { delay: 0.6, color: '#f43f5e', text: '  name: ', extra: { color: '#22c55e', text: '"Md. Hridoy",' } },
    { delay: 0.9, color: '#f43f5e', text: '  role: ', extra: { color: '#22c55e', text: '"MERN Dev",' } },
    { delay: 1.2, color: '#f43f5e', text: '  passion: ', extra: { color: '#38bdf8', text: 'true,' } },
    { delay: 1.5, color: '#fbbf24', text: '  skills: ["React","Node"]' },
    { delay: 1.8, color: '#38bdf8', text: '};' },
  ];

  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-green-500/5 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-indigo-500/5 blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.5, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10 w-full max-w-[340px] rounded-2xl bg-[#070c1e] border border-white/5 shadow-2xl overflow-hidden"
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0b1129] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-[10px] font-mono text-white/20">hridoy@developer</span>
        </div>

        {/* Code lines */}
        <div className="p-5 font-mono text-sm space-y-1.5">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.4 }}
              className="flex flex-wrap gap-1"
            >
              <span style={{ color: line.color }}>{line.text}</span>
              {line.extra && <span style={{ color: line.extra.color }}>{line.extra.text}</span>}
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <motion.span
            className="inline-block w-2 h-4 bg-green-400 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Floating tags */}
      {[
        { text: '<React />', color: 'text-green-400', top: '8%', right: '0%', y: [0, -12, 0], dur: 4 },
        { text: 'Node.js', color: 'text-cyan-400', bottom: '12%', left: '0%', y: [0, 12, 0], dur: 5 },
        { text: 'MongoDB', color: 'text-emerald-400', top: '45%', right: '-5%', y: [0, -8, 0], dur: 3.5 },
      ].map((tag, i) => (
        <motion.div
          key={i}
          style={{ top: tag.top, bottom: tag.bottom, left: tag.left, right: tag.right }}
          animate={{ y: tag.y }}
          transition={{ duration: tag.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
          className={`absolute bg-[#0c1330]/80 border border-white/5 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-[10px] ${tag.color} font-mono backdrop-blur-sm`}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${tag.color.replace('text-', 'bg-')} animate-pulse`} />
          {tag.text}
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Main Banner ─── */
const Banner = ({ title }) => {
  const { theme } = useTheme();
  const roles = ['MERN Stack Developer', 'Full Stack Engineer', 'React Specialist', 'Node.js Expert'];
  const role = useTypewriter(roles);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const socials = [
    { icon: <Github className="h-4 w-4" />, url: 'https://github.com/hd31520' },
    { icon: <Linkedin className="h-4 w-4" />, url: 'https://www.linkedin.com/in/mdhridoysheikh/' },
    { icon: <Facebook className="h-4 w-4" />, url: 'https://www.facebook.com/Hridoy3240/' },
    { icon: <Mail className="h-4 w-4" />, url: 'mailto:mdhridoy3240@gmail.com' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-background)] pt-16 transition-colors duration-300">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-green-500/[var(--glow-opacity)] blur-[120px] mix-blend-screen pointer-events-none"
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/[var(--glow-opacity)] blur-[100px] mix-blend-screen pointer-events-none"
        animate={{ scale: [1.15, 1, 1.15], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particles */}
      <ParticleField />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold tracking-wide"
                whileHover={{ scale: 1.05, borderColor: 'rgba(34,197,94,0.5)' }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Available for Work
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-none"
            >
              Hi, I'm{' '}
              <motion.span
                className="bg-gradient-to-r from-green-500 via-emerald-400 to-indigo-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {title}
              </motion.span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={itemVariants} className="h-8 flex items-center">
              <span className="text-lg sm:text-xl text-green-500 dark:text-green-400 font-bold font-mono">
                {role}
                <motion.span
                  className="inline-block w-0.5 h-5 bg-green-400 ml-0.5 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[var(--text-muted)] text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Build modern web applications with clean code and exceptional user experience. Specializing in highly interactive React & Next.js systems and secure backend APIs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <MagneticButton
                href="/projects"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-bold shadow-lg shadow-green-500/20 transition-colors cursor-pointer"
              >
                View Projects
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </MagneticButton>

              <MagneticButton
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--card-bg)] hover:bg-[var(--card-bg)]/80 text-[var(--color-foreground)] border border-[var(--card-border)] hover:border-green-500/30 text-sm font-semibold transition-all cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Download CV
              </MagneticButton>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex gap-3.5 pt-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-green-500 hover:border-green-500/30 transition-all shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-5 flex justify-center w-full"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <CodingIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[var(--text-muted)] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
