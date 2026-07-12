"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = ({ id }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:mdhridoy3240@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section 
      id={id || "contact"} 
      className="w-full py-24 bg-[#050816] text-white relative overflow-hidden"
    >
      {/* Background vector glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let's Collaborate
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
            Have a project in mind or want to discuss full-stack opportunities? Send a message and let's start talking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Card */}
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/5 shadow-lg flex-1">
              <h3 className="text-lg font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 text-green-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
                      Email
                    </p>
                    <a 
                      href="mailto:mdhridoy3240@gmail.com" 
                      className="text-sm text-gray-300 hover:text-green-400 transition-colors"
                    >
                      mdhridoy3240@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 text-green-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
                      Phone
                    </p>
                    <a 
                      href="tel:+88017411654673" 
                      className="text-sm text-gray-300 hover:text-green-400 transition-colors"
                    >
                      +880 1741-1654673
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 text-green-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
                      Location
                    </p>
                    <p className="text-sm text-gray-300">
                      Faridpur, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials Card */}
            <div className="p-6 rounded-[24px] bg-white/5 border border-white/5 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: <Github className="h-4.5 w-4.5" />, url: "https://github.com/hd31520", label: "GitHub" },
                  { icon: <Linkedin className="h-4.5 w-4.5" />, url: "https://www.linkedin.com/in/mdhridoysheikh/", label: "LinkedIn" },
                  { icon: <Facebook className="h-4.5 w-4.5" />, url: "https://www.facebook.com/Hridoy3240/", label: "Facebook" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-green-500 hover:bg-white/10 hover:border-green-500/20 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-[24px] bg-white/5 border border-white/5 shadow-lg">
            <h3 className="text-lg font-bold text-white mb-6">
              Send Me a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 mb-1.5 tracking-wider uppercase">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-green-500/30 focus:outline-none transition-colors text-sm"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-400 mb-1.5 tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-green-500/30 focus:outline-none transition-colors text-sm"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-400 mb-1.5 tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-green-500/30 focus:outline-none transition-colors text-sm resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-green-500 hover:bg-green-600 text-[#050816] text-sm font-bold shadow-lg shadow-green-500/10 transition-colors mt-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
