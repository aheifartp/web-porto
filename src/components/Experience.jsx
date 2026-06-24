"use client";

const experiences = [
  {
    title: "Network Operation Center (NOC)",
    company: "PT Nale System Integrator, Malang",
    period: "Feb 2026 – Present",
    delay: "100",
    color: "accent",
    points: [
      "Monitored network uptime, performance, and security across 2+ client sites.",
      "Identified and resolved Tier 1 network incidents and connectivity issues.",
      "Analyzed security threats and compiled monthly threat intelligence reports."
    ]
  },
  {
    title: "Staff IT Infrastructure",
    company: "PT Cipta Harmoni Lestari, Tangerang",
    period: "Jan 2026 – Feb 2026",
    delay: "150",
    color: "textmain",
    points: [
      "Deployed and configured IT network and IoT systems for 3 home clients, 3 office buildings, and 1 cluster environment.",
      "Configured IT systems and network equipment."
    ]
  },
  {
    title: "Microcontroller Practicum Assistant",
    company: "Brawijaya University, Malang",
    period: "Aug 2025 – Dec 2025",
    delay: "200",
    color: "textmain",
    points: [
      "Assisted in teaching and supervising 30+ students in Microcontrollers practicum course.",
      "Guided students in programming microcontrollers using C and C++, including GPIO, interrupts, and peripheral interfacing.",
      "Prepared experiment modules, demonstrated procedures, and troubleshot hardware and firmware issues during lab sessions."
    ]
  },
  {
    title: "Advanced Electronic Circuits Practicum Assistant",
    company: "Brawijaya University, Malang",
    period: "Feb 2025 – Jun 2025",
    delay: "250",
    color: "textmain",
    points: [
      "Assisted in teaching and supervising 30+ students in Advanced Electronic Circuits practicum course.",
      "Guided students in analyzing and building circuits involving op-amps, filters, amplifiers, and feedback systems.",
      "Prepared and set up lab experiments, demonstrated measurement procedures, and ensured safe handling of equipment."
    ]
  },
  {
    title: "Digital System Practicum Assistant",
    company: "Brawijaya University, Malang",
    period: "Aug 2024 – Dec 2024",
    delay: "300",
    color: "textmain",
    points: [
      "Assisted in teaching and supervising 30+ students in Digital Systems practicum course.",
      "Guided students in understanding logic gates, combinational and sequential circuits, and FPGA/HDL fundamentals.",
      "Prepared experiment setups, demonstrated circuit procedures, and troubleshot digital circuit issues during lab sessions."
    ]
  },
  {
    title: "Assistant of Robotics and Embedded System Laboratory",
    company: "Brawijaya University, Malang",
    period: "Feb 2024 – Present",
    delay: "350",
    color: "textmain",
    points: [
      "Managed laboratory operations by overseeing inventory, maintaining and troubleshooting equipment, and supporting practicum activities."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bgsec dark:bg-darkBgsec transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-textmain dark:text-darkTextmain mb-16 flex items-center font-mono" data-aos="fade-right">
          <span className="text-accent mr-3">02.</span> Experience
          <div className="ml-6 flex-grow h-px bg-bordercolor dark:bg-darkBordercolor"></div>
        </h2>
        
        <div className="space-y-12 border-l-4 border-accent/30 dark:border-accent/15 pl-6 md:pl-8 ml-3 md:ml-4 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item relative group" data-aos="fade-up" data-aos-delay={exp.delay}>
              <div className={`experience-marker absolute -left-[37px] md:-left-[45px] top-1 h-6 w-6 rounded-full bg-white dark:bg-darkBgsec border-4 shadow-md ${exp.color === 'accent' ? 'border-accent' : 'border-textmain dark:border-darkTextmuted'}`}></div>
              <div className="bg-white dark:bg-darkBgmain p-6 rounded-xl shadow-sm border border-bordercolor dark:border-darkBordercolor group-hover:shadow-lg group-hover:border-accent/50 dark:group-hover:border-accent/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-textmain dark:text-darkTextmain">{exp.title}</h3>
                    <p className="text-accent font-mono text-sm font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm font-semibold text-textmuted dark:text-darkTextmuted font-mono mt-1 md:mt-0">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-textmuted dark:text-darkTextmuted space-y-2 mt-4">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
