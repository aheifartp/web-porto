"use client";

import { useState, useEffect } from "react";
import { CaretDoubleUp } from "@phosphor-icons/react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accentDark shadow-lg border-2 border-white dark:border-darkBordercolor focus:outline-none transition-all duration-300 animate-bounce"
      title="Back to Top"
    >
      <CaretDoubleUp className="text-2xl font-bold" />
    </button>
  );
}
