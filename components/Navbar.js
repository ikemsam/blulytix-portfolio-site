// src/components/Navbar.js

"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const currentLogoSrc = theme === 'dark' 
                         ? '/images/logos/blulytix-logo-light.svg'
                         : '/images/logos/blulytix-logo-dark.svg';  

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-40 
                    ${theme === 'dark' ? 'bg-[#0f0f0f] text-[#f7f9f9]' : 'bg-[#f7f9f9] text-[#0f0f0f]'}`}>

      {/* Navigation Links (Now on the left) */}
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-[#2A8CFC] transition-colors duration-200">
          Home
        </Link>
        <Link href="/projects" className="hover:text-[#2A8CFC] transition-colors duration-200">
          Projects
        </Link>
        <Link href="/resume" className="hover:text-[#2A8CFC] transition-colors duration-200">
          Resume
        </Link>
        <Link href="/certifications" className="hover:text-[#2A8CFC] transition-colors duration-200">
          Certifications
        </Link>
        <a href="mailto:ikemsamuel66@gmail.com" className="hover:text-[#2A8CFC] transition-colors duration-200">
          Contact
        </a>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300
                     ${theme === 'dark' ? 'bg-[#2A8CFC] text-white hover:bg-blue-700' : 'bg-[#FF6B6B] text-[#0f0f0f] hover:bg-red-700'}`}
        >
          Toggle {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Logo (Now on the right) */}
      <Link href="/">
        <Image
          src={currentLogoSrc}
          alt="Blulytix AI Logo"
          width={150}
          height={60}
          priority
        />
      </Link>

    </nav>
  );
}