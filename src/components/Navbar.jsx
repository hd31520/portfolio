"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/#technologies", text: "Skills" },
    { href: "/#experience", text: "Experience" },
    { href: "/projects", text: "Projects" },
    { href: "/#contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--navbar-bg-color)] backdrop-blur-md border-b border-[var(--card-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 text-[var(--color-foreground)] text-lg font-bold hover:opacity-90 transition-opacity">
              <img className="h-9 w-9 rounded-full ring-2 ring-green-500/20" src="/hridoy2.png" alt="Hridoy Logo" />
              <span className="tracking-wide">Md. Hridoy Sheikh</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1.5">
            {navLinks.map((link) => (
              <NavLink key={link.text} href={link.href} text={link.text} />
            ))}

            {/* Separator */}
            <div className="w-[1px] h-4 bg-[var(--card-border)] mx-2"></div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--card-bg)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="h-4.5 w-4.5" />
              ) : (
                <Moon className="h-4.5 w-4.5" />
              )}
            </button>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-xs font-bold shadow-md shadow-green-500/10 transition-colors ml-2"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--card-bg)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--card-bg)] transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--color-background)]/95 border-b border-[var(--card-border)] overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-3 pt-2 pb-6 space-y-1.5">
              {navLinks.map((link) => (
                <MobileNavLink key={link.text} href={link.href} text={link.text} onClick={() => setIsOpen(false)} />
              ))}
              
              <div className="pt-4 px-3">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-bold shadow-md transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper component for desktop navigation links
const NavLink = ({ href, text }) => (
  <Link href={href} className="text-[var(--text-muted)] hover:text-[var(--color-foreground)] px-3.5 py-1.5 rounded-full text-xs font-medium hover:bg-[var(--card-bg)] transition-all duration-200">
    {text}
  </Link>
);

// Helper component for mobile navigation links
const MobileNavLink = ({ href, text, onClick }) => (
  <Link href={href} onClick={onClick} className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--card-bg)] transition-all duration-200">
    {text}
  </Link>
);

export default Navbar;
