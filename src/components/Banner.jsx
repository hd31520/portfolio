"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

// Animated text component
const AnimatedText = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.6,
          delay: delay,
          ease: [0.19, 1, 0.22, 1]
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: delay + i * 0.05,
                ease: [0.19, 1, 0.22, 1]
              }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Auto-changing subtitle variants
const subtitles = [
  "Web Developer",
  "Full-Stack Engineer",
  "React & Node.js",
  "Express.js & MongoDB"
];

const Banner = ({ title, imageUrl, imageAlt }) => {
  
  const { theme } = useTheme();
  const controls = useAnimation();
  const [currentSubtitle, setCurrentSubtitle] = React.useState(0);

  // Auto-rotate subtitles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Background animations
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  return (
    <div className={`relative isolate overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-indigo-50 to-blue-100'}`}>
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={controls}
        className="absolute inset-0 opacity-20"
      >
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            transition: {
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className={`absolute left-1/4 top-0 w-64 h-64 rounded-full blur-3xl ${theme === 'dark' ? 'bg-indigo-900' : 'bg-indigo-200'}`}
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 5
            }
          }}
          className={`absolute right-1/4 bottom-0 w-64 h-64 rounded-full blur-3xl ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-200'}`}
        ></motion.div>
      </motion.div> 

      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-2/3 space-y-8 z-10">
            {/* Animated "Hi, I'm" */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Hi, I'm
            </motion.p>

            {/* Animated Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                <AnimatedText text={title} delay={0.3} />
              </span>
              <span className="block bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentSubtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {subtitles[currentSubtitle]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Auto-typing description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              <AnimatedText 
                text="Building robust full-stack applications with the MERN stack." 
                delay={1.2}
              />
              <AnimatedText 
                text="Passionate about creating scalable and secure APIs." 
                delay={1.5}
              />
            </motion.div>

            {/* Animated Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${theme === 'dark' ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'} shadow-md hover:shadow-lg`}
              >
                <HiOutlineMail className="h-5 w-5" />
                Get In Touch
              </a>
              <a 
                href="/hridoy_resume.pdf" 
                download
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-900'} shadow-md hover:shadow-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <FaFileDownload className="h-5 w-5" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: <FaGithub className="h-6 w-6" />, url: "https://github.com/hd31520" },
                { icon: <FaLinkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/mdhridoysheikh/" },
                { icon: <FaFacebook className="h-6 w-6" />, url: "https://www.facebook.com/Hridoy3240/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' : 'bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900'} shadow-sm hover:shadow-md`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image with continuous subtle animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
              transition: {
                y: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
            transition={{ delay: 0.5 }}
            className="relative group lg:w-1/3 w-full"
          >
            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
                transition: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className={`absolute -inset-2 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-indigo-600 to-blue-600' : 'bg-gradient-to-r from-indigo-400 to-blue-400'} opacity-70 blur-lg group-hover:opacity-100 transition-all duration-300`}
            ></motion.div>
            <div className="relative aspect-square w-full rounded-full overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements with continuous motion */}
      <motion.div 
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ 
          x: 0, 
          y: 0, 
          opacity: 1,
          y: [0, -30, 0],
          transition: {
            y: {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/10"
      ></motion.div>
      <motion.div 
        initial={{ x: 100, y: -100, opacity: 0 }}
        animate={{ 
          x: 0, 
          y: 0, 
          opacity: 1,
          x: [0, -20, 0],
          transition: {
            x: {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }
          }
        }}
        transition={{ delay: 0.4 }}
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-blue-500/10"
      ></motion.div>
    </div>
  );
};

export default Banner;
