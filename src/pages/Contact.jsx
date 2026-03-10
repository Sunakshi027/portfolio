export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gradient-to-l from-[#2D283E] via-[#3A3452] to-[#564F6F] transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-16 opacity-0 animate-[fadeInUp_1s_ease-in-out_forwards]">
          Let's Work Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE INFO */}
          <div className="text-white space-y-6 animate-[fadeInLeft_1s_ease-in-out_forwards]">

            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
              Get In Touch
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I'm a MERN stack developer passionate about building
              modern, responsive, and user-friendly web applications.
              If you have a project idea, collaboration, or job
              opportunity, feel free to contact me.
            </p>

            <div className="space-y-3 text-gray-300">
              <p className="hover:text-cyan-400 transition cursor-pointer">📧 sunakshi.dev@email.com</p>
              <p className="hover:text-cyan-400 transition cursor-pointer">💻 github.com/sunakshi</p>
              <p className="hover:text-cyan-400 transition cursor-pointer">🌐 portfolio.dev</p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-xl
            hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-[fadeInRight_1s_ease-in-out_forwards]"
          >

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-white/30
                bg-white/20 text-white placeholder-white/70
                focus:outline-none focus:ring-2 focus:ring-cyan-400
                transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border border-white/30
                bg-white/20 text-white placeholder-white/70
                focus:outline-none focus:ring-2 focus:ring-cyan-400
                transition"
              />

              <textarea
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-white/30
                bg-white/20 text-white placeholder-white/70 h-36
                focus:outline-none focus:ring-2 focus:ring-cyan-400
                transition"
              />

              <button
                className="w-full py-3 font-semibold rounded-xl
                bg-gradient-to-r from-[#6C63FF] to-[#A99CF3]
                hover:scale-105 hover:shadow-lg
                text-white text-lg transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}