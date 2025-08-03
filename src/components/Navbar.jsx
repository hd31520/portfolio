"use client"; // This directive is necessary for React Hooks like useState

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function from context

  // Determine the stroke color for the SVG icons based on the current theme
  const iconStrokeColor = theme === 'light' ? 'var(--color-gray-700)' : 'var(--color-gray-300)';

  // Function to toggle the mobile menu's open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Navbar container: fixed position, top, left, right, high z-index,
    // and background color now matches --banner-bg-color
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--banner-bg-color)] shadow-lg rounded-b-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* Logo text with dynamic color based on theme */}
            <Link href="/" className="text-[var(--color-indigo-600)] flex gap-10  text-2xl font-bold rounded-md p-2 hover:bg-indigo-50 transition-colors duration-300">
            <img className='h-10 w-10 rounded-full'  src="https://i.ibb.co/BVgP719x/1753965482626.jpg" alt="" />
                Md. Hridoy Sheikh
            </Link>
          </div>

          {/* Desktop Navigation Links and Theme Toggle */}
          <div className="hidden md:flex  items-center space-x-4">
            <NavLink className="dark:bg-white" href="/" text="Home" />
            <NavLink className="dark:bg-white" href="#about" text="About" />
            <NavLink className="dark:bg-white" href="#services" text="Services" />
            <NavLink className="dark:bg-white" href="#contact" text="Contact" />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 dark:bg-white rounded-full transition-colors duration-300 hover:bg-[var(--color-gray-200)] dark:hover:bg-[var(--color-gray-700)]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                // Sun icon for light mode (from Heroicons)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={iconStrokeColor}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M3 12h1m15.325-7.757l-.707-.707M5.382 5.382l-.707-.707m12.728 0l-.707.707M6.09 17.91l-.707.707M18 12a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              ) : (
                // Moon icon for dark mode (from Heroicons)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={iconStrokeColor}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger/X icon) */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-[var(--color-gray-300)] hover:text-white hover:bg-indigo-600 dark:hover:bg-[var(--color-indigo-700)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {isOpen && (
        // Mobile menu background also matches --banner-bg-color
        <div className="md:hidden bg-[var(--banner-bg-color)]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" text="Home" />
            <MobileNavLink href="#about" text="About" />
            <MobileNavLink href="#services" text="Services" />
            <MobileNavLink href="#contact" text="Contact" />
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="block w-full bg-white text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-gray-700 dark:text-[var(--color-gray-200)] hover:text-white hover:bg-indigo-500 dark:hover:bg-[var(--color-indigo-700)]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper component for desktop navigation links
const NavLink = ({ href, text }) => (
  <Link href={href} className="text-gray-900 bg-white dark:text-[var(--color-gray-100)] hover:bg-indigo-500 dark:hover:bg-[var(--color-indigo-700)] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
      {text}
  </Link>
);

// Helper component for mobile navigation links
const MobileNavLink = ({ href, text }) => (
  <Link href={href} className="block px-3 py-2 rounded-md text-base bg-white font-medium text-gray-700 dark:text-[var(--color-gray-200)] hover:text-white hover:bg-indigo-500 dark:hover:bg-[var(--color-indigo-700)] transition duration-300 ease-in-out">
      {text}
  </Link>
);

export default Navbar;
