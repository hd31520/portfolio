"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5" />, url: "https://github.com/hd31520", label: "GitHub" },
    { icon: <FaLinkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/md-hridoy-sheikh-b16b01298/", label: "LinkedIn" },
    { icon: <FaFacebook className="h-5 w-5" />, url: "https://www.facebook.com/Hridoy3240/", label: "Facebook" }
  ];

  return (
    <footer className={`w-full border-t transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-800 text-gray-300' 
        : 'bg-white border-gray-200 text-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                className="h-10 w-10 rounded-full border-2 border-indigo-500" 
                src="https://i.ibb.co/BVgP719x/1753965482626.jpg" 
                alt="Md. Hridoy Sheikh" 
              />
              <span className={`text-xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Md. Hridoy
              </span>
            </div>
            <p className="text-sm">
              Web Developer & Designer creating modern, responsive websites and applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <SocialIcon 
                  key={index}
                  href={social.url} 
                  icon={social.icon} 
                  label={social.label} 
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#home" text="Home" />
              <FooterLink href="#about" text="About" />
              <FooterLink href="#services" text="Services" />
              <FooterLink href="#projects" text="Projects" />
              <FooterLink href="#contact" text="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Services
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Web Development" />
              <FooterLink href="#" text="UI/UX Design" />
              <FooterLink href="#" text="Mobile Optimization" />
              <FooterLink href="#" text="Backend Development" />
              <FooterLink href="#" text="Performance Tuning" />
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h3>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
              <span>mdhridoy3240@gmail.com</span>
            </div>
            <p className="text-sm">
              Interested in working together? Let's connect and discuss your project.
            </p>
            <Link 
              href="#contact" 
              className={`inline-block px-4 py-2 rounded-md font-medium ${
                theme === 'dark' 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
              } transition-colors duration-300`}
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t text-center text-sm ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p>© {new Date().getFullYear()} Md. Hridoy Sheikh. All rights reserved.</p>
          <p className="mt-1">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, text }) => {
  const { theme } = useTheme();
  
  return (
    <li>
      <Link 
        href={href} 
        className={`hover:text-indigo-500 transition-colors duration-300 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {text}
      </Link>
    </li>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, label }) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`p-2 rounded-full transition-colors duration-300 ${
        theme === 'dark' 
          ? 'hover:bg-gray-700 text-gray-300' 
          : 'hover:bg-gray-100 text-gray-700'
      }`}
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;