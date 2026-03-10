import img2 from "../assets/img.jpg";

export default function About() {
  const skills = [
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc: "Building dynamic UI with reusable components."
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      desc: "Core language for modern interactive websites."
    },
    {
      name: "Tailwind",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      desc: "Utility-first CSS for responsive UI design."
    },
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      desc: "Semantic structure for modern web pages."
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      desc: "Styling layouts with responsive design."
    },
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      desc: "Version control and collaboration workflow."
    }
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white"
    >

      <div className="max-w-6xl mx-auto bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-xl p-16 border border-gray-800">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About Me
        </h2>

        {/* ABOUT INFO */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* PROFILE IMAGE */}
          <div className="flex justify-center">
            <img
              src={img2}
              alt="profile"
              className="w-64 h-64 object-cover rounded-full border-4 border-cyan-500 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* TEXT INFO */}
          <div>
            <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
              MERN Stack Developer
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              I build modern responsive web applications using React,
              JavaScript, and modern frontend technologies. I focus on
              creating clean UI and scalable architecture.
            </p>

            <div className="flex gap-6 flex-wrap">
              <div className="bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-sm text-cyan-400">📍 Address</p>
                <p className="font-medium text-gray-200">Himachal Pradesh, India</p>
              </div>

              <div className="bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-sm text-cyan-400">💼 Status</p>
                <p className="font-medium text-gray-200">Open to MERN Stack Opportunities</p>
              </div>
            </div>

          </div>
        </div>

        {/* EDUCATION */}
        <h3 className="text-3xl font-semibold text-center text-cyan-400 mb-12">
          Education
        </h3>

        <div className="space-y-6 mb-24">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border-l-4 border-cyan-500 hover:shadow-lg transition">
            <h4 className="font-semibold text-lg text-white">B.Tech Computer Science</h4>
            <p className="text-gray-300 mt-2">Chandigarh Group of Colleges</p>
            <p className="text-sm text-gray-400">Punjab University</p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-md border-l-4 border-cyan-500 hover:shadow-lg transition">
            <h4 className="font-semibold text-lg text-white">Class XII</h4>
            <p className="text-gray-300 mt-2">DAV College Banikhet</p>
            <p className="text-sm text-gray-400">Himachal Pradesh Board</p>
          </div>
        </div>

        {/* SKILLS */}
        <h3 className="text-3xl font-semibold text-center text-cyan-400 mb-12">
          Skills & Technologies
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-3 bg-gray-900 rounded-md flex items-center justify-center">
                <img src={skill.img} className="w-8" alt={skill.name} />
              </div>

              <p className="font-medium text-white mb-2">{skill.name}</p>
              <p className="text-xs text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}