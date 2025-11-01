"use client";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Facebook } from "lucide-react";

const ContactSection = () => {
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
    <section id="contact" className={`w-full py-16 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className={`p-6 rounded-xl transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <h3 className={`text-xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-100'
                  }`}>
                    <Mail className={`h-5 w-5 ${
                      theme === 'dark' ? 'text-white' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Email
                    </p>
                    <a 
                      href="mailto:mdhridoy3240@gmail.com" 
                      className={`hover:text-indigo-500 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      mdhridoy3240@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-100'
                  }`}>
                    <Phone className={`h-5 w-5 ${
                      theme === 'dark' ? 'text-white' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Phone
                    </p>
                    <a 
                      href="tel:+88017411654673" 
                      className={`hover:text-indigo-500 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      +880 1741-1654673
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${
                    theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-100'
                  }`}>
                    <MapPin className={`h-5 w-5 ${
                      theme === 'dark' ? 'text-white' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Location
                    </p>
                    <p className={`${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Kanaipur, Faridpur, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`p-6 rounded-xl transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <h3 className={`text-xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Follow Me
              </h3>
              <div className="flex gap-4">
                
                <a 
                  href="https://github.com/hd31520" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mdhridoysheikh/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/Hridoy3240/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  aria-label="Twitter"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-6 rounded-xl transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
          } shadow-lg`}>
            <h3 className={`text-xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              Send Me a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 text-white' 
                      : 'bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900'
                  }`}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 text-white' 
                      : 'bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900'
                  }`}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 text-white' 
                      : 'bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900'
                  }`}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;