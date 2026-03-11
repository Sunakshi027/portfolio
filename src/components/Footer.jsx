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

      

        {/* Divider */}
        <div className="border-t border-white/20 pt-4 text-sm text-gray-400">
          <p>
            © 2025 Sunakshi Portfolio • All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}