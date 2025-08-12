"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. We start with a consistent default theme on both the server and client.
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // 2. This code runs only on the client after the component has mounted.
    // We get the theme from localStorage and update the state.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []); // The empty dependency array ensures this runs only once on mount.

  // 3. This useEffect handles side effects whenever the theme state changes.
  useEffect(() => {
    // We update localStorage and the document's data-theme attribute.
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
