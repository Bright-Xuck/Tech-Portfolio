import { Sun } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 bg-black grid grid-cols-[1fr_3fr_1fr] grid-rows-1 justify-around w-full h-24 border-b-4 border-b-neutral-500 z-100">
      <div className="flex gap-5 justify-center items-center text-[1.2rem] font-medium">
        <div className="bg-purple-500 h-10 w-10 rounded-full"></div>
        <h2 className="text-purple-500">Njikang Bright</h2>
      </div>
      <ul className="flex w-full mx-auto justify-evenly text-neutral-300 items-center h-full text-[1.2rem] font-medium">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/Experience">Experience</NavLink>
        </li>
        <li className="">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
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
  );
}
