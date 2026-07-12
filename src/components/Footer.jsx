"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, url: "https://github.com/hd31520", label: "GitHub" },
    { icon: <Linkedin className="h-4 w-4" />, url: "https://www.linkedin.com/in/md-hridoy-sheikh-b16b01298/", label: "LinkedIn" },
    { icon: <Facebook className="h-4 w-4" />, url: "https://www.facebook.com/Hridoy3240/", label: "Facebook" }
  ];

  const quickLinks = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/#technologies", text: "Skills" },
    { href: "/#experience", text: "Experience" },
    { href: "/projects", text: "Projects" },
    { href: "/#contact", text: "Contact" }
  ];

  return (
    <footer className="w-full bg-[var(--color-background)] border-t border-[var(--card-border)] text-[var(--text-muted)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[var(--card-border)] pb-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Link href="/" className="flex items-center gap-2 text-[var(--color-foreground)] text-lg font-bold">
              <img className="h-7 w-7 rounded-full" src="/hridoy2.png" alt="Hridoy Logo" />
              <span>Md. Hridoy Sheikh</span>
            </Link>
            <p className="text-xs text-[var(--text-muted)] max-w-sm opacity-80">
              Crafting premium full-stack web applications with modern design systems and secure logic.
            </p>
          </div>

          {/* Quick Links Menu */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <Link 
                key={link.text}
                href={link.href} 
                className="text-xs hover:text-green-500 transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-green-500 hover:bg-[var(--card-bg)]/80 transition-all duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-[11px] opacity-70">
          <p>© {new Date().getFullYear()} Md. Hridoy Sheikh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Tailwind CSS, and <span className="text-green-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
