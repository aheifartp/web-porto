"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { List, Moon, Sun } from "@phosphor-icons/react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent hydration mismatch for next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Scroll spy logic
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Check if section is active (adjust 200px offset for fixed navbar)
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 bg-white/80 dark:bg-darkBgmain/80 backdrop-blur-md border-b border-bordercolor dark:border-darkBordercolor transition-all duration-300 ${isScrolled ? "shadow-sm nav-scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand logo */}
          <div className="flex-shrink-0 font-mono text-textmain dark:text-darkTextmain font-bold text-xl tracking-tighter hover:text-accent transition-colors">
            <Link href="#home">&gt;_ Rafie<span className="text-accent">.</span></Link>
          </div>
          
          {/* Desktop Menu & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`nav-link text-textmain dark:text-darkTextmain hover:text-accent dark:hover:text-accent transition-colors duration-300 ${activeSection === link.href.substring(1) ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle Switch */}
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="p-2 rounded-lg text-textmain dark:text-darkTextmain hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none" 
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun className="text-2xl" weight="fill" /> : <Moon className="text-2xl" weight="fill" />}
              </button>
            )}
          </div>
          
          {/* Mobile Menu Button & Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {mounted && (
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="p-2 rounded-lg text-textmain dark:text-darkTextmain hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none" 
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun className="text-2xl" weight="fill" /> : <Moon className="text-2xl" weight="fill" />}
              </button>
            )}
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-textmain dark:text-darkTextmain hover:text-accent focus:outline-none transition-colors"
            >
              <List className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-darkBgmain border-b border-bordercolor dark:border-darkBordercolor shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center flex flex-col font-semibold">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-textmain dark:text-darkTextmain hover:text-accent transition ${activeSection === link.href.substring(1) ? "text-accent dark:text-accent" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
