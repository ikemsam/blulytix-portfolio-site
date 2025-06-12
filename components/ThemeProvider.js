"use client";

import { createContext, useState, useEffect, useContext } from 'react';

// 1. Create the context with a default state.
// This prevents the "undefined" error if a component accidentally renders
// outside the provider during a server-side render or a re-render.
const defaultState = {
  theme: 'dark', // Default to a theme to avoid errors
  toggleTheme: () => {}, // Provide a no-op function as a default
};
const ThemeContext = createContext(defaultState);

// 2. Create the provider component.
export const ThemeProvider = ({ children }) => {
  // We still manage the theme state here. The default state above is just a fallback.
  const [theme, setTheme] = useState('dark');

  // This effect runs only on the client after the component mounts.
  // It safely checks localStorage and updates the theme to the user's preference.
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create the custom hook.
// It will now safely return the defaultState if no provider is found,
// preventing the application from crashing.
export const useTheme = () => {
  return useContext(ThemeContext);
};
