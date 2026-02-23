import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar";
import ImageSlider from "./components/ImageSlider";
import AboutBoxes from "./components/aboutBoxes";
import Experince from "./components/Experince";
import "./App.css";
import { ArrowBigDown, ArrowDown } from "lucide-react";

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
          <section className="hero-section h-screen flex flex-col justify-center items-center z-10 mt-24 text-white">
            <h1 className="animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-1 text-4xl font-mono ">
              Hi there! I'm Bright
            </h1>
            <h2>SEO specialist & Full stack developer</h2>
            <h3>Building innovative AI solutions and scalable architectures that drive business transformation.</h3>
            <div className="flex flex-col items-center">
              <div>
              <button className="bg-linear-to-r from-blue-800 to to-purple-600 p-4 rounded-xl">Download CV</button>
              <button className="bg-black border-2 border-purple-300 p-4 rounded-xl">Let's Build together</button>
              </div>
              <div className="fixed bottom-0 animate-bounce flex flex-col items-center">
              <h4 className="">scroll to expolore</h4>
              <div className="border border-neutral-300 rounded-full">
              <ArrowDown></ArrowDown>
              </div>
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
              I believe technology should be used in the betterment os society blach blah bla  ai when you see ths place actuall content
            </h3>
             <h2 className="text-4xl font-bold text-white text-center mb-12">
              My Skills
            </h2>
            <AboutBoxes />
          </div>
        </section>

        {/* Work/Featured Section */}
       <Experince></Experince>

        {/* Links Section */}
        <section
          id="links"
          className="w-full px-8 py-20 bg-black/60 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              My Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                href="#"
                className="group p-8 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-300">
                  GitHub
                </h3>
                <p className="text-white/80">
                  Check out my projects and contributions
                </p>
              </a>
              <a
                href="#"
                className="group p-8 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-300">
                  LinkedIn
                </h3>
                <p className="text-white/80">Connect with me professionally</p>
              </a>
              <a
                href="#"
                className="group p-8 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-300">
                  Twitter
                </h3>
                <p className="text-white/80">Follow for web dev insights</p>
              </a>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="w-full px-8 py-20 bg-black/80">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-3 bg-linear-to-r from-lime-300 to-blue-500 text-black font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="#"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </main>
    </Router>
  );
}
