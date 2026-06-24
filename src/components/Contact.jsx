import { CircleDashed, Triangle, EnvelopeSimple, LinkedinLogo, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-darkBgmain relative transition-colors duration-300 overflow-hidden">
      {/* Floating ambient shapes */}
      <div className="absolute top-10 left-10 text-accent/20 dark:text-accent/5 animate-spin-slow duration-[10000ms]">
        <CircleDashed className="text-6xl" weight="fill" />
      </div>
      <div className="absolute bottom-10 right-10 text-textmain/10 dark:text-darkTextmain/5 animate-bounce delay-500">
        <Triangle className="text-6xl" weight="fill" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-sm font-mono font-bold text-accent mb-4 tracking-widest uppercase" data-aos="fade-up">05. What's Next?</h2>
        <h2 className="text-4xl md:text-5xl font-black text-textmain dark:text-darkTextmain mb-6" data-aos="fade-up" data-aos-delay="100">Get In Touch</h2>
        <p className="text-textmuted dark:text-darkTextmuted max-w-xl mx-auto mb-10 text-lg" data-aos="fade-up" data-aos-delay="200">
          I am always open to new opportunities in IT Infrastructure, Networking, and IoT. Whether you have a technical question or just want to say hi, feel free to reach out!
        </p>
        
        {/* Social profiles */}
        <div className="flex justify-center space-x-8 mb-12" data-aos="zoom-in" data-aos-delay="300">
          <a href="mailto:mrafiehabibi01@gmail.com" className="text-textmain dark:text-darkTextmain hover:text-accent dark:hover:text-accent transition-colors transform hover:-translate-y-2 hover:scale-110 duration-300" title="Email">
            <EnvelopeSimple className="text-4xl drop-shadow-md" weight="fill" />
          </a>
          <a href="https://www.linkedin.com/in/rafiehabibi/" target="_blank" rel="noopener noreferrer" className="text-textmain dark:text-darkTextmain hover:text-accent dark:hover:text-accent transition-colors transform hover:-translate-y-2 hover:scale-110 duration-300" title="LinkedIn">
            <LinkedinLogo className="text-4xl drop-shadow-md" weight="fill" />
          </a>
          <a href="https://github.com/aheifartp" target="_blank" rel="noopener noreferrer" className="text-textmain dark:text-darkTextmain hover:text-accent dark:hover:text-accent transition-colors transform hover:-translate-y-2 hover:scale-110 duration-300" title="GitHub">
            <GithubLogo className="text-4xl drop-shadow-md" weight="fill" />
          </a>
        </div>
      </div>
    </section>
  );
}
