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
      <main className="w-screen bg-linear-to-r from-lime-300 via-blue-500 to-gray-900 bg-size-[400%_400%] overflow-hidden animate-gradient">
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
          <section className="hero-section h-screen flex flex-col justify-center items-center z-10 text-white relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-typewriter overflow-hidden whitespace-nowrap border-r-4">
                Hi there! I'm Bright
              </h1>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-200 drop-shadow-md">
                SEO Specialist & Full Stack Developer
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                Building innovative AI solutions and scalable architectures that
                drive business transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <button className="group relative px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl"></div>
                  <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  <span className="relative text-white flex items-center justify-center gap-2">
                    📥 Download CV
                  </span>
                </button>

                <button className="group relative px-10 py-4 rounded-xl font-bold text-lg border-2 border-purple-400 text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    🚀 Let's Build Together
                  </span>
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="fixed bottom-8 animate-bounce flex flex-col items-center gap-2 z-20">
              <p className="text-white/70 text-sm uppercase tracking-wider font-semibold">
                Scroll to explore
              </p>
              <div className="border-2 border-white/40 rounded-full p-2 hover:border-white/70 transition-colors duration-300">
                <ArrowDown size={24} className="text-white/60 animate-pulse" />
              </div>
            </div>
          </section>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full px-8 py-20 bg-black/40 backdrop-blur-sm"
        >
          <div className="mx-auto">
            <ImageSlider />
            <h3>
              I'm Njikang Bright, an engineering driven developer who turns
              complex technical challenges into high-speed web products. I
              manage the entire stack with clean, reusable code and seamless
              performance. I excel in Next.js and full-stack architecture,
              always delivering modern solutions that actually solve problems
              for every user.
            </h3>
            <h3>
              I believe technology should be used in the betterment os society
              blach blah bla ai when you see ths place actuall content
            </h3>
            <h2 className="text-4xl font-bold text-white text-center mb-12">
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
        <section id="contact" className="w-full px-4 sm:px-8 py-16 sm:py-20 bg-black/80 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Let's Work Together
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods & Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Get in Touch - Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Get in Touch
                </h3>
                
                {/* Email */}
                <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="flex-shrink-0 p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:brightnjikang@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors break-all text-sm sm:text-base">
                      brightnjikang@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex-shrink-0 p-3 bg-purple-500/20 rounded-lg">
                    <Linkedin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">LinkedIn</h4>
                    <a href="https://linkedin.com/in/brightnjikang" className="text-purple-300 hover:text-purple-200 transition-colors text-sm sm:text-base">
                      brightnjikang
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg bg-gradient-to-br from-lime-900/40 to-green-900/40 border border-lime-500/30 hover:border-lime-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20">
                  <div className="flex-shrink-0 p-3 bg-lime-500/20 rounded-lg">
                    <Github className="text-lime-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">GitHub</h4>
                    <a href="https://github.com/bright-Xuck" className="text-lime-300 hover:text-lime-200 transition-colors text-sm sm:text-base">
                      bright-Xuck
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form action="" method="POST" className="space-y-6 p-4 sm:p-8 rounded-lg bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-purple-500/30 backdrop-blur-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Contact Me
                </h3>

                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white/90">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 sm:py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white/90">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 sm:py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white/90">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Your message"
                    className="w-full px-4 py-2 sm:py-3 bg-black/30 border border-blue-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full group relative px-6 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                  <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                  <span className="relative text-white flex items-center justify-center gap-2">
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="grid grid-cols-[1fr_2fr]">
          <div className="flex">
            <div className="w-15 h-15 bg-blue-500 rounded-full"></div>
            <div>
              <h2>Njikang Bright</h2>
              <div className="flex">
                <Copyright></Copyright>
                <h3>2026 Alll rights reserved</h3>
              </div>
            </div>
          </div>
          <div className="flex ml-[20%] w-full">
            <div>
              <a href="githublibk"><Github></Github></a>
            </div>
            <div>
              <a href="linkedinlink"><Linkedin></Linkedin></a>
            </div>
            <div>
              <a href="mail"><Mail></Mail></a>
            </div>
          </div>
        </footer>
      </main>
    </Router>
  );
}
