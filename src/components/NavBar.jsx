import { MenuIcon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    console.log("clicked")
    setIsopen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsopen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsopen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 bg-black grid grid-cols-[1fr_3fr_1fr] grid-rows-1 justify-around w-full h-24 border-b-4 border-b-neutral-500 z-100 max-md:hidden`}
      >
        <div className="flex gap-5 justify-center items-center text-[1.2rem] font-medium">
          <div className="bg-purple-500 h-10 w-10 rounded-full"></div>
          <h2 className="text-purple-500">Njikang Bright</h2>
        </div>
        <ul className="flex w-full text-neutral-300 h-full text-[1.2rem] font-medium ">
          <li className="hover:bg-neutral-300 flex w-full h-full justify-center items-center">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:bg-neutral-300 flex w-full h-full justify-center items-center">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:bg-neutral-300 flex w-full h-full justify-center items-center">
            <NavLink to="/Experience">Experience</NavLink>
          </li>
          <li className="hover:bg-neutral-300 flex w-full h-full justify-center items-center">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="hover:bg-neutral-300 flex w-full h-full justify-center items-center">
            <NavLink to="/casestudies">Case Stuies</NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-5 text-[1.2rem] font-medium">
          <div className="bg-neutral-800 border border-neutral-600 rounded-full p-2">
            <Sun className="text-white "></Sun>
          </div>
          <button className="text-black bg-purple-500 px-4 py-3 rounded-xl">
            Get in touch
          </button>
        </div>
      </nav>

      <div className="hidden max-md:block fixed top-0 w-full z-100">
        <nav
          className={`bg-black grid grid-cols-3 grid-rows-1 justify-between w-full h-24 border-b-4 border-b-neutral-500`}
        >
          <div className="flex gap-5 justify-center items-center text-[1.2rem] font-medium">
            <div className="bg-purple-500 h-10 w-10 rounded-full"></div>
            <h2 className="text-purple-500">Njikang Bright</h2>
          </div>

          <div className="flex justify-center items-center gap-5 text-[1.2rem] font-medium col-start-3">
            <div className="bg-neutral-800 border border-neutral-600 rounded-full p-2">
              <Sun className="text-white "></Sun>
            </div>
            <button onClick={toggle} className="text-black bg-purple-500 px-4 py-3 rounded-xl transition-transform duration-300 hover:scale-110 active:scale-95">
              {isOpen? <X></X> : <MenuIcon></MenuIcon>}
            </button>
          </div>
        </nav>
        <ul className={`flex flex-col w-full text-neutral-300 text-[1.2rem] font-medium bg-black border-t-4 border-t-neutral-500 overflow-hidden transition-all duration-500 z-50 ${isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}>
          <li className="hover:bg-neutral-300 hover:text-black flex w-full h-24 justify-center items-center transition-colors duration-300">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          </li>
          <li className="hover:bg-neutral-300 hover:text-black flex w-full h-24 justify-center items-center transition-colors duration-300">
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          </li>
          <li className="hover:bg-neutral-300 hover:text-black flex w-full h-24 justify-center items-center transition-colors duration-300">
            <NavLink to="/Experience" onClick={closeMenu}>Experience</NavLink>
          </li>
          <li className="hover:bg-neutral-300 hover:text-black flex w-full h-24 justify-center items-center transition-colors duration-300">
            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          </li>
          <li className="hover:bg-neutral-300 hover:text-black flex w-full h-24 justify-center items-center transition-colors duration-300">
            <NavLink to="/casestudies" onClick={closeMenu}>Case Stuies</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
