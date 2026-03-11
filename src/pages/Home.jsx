import img1 from "../assets/img.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6
      bg-gradient-to-br from-gray-900 via-gray-950 to-black
      pt-24 md:pt-28" // Added top padding to avoid fixed navbar
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase tracking-widest text-gray-400 mb-3 text-sm">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Hi, I'm <span className="text-cyan-400">Sunakshi</span>
          </h1>

          <h2 className="text-gray-300 text-2xl mb-6">
            Frontend MERN Stack Developer
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed max-w-lg">
            I build modern, responsive and scalable web applications 
            using React, JavaScript, and Tailwind CSS. I focus on clean 
            UI design, performance, and creating smooth user experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-6">
            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 rounded-lg text-white
              hover:scale-105 hover:shadow-lg transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-7 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500
            "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl
          hover:scale-105 transition duration-500">
            <img
              src={img1}
              alt="profile"
              className="w-60 md:w-72 rounded-xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}