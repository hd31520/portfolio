"use client";

import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const AboutSection = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <FaCode className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Beautiful, responsive interfaces with React, Next.js, and Tailwind CSS"
    },
    {
      icon: <FaServer className="h-6 w-6" />,
      title: "Backend Development",
      description: "Robust APIs and server-side logic with Node.js and Express"
    },
    {
      icon: <FaMobileAlt className="h-6 w-6" />,
      title: "Mobile Responsive",
      description: "Designs that work flawlessly on all devices"
    },
    {
      icon: <FaDatabase className="h-6 w-6" />,
      title: "Database Design",
      description: "Efficient data storage solutions with MongoDB and Firebase"
    }
  ];

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark' ? 'var(--color-gray-900)' : 'var(--color-gray-50)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with corrected aspect ratio */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            {/* This div creates a responsive 1:1 aspect ratio box */}
            <div className="relative pt-[100%]">
              <Image
                src="/hridoy2.png"
                alt="Md. Hridoy Sheikh working"
                fill
                className="absolute top-0 left-0 object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 
              className="text-3xl font-bold mb-6 transition-colors duration-300"
              style={{
                color: theme === 'dark' ? 'var(--color-white)' : 'var(--color-gray-900)'
              }}
            >
              About Me
            </h2>
            
            <div className="space-y-4">
              <p 
                className="text-lg transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? 'var(--color-gray-300)' : 'var(--color-gray-600)'
                }}
              >
                Hi, I'm Hridoy! I'm a passionate full-stack developer with 3+ years of experience building modern web applications.
              </p>
              
              <p 
                className="text-lg transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? 'var(--color-gray-300)' : 'var(--color-gray-600)'
                }}
              >
                I specialize in JavaScript technologies across the whole stack (React.js, Node.js, Express.js, and MongoDB). I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              
              <p 
                className="text-lg transition-colors duration-300"
                style={{
                  color: theme === 'dark' ? 'var(--color-gray-300)' : 'var(--color-gray-600)'
                }}
              >
                When I'm not coding, you'll find me contributing to open-source projects, learning new technologies, or sharing knowledge through blog posts and tutorials.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: theme === 'dark' ? 'var(--color-gray-800)' : 'var(--color-white)',
                    borderColor: theme === 'dark' ? 'var(--color-gray-700)' : 'var(--color-gray-200)',
                    borderWidth: '1px'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-md"
                      style={{
                        backgroundColor: theme === 'dark' ? 'var(--color-gray-700)' : 'var(--color-gray-100)'
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 
                        className="font-semibold transition-colors duration-300"
                        style={{
                          color: theme === 'dark' ? 'var(--color-white)' : 'var(--color-gray-800)'
                        }}
                      >
                        {service.title}
                      </h3>
                      <p 
                        className="text-sm transition-colors duration-300"
                        style={{
                          color: theme === 'dark' ? 'var(--color-gray-400)' : 'var(--color-gray-600)'
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
