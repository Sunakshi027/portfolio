export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-950 to-[#1e293b] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">

        {/* Name */}
        <h2 className="text-2xl font-bold tracking-wide text-cyan-400">
          Sunakshi 
        </h2>

        {/* Tagline */}
        <p className="text-gray-300">
          MERN Stack Developer • Building modern responsive web applications
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-lg">
          <a
            href="#"
            className="hover:text-cyan-400 hover:scale-125 transition duration-300"
          >
            🌐
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 hover:scale-125 transition duration-300"
          >
            💻
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 hover:scale-125 transition duration-300"
          >
            📧
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-4 text-sm text-gray-400">
          <p>
            © 2026 Sunakshi Portfolio • All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}