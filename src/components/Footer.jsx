"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Mail, Github, Linkedin, Facebook, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, url: "https://github.com/hd31520", label: "GitHub" },
    { icon: <Linkedin className="h-4 w-4" />, url: "https://www.linkedin.com/in/md-hridoy-sheikh-b16b01298/", label: "LinkedIn" },
    { icon: <Facebook className="h-4 w-4" />, url: "https://www.facebook.com/Hridoy3240/", label: "Facebook" },
    { icon: <Mail className="h-4 w-4" />, url: "mailto:mdhridoy3240@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/#technologies", text: "Skills" },
    { href: "/#experience", text: "Experience" },
    { href: "/projects", text: "Projects" },
    { href: "/#contact", text: "Contact" },
  ];

  return (
    <footer className="w-full bg-[var(--color-background)] border-t border-[var(--card-border)] text-[var(--text-muted)] transition-colors duration-300 relative overflow-hidden">
      {/* Subtle background glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 rounded-full bg-green-500/[var(--glow-opacity)] blur-[80px] pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[var(--card-border)] pb-8">
          {/* Logo */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 text-[var(--color-foreground)] text-lg font-bold group">
              <motion.img
                className="h-7 w-7 rounded-full ring-2 ring-green-500/20"
                src="/hridoy2.png"
                alt="Hridoy Logo"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <span className="group-hover:text-green-500 transition-colors duration-200">Md. Hridoy Sheikh</span>
            </Link>
            <p className="text-xs text-[var(--text-muted)] max-w-sm opacity-80">
              Crafting premium full-stack web applications with modern design systems and secure logic.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {quickLinks.map((link, i) => (
              <motion.div key={link.text} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className="text-xs hover:text-green-500 transition-colors duration-200"
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-green-500 hover:border-green-500/20 transition-all duration-200"
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.08, type: "spring" }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-[11px] opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} Md. Hridoy Sheikh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Tailwind CSS, and{" "}
            <motion.span
              className="text-red-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-3 w-3 fill-current" />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
