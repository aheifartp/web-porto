import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-darkBgmain relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-textmain dark:text-darkTextmain mb-12 flex items-center font-mono" data-aos="fade-right">
          <span className="text-accent mr-3">01.</span> About Me
          <div className="ml-6 flex-grow h-px bg-bordercolor dark:bg-darkBordercolor"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-textmuted dark:text-darkTextmuted leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="100">
            <p>
              I am a Computer Engineering student at <strong>Universitas Brawijaya</strong> with a current GPA of <span className="text-accent font-bold">3.82</span>. I have a strong foundation and keen interest in IoT systems, embedded development, and computer vision.
            </p>
            <p>
              I am passionate about building intelligent connected systems — from programming microcontrollers and integrating sensors, to developing real-time vision-based detection applications. I also have hands-on experience in network infrastructure and IT systems integration.
            </p>
          </div>
          <div className="relative group" data-aos="zoom-in" data-aos-delay="200">
            {/* Background accent square */}
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            {/* Photo Image with dark mode border compatibility */}
            <Image 
              src="/foto linkedin.jpg" 
              alt="Rafie Profile" 
              width={400}
              height={400}
              className="relative z-10 rounded-xl shadow-xl filter grayscale group-hover:grayscale-0 transition-all duration-500 w-full object-cover border-4 border-white dark:border-darkBgsec"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
