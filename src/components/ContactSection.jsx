"use client";

import React, { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, CheckCircle } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ContactSection = ({ id }) => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:mdhridoy3240@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "mdhridoy3240@gmail.com", href: "mailto:mdhridoy3240@gmail.com" },
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+880 1741-1654673", href: "tel:+8801741654673" },
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Faridpur, Dhaka, Bangladesh", href: null },
  ];

  const socials = [
    { icon: <Github className="h-4.5 w-4.5" />, url: "https://github.com/hd31520", label: "GitHub" },
    { icon: <Linkedin className="h-4.5 w-4.5" />, url: "https://www.linkedin.com/in/mdhridoysheikh/", label: "LinkedIn" },
    { icon: <Facebook className="h-4.5 w-4.5" />, url: "https://www.facebook.com/Hridoy3240/", label: "Facebook" },
  ];

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border text-[var(--color-foreground)] placeholder-[var(--text-muted)]/50 focus:outline-none transition-all duration-300 text-sm";

  return (
    <section
      id={id || "contact"}
      ref={ref}
      className="w-full py-24 bg-[var(--color-background)] text-[var(--color-foreground)] relative overflow-hidden transition-colors duration-300"
    >
      {/* Background orbs */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-green-500/[var(--glow-opacity)] blur-[130px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-indigo-500/[var(--glow-opacity)] blur-[100px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold mb-3"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-foreground)] tracking-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-green-500 to-indigo-500 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto mt-2 leading-relaxed">
            Have a project in mind? Send a message and let's start building something great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left – Info */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Contact Info Card */}
            <div className="p-6 rounded-[24px] bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg flex-1 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-6 relative z-10">
                Contact Information
              </h3>
              <div className="space-y-6 relative z-10">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="p-2.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] text-green-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] font-semibold tracking-wider uppercase">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[var(--color-foreground)] hover:text-green-500 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[var(--color-foreground)]">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Socials Card */}
            <motion.div
              className="p-6 rounded-[24px] bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-4 relative z-10">
                Connect With Me
              </h3>
              <div className="flex gap-3 relative z-10">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-green-500 hover:border-green-500/20 transition-all"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            className="lg:col-span-7 p-8 rounded-[24px] bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Shimmer on card */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/3 to-indigo-500/3 pointer-events-none"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-6 relative z-10">
              Send Me a Message
            </h3>

            <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
              {["name", "email"].map((field) => (
                <motion.div key={field} whileFocus={{ scale: 1.01 }}>
                  <label
                    htmlFor={field}
                    className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 tracking-wider uppercase"
                  >
                    {field}
                  </label>
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${focused === field ? "border-green-500/50 shadow-[0_0_0_3px_rgba(34,197,94,0.08)]" : "border-[var(--card-border)]"}`}
                    placeholder={field === "name" ? "Your name..." : "your@email.com"}
                    required
                  />
                </motion.div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-[var(--text-muted)] mb-1.5 tracking-wider uppercase"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputBase} resize-none ${focused === "message" ? "border-green-500/50 shadow-[0_0_0_3px_rgba(34,197,94,0.08)]" : "border-[var(--card-border)]"}`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-sm font-bold"
                  >
                    <CheckCircle className="h-4 w-4" /> Opening your email client…
                  </motion.div>
                ) : (
                  <motion.button
                    key="send"
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(34,197,94,0.2)" }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-bold shadow-lg shadow-green-500/10 transition-colors mt-2 relative overflow-hidden"
                  >
                    {/* Shimmer */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <Send className="h-4 w-4" />
                    Send Message
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
