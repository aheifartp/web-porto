"use client";

import { useState } from "react";
import Image from "next/image";
import { Brain, Leaf, Smiley, Database, ShoppingBag, Calculator, ArrowsLeftRight, Globe, Car, Eye, GithubLogo } from "@phosphor-icons/react";

const projects = [
  {
    id: 1,
    title: "ML for Dissolved Oxygen Prediction",
    description: "Developed a machine learning model to predict dissolved oxygen levels in aquaculture environments, assisting farmers in water quality management.",
    image: "/assets/images/ml_oxygen.png",
    tags: ["ml"],
    badges: ["Python", "Machine Learning"],
    github: "https://github.com/aheifartp/Machine-Learning-to-predict-dissloved-oxygen-in-water",
    delay: "100",
    Icon: Brain
  },
  {
    id: 2,
    title: "Smart Plant Care System",
    description: "IoT-based automated plant care device that monitors soil moisture, ambient temperature, and light levels to automate watering.",
    image: "/assets/images/smart_plant.png",
    tags: ["iot"],
    badges: ["IoT", "C/C++", "Sensors"],
    github: "https://github.com/aheifartp/Smart-Plant-Care",
    delay: "200",
    Icon: Leaf
  },
  {
    id: 3,
    title: "Real-time Smile Detection",
    description: "Computer vision application that detects human faces and classifies expressions in real-time camera streams to identify smiles.",
    image: "/assets/images/smile_detection.png",
    tags: ["ml"],
    badges: ["Python", "AI / CV"],
    github: "https://github.com/aheifartp/smile_detection",
    delay: "300",
    Icon: Smiley
  },
  {
    id: 4,
    title: "3-Tier Network Architecture Lab",
    description: "Designed and configured a local 3-Tier Network Architecture (Core, Distribution, and Access layers) to optimize traffic routing, redundancy, and network segmentation.",
    image: "/assets/images/datacenter_sim.png",
    tags: ["networking"],
    badges: ["Networking", "Cisco", "IT Infra"],
    github: "https://github.com/aheifartp/3-Tier-Network-Architecture-Lab-Local-",
    delay: "100",
    Icon: Database
  },
  {
    id: 5,
    title: "Mini Market POS System",
    description: "Cashier ledger and inventory database management program designed for small businesses to log sales transactions and items restocking.",
    image: "/assets/images/mini_market.png",
    tags: ["web"],
    badges: ["Coding", "POS", "Java/C#"],
    github: "https://github.com/aheifartp/mini_market",
    delay: "200",
    Icon: ShoppingBag
  },
  {
    id: 6,
    title: "Simple Cashier App",
    description: "Lightweight cashier program for managing checkouts, billing calculation, and itemized logs for everyday store transactions.",
    image: "/assets/images/kasir_app.png",
    tags: ["web"],
    badges: ["Coding", "C++", "Console App"],
    github: "https://github.com/aheifartp/Kasir-sederhana",
    delay: "300",
    Icon: Calculator
  },
  {
    id: 7,
    title: "Database Migration System",
    description: "Automated database migration tool ensuring secure schema structures and record transfers between database engines.",
    image: "/assets/images/db_migration.png",
    tags: ["web"],
    badges: ["Coding", "Databases", "Automation"],
    github: "https://github.com/aheifartp/Sistem-Migrasi",
    delay: "100",
    Icon: ArrowsLeftRight
  },
  {
    id: 8,
    title: "Interactive Personal Portfolio",
    description: "Modern, premium personal portfolio website detailing skills and project links. Built with custom CSS/JS, and Formspree AJAX handlers.",
    image: "/assets/images/portfolio_mockup.png",
    tags: ["web"],
    badges: ["HTML/JS", "Tailwind", "Dashboard"],
    github: "https://github.com/aheifartp/web-porto",
    delay: "200",
    Icon: Globe
  },
  {
    id: 9,
    title: "Autonomous Navigation Car",
    description: "Arduino-based scale autonomous vehicle that navigates to set GPS coordinates, maintains direction with PID controls and QMC5883 compass feedback, and avoids obstacles using ultrasonic sensors.",
    image: "/assets/images/autonomous_car.jpg",
    tags: ["iot"],
    badges: ["Arduino", "PID Control", "Sensors"],
    github: "https://github.com/aheifartp/autonomous-car",
    delay: "300",
    Icon: Car
  },
  {
    id: 10,
    title: "Optical Flow Obstacle Detector",
    description: "Real-time Android application for obstacle detection using OpenCV Farneback optical flow, radial expansion (looming), temporal integration, and TTS voice warnings in Bahasa Indonesia.",
    image: "/assets/images/obstacle_detection.png",
    tags: ["ml"],
    badges: ["Kotlin", "OpenCV", "Android"],
    github: "https://github.com/phasyavigo/object-detection-app-using-optical-flow-",
    delay: "100",
    Icon: Eye
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.tags.includes(filter)
  );

  return (
    <section id="projects" className="py-24 bg-bgsec dark:bg-darkBgsec transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-textmain dark:text-darkTextmain mb-12 flex items-center font-mono" data-aos="fade-right">
          <span className="text-accent mr-3">04.</span> Featured Projects
          <div className="ml-6 flex-grow h-px bg-bordercolor dark:bg-darkBordercolor"></div>
        </h2>

        {/* Project Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
          {[
            { id: "all", label: "All Projects" },
            { id: "networking", label: "IT Infra & Networking" },
            { id: "iot", label: "IoT & Hardware" },
            { id: "ml", label: "ML/AI" },
            { id: "web", label: "Coding & Web" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-6 py-2 font-bold rounded-full border-2 transition-all duration-300 shadow-md hover:-translate-y-0.5 ${
                filter === tab.id
                  ? "bg-accent text-white border-accent"
                  : "bg-white text-textmain border-bordercolor dark:bg-darkBgsec dark:text-darkTextmain dark:border-darkBordercolor hover:border-accent hover:text-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-container transition-all duration-300 transform" data-aos="fade-up" data-aos-delay={project.delay}>
              <div className="project-card bg-white dark:bg-darkBgmain rounded-xl overflow-hidden border border-bordercolor dark:border-darkBordercolor flex flex-col h-full shadow-sm hover:shadow-lg group">
                <div className="h-48 overflow-hidden relative border-b border-bordercolor dark:border-darkBordercolor">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="absolute top-0 right-6 -translate-y-1/2 p-3 bg-textmain dark:bg-darkBgsec text-white rounded-full group-hover:bg-accent transition-colors shadow-lg border border-bordercolor/10">
                    <project.Icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-textmain dark:text-darkTextmain mb-3 mt-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-textmuted dark:text-darkTextmuted text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-bordercolor/50 dark:border-darkBordercolor/50">
                    <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold text-accent">
                      {project.badges.map((badge, idx) => (
                        <span key={idx} className="bg-orange-50 dark:bg-orange-950/20 px-2 py-1 rounded">{badge}</span>
                      ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-textmain dark:text-darkTextmain hover:text-accent dark:hover:text-accent transition-colors" title="View Repository">
                      <GithubLogo className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
