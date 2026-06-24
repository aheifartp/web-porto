"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BracketsCurly, HardDrives } from "@phosphor-icons/react";

export default function Hero() {
  const [text, setText] = useState("");
  const words = [
    "IoT Developer",
    "Embedded Systems Builder",
    "Computer Engineering Student",
    "IoT Developer & Embedded Systems Builder"
  ];

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;
    let timer;

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        charIndex--;
        delay = 75;
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        delay = 150;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500;
      }

      timer = setTimeout(type, delay);
    };

    timer = setTimeout(type, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-bgsec dark:bg-darkBgsec transition-colors duration-300">
      {/* Animated Decorative Background Circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/15 dark:bg-accent/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-70 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/20 dark:bg-yellow-500/5 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-10 text-accent/20 dark:text-accent/10 animate-bounce delay-150"><BracketsCurly className="text-6xl" /></div>
      <div className="absolute bottom-32 right-20 text-textmain/10 dark:text-darkTextmain/5 animate-pulse"><HardDrives className="text-8xl" /></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="font-mono text-accent font-bold mb-4 tracking-wide uppercase" data-aos="fade-up">Hello, I am</p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-textmain dark:text-darkTextmain mb-4 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          Rafie Habibi.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-textmuted dark:text-darkTextmuted font-semibold mb-6 min-h-[40px] md:min-h-[50px]" data-aos="fade-up" data-aos-delay="200">
          <span>{text}</span><span className="typing-cursor"></span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-textmuted dark:text-darkTextmuted max-w-2xl mx-auto mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
          CCNA and MTCNA certified Computer Engineering student with hands-on experience in IoT device deployment, embedded systems development, and computer vision. Passionate about building intelligent connected systems from hardware to software.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6" data-aos="zoom-in" data-aos-delay="400">
          <Link href="#projects" className="px-8 py-3 bg-white dark:bg-darkBgsec border-2 border-textmain dark:border-darkBordercolor text-textmain dark:text-darkTextmain font-bold rounded shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] dark:shadow-[4px_4px_0px_0px_rgba(249,115,22,0.3)] hover:shadow-none hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto text-center">
            View My Projects
          </Link>
          <Link href="#contact" className="px-8 py-3 bg-accent border-2 border-accent text-white font-bold rounded shadow-[4px_4px_0px_0px_rgba(234,88,12,1)] hover:shadow-none hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto text-center">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
