import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400 hover:text-white transition">
          Sunakshi
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg">
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="relative cursor-pointer hover:text-cyan-400 transition
                         after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                         after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div
          className="md:hidden text-2xl cursor-pointer text-cyan-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 bg-white/10 backdrop-blur-md text-white transition-all duration-300">
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 text-lg transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}