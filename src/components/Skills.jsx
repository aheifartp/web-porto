import { Cpu, HardDrives, ShieldCheck, Code, Certificate, GitFork, Desktop, GlobeHemisphereEast, Translate } from "@phosphor-icons/react/dist/ssr";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-darkBgmain overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-textmain dark:text-darkTextmain mb-12 flex items-center font-mono" data-aos="fade-right">
          <span className="text-accent mr-3">03.</span> Skills & Certifications
          <div className="ml-6 flex-grow h-px bg-bordercolor dark:bg-darkBordercolor"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: IoT & Networking */}
          <div className="space-y-10">
            {/* IoT & Embedded Systems */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-textmain dark:text-darkTextmain mb-6 flex items-center">
                <div className="p-2 bg-orange-100 dark:bg-orange-950/30 rounded-lg mr-3 text-accent"><Cpu className="text-2xl" /></div>
                IoT & Embedded Systems
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/arduino" alt="Arduino Logo" className="w-5 h-5 object-contain" />
                  Arduino
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/espressif" alt="ESP32 Logo" className="w-5 h-5 object-contain" />
                  ESP32
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/mqtt" alt="MQTT Logo" className="w-5 h-5 object-contain" />
                  MQTT
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/blender" alt="Blender Logo" className="w-5 h-5 object-contain" />
                  3D Design
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/lorawan" alt="LoRA Logo" className="w-5 h-5 object-contain" />
                  LoRA
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/nodered" alt="Node-RED Logo" className="w-5 h-5 object-contain" />
                  Node-RED
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/blynk" alt="Blynk Logo" className="w-5 h-5 object-contain" />
                  Blynk
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/opencv" alt="OpenCV Logo" className="w-5 h-5 object-contain" />
                  OpenCV
                </span>
              </div>
            </div>

            {/* Networking & Infrastructure */}
            <div data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-2xl font-bold text-textmain dark:text-darkTextmain mb-6 flex items-center">
                <div className="p-2 bg-orange-100 dark:bg-orange-950/30 rounded-lg mr-3 text-accent"><HardDrives className="text-2xl" /></div>
                Networking & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/mikrotik" alt="MikroTik Logo" className="w-5 h-5 object-contain" />
                  MikroTik
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/cisco" alt="Cisco Logo" className="w-5 h-5 object-contain" />
                  Cisco
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/ubiquiti" alt="UniFi Logo" className="w-5 h-5 object-contain" />
                  UniFi
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/sophos" alt="Sophos Logo" className="w-5 h-5 object-contain" />
                  Sophos
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <GitFork className="text-xl text-accent" />
                  Routing & Switching
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <Desktop className="text-xl text-accent" />
                  PNETLab
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/cisco" alt="Cisco Logo" className="w-5 h-5 object-contain" />
                  Packet Tracer
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/gns3" alt="GNS3 Logo" className="w-5 h-5 object-contain" />
                  GNS3
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: SysAdmin, Programming & Certifications */}
          <div className="space-y-10">
            {/* SysAdmin & Virtualization */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-textmain dark:text-darkTextmain mb-6 flex items-center">
                <div className="p-2 bg-orange-100 dark:bg-orange-950/30 rounded-lg mr-3 text-accent"><ShieldCheck className="text-2xl" /></div>
                SysAdmin & Virtualization
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/proxmox" alt="Proxmox Logo" className="w-5 h-5 object-contain" />
                  Proxmox
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/vmware" alt="VMware Logo" className="w-5 h-5 object-contain" />
                  VMware
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/docker" alt="Docker Logo" className="w-5 h-5 object-contain" />
                  Docker
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/virtualbox" alt="VirtualBox Logo" className="w-5 h-5 object-contain" />
                  VirtualBox
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/ubuntu" alt="Ubuntu Logo" className="w-5 h-5 object-contain" />
                  Linux (Ubuntu Server)
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/nginx" alt="Nginx Logo" className="w-5 h-5 object-contain" />
                  Nginx
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/apache" alt="Apache Logo" className="w-5 h-5 object-contain" />
                  Apache
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/prometheus" alt="Prometheus Logo" className="w-5 h-5 object-contain" />
                  Prometheus
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/grafana" alt="Grafana Logo" className="w-5 h-5 object-contain" />
                  Grafana
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <GlobeHemisphereEast className="text-xl text-accent" />
                  BIND9
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-full border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/gnubash" alt="Bash Logo" className="w-5 h-5 object-contain" />
                  Bash scripting
                </span>
              </div>
            </div>

            {/* Programming & Automation */}
            <div data-aos="fade-up" data-aos-delay="250">
              <h3 className="text-2xl font-bold text-textmain dark:text-darkTextmain mb-6 flex items-center">
                <div className="p-2 bg-orange-100 dark:bg-orange-950/30 rounded-lg mr-3 text-accent"><Code className="text-2xl" /></div>
                Programming & Automation
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-textmain dark:bg-darkBgsec text-white dark:text-darkTextmain font-mono rounded border-2 border-textmain dark:border-darkBordercolor hover:bg-accent hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/python/ffffff" alt="Python Logo" className="w-5 h-5 object-contain" />
                  Python
                </span>
                <span className="px-4 py-2 bg-textmain dark:bg-darkBgsec text-white dark:text-darkTextmain font-mono rounded border-2 border-textmain dark:border-darkBordercolor hover:bg-accent hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/cplusplus/ffffff" alt="C++ Logo" className="w-5 h-5 object-contain" />
                  C++
                </span>
                <span className="px-4 py-2 bg-textmain dark:bg-darkBgsec text-white dark:text-darkTextmain font-mono rounded border-2 border-textmain dark:border-darkBordercolor hover:bg-accent hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/c/ffffff" alt="C Logo" className="w-5 h-5 object-contain" />
                  C Language
                </span>
                <span className="px-4 py-2 bg-textmain dark:bg-darkBgsec text-white dark:text-darkTextmain font-mono rounded border-2 border-textmain dark:border-darkBordercolor hover:bg-accent hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/sqlite/ffffff" alt="SQL Logo" className="w-5 h-5 object-contain" />
                  SQL
                </span>
              </div>
            </div>

            {/* Certifications */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-textmain dark:text-darkTextmain mb-6 flex items-center">
                <div className="p-2 bg-orange-100 dark:bg-orange-950/30 rounded-lg mr-3 text-accent"><Certificate className="text-2xl" /></div>
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent text-white font-bold rounded-lg shadow-md hover:scale-105 transition-transform cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/mikrotik/ffffff" alt="MikroTik Logo" className="w-5 h-5 object-contain" />
                  MTCNA
                </span>
                <span className="px-4 py-2 bg-accent text-white font-bold rounded-lg shadow-md hover:scale-105 transition-transform cursor-default flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/cisco/ffffff" alt="Cisco Logo" className="w-5 h-5 object-contain" />
                  CCNA
                </span>
                <span className="px-4 py-2 bg-white dark:bg-darkBgsec text-textmain dark:text-darkTextmain font-medium rounded-lg border-2 border-bordercolor dark:border-darkBordercolor hover:border-accent dark:hover:border-accent hover:-translate-y-1 hover:shadow-md transition-all cursor-default flex items-center gap-2">
                  <Translate className="text-xl text-accent" />
                  TOEFL (507)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
