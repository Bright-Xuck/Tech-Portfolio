import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar";
import ImageSlider from "./components/ImageSlider";
import AboutBoxes from "./components/aboutBoxes";
import Projects from "./components/projects";
import Experince from "./components/Experince";
import "./App.css";
import { ArrowDown, Copyright, Github, Linkedin, Mail } from "lucide-react";

//const [slider, setSlider] = useState[0];

const observer = new IntersectionObserver((entry) => {
  console.log(entry);
}, {});

export default function App() {
  return (
    <Router>
      <main className="w-screen min-h-screen bg-linear-to-r from-lime-300 via-blue-500 to-gray-900 bg-size-[400%_400%] overflow-hidden animate-gradient">
        {/* Home Section */}
        <section id="home" className="relative min-h-screen">
          <div>
            <div className="border border-white opacity-0 w-2.5 h-2.5 absolute left-[45%] top-[10%] animate-cube overflow-hidden"></div>
            <div className="border border-white opacity-0 w-2.5 h-2.5 absolute left-[55%] top-[35%] animate-cube5 overflow-hidden"></div>
            <div className="border border-white opacity-0 w-2.5 h-2.5 absolute left-[85%] top-[55%] animate-cube1 overflow-hidden"></div>
            <div className="border border-white opacity-0 w-2.5 h-2.5 absolute left-[45%] top-[85%] animate-cube2 overflow-hidden"></div>
            <div className="border border-white opacity-0 w-2.5 h-2.5 absolute left-[25%] top-[65%] animate-cube3 overflow-hidden"></div>
            <div className="border border-white opacity-0 w-2.5 h-2.5 absolute left-[15%] top-[35%] animate-cube4 overflow-hidden"></div>
            <div className="border border-white opacity-0 w-2.5 h-2.5 absolute left-[85%] top-[25%] animate-cube5 overflow-hidden"></div>
          </div>
          <NavBar />
          <section className="hero-section h-screen flex flex-col justify-center items-center z-10 text-white relative px-4 md:px-0">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-linear-to-r from-lime-300 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                Hi there! I'm Bright
              </h1>

              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 text-blue-200 drop-shadow-md">
                SEO Specialist & Full Stack Developer
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                Building innovative AI solutions and scalable architectures that
                drive business transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
                <button className="group relative px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl"></div>
                  <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  <span className="relative text-white flex items-center justify-center gap-2 text-xs sm:text-base">
                    📥 Download CV
                  </span>
                </button>

                <button className="group relative px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg border-2 border-purple-400 text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative flex items-center justify-center gap-2 text-xs sm:text-base">
                    🚀 Let's Build Together
                  </span>
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1 sm:gap-2 z-20">
              <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">
                Scroll to explore
              </p>
              <div className="border-2 border-white/40 rounded-full p-2 hover:border-white/70 transition-colors duration-300">
                <ArrowDown size={20} className="sm:size-24 text-white/60 animate-pulse" />
              </div>
            </div>
          </section>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-black/40 backdrop-blur-sm"
        >
          <div className="mx-auto max-w-6xl">
            <ImageSlider />
            <h3 className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
              I'm Njikang Bright, an engineering driven developer who turns
              complex technical challenges into high-speed web products. I
              manage the entire stack with clean, reusable code and seamless
              performance. I excel in Next.js and full-stack architecture,
              always delivering modern solutions that actually solve problems
              for every user.
            </h3>
            <h3 className="text-sm sm:text-base md:text-lg text-white/90 mb-8 md:mb-12 leading-relaxed">
              I believe technology should be used in the betterment os society
              blach blah bla ai when you see ths place actuall content
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
              My Skills
            </h2>
            <AboutBoxes />
          </div>
        </section>

        <Experince></Experince>

        {/* Work/Featured Section */}
        <section id="work" className="w-full">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-black/80">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/80 mb-8 md:mb-12 text-sm sm:text-base md:text-lg">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="bg-black/40 rounded-lg p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8">Get in Touch</h1>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-purple-400 shrink-0 mt-1"></Mail>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <a href="mailto:brightnjikang@gmail.com" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                        brightnjikang@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Linkedin className="text-purple-400 shrink-0 mt-1"></Linkedin>
                    <div>
                      <h3 className="text-white font-semibold">LinkedIn</h3>
                      <a href="https://linkedin.com/in/brightnjikang" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                        brightnjikang
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Github className="text-purple-400 shrink-0 mt-1"></Github>
                    <div>
                      <h3 className="text-white font-semibold">Github</h3>
                      <a href="https://github.com/bright-Xuck" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                        bright-Xuck
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <form action="" method="POST" className="bg-black/40 rounded-lg p-6 md:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8">Contact Me</h2>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message"
                      className="w-full px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base h-32 resize-none"
                    ></textarea>
                  </div>
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300 text-sm md:text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-0 bg-black px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full shrink-0"></div>
            <div>
              <h2 className="text-white font-bold text-lg md:text-xl">Njikang Bright</h2>
              <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm">
                <Copyright size={16}></Copyright>
                <h3>2026 All rights reserved</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start gap-6 md:ml-[20%]">
            <a href="https://github.com/bright-Xuck" className="text-white/70 hover:text-white transition-colors">
              <Github size={24}></Github>
            </a>
            <a href="https://linkedin.com/in/brightnjikang" className="text-white/70 hover:text-white transition-colors">
              <Linkedin size={24}></Linkedin>
            </a>
            <a href="mailto:brightnjikang@gmail.com" className="text-white/70 hover:text-white transition-colors">
              <Mail size={24}></Mail>
            </a>
          </div>
        </footer>
      </main>
    </Router>
  );
}
