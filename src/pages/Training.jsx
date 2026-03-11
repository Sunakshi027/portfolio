// src/pages/Training.jsx
import React from "react";
import certificate from "../assets/certificate.jpg";


export default function Training() {
  return (
    // Training / Certificates / Internship Section

// Training, Internship, and Certificates Section

// Training, Internship, and Certificate Section (Dark Theme)

// Training, Internship, and Certificate Section (Dark Theme with Image)

<section
  id="training"
  className="py-28 px-6 bg-gray-900 text-white"
>
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Training & Internship</h2>
      <p className="text-gray-300">
        My completed training program and internship experience.
      </p>
    </div>

    {/* Training + Internship Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {/* Training */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300 md:col-span-2">
        <h3 className="text-2xl font-semibold mb-2 text-white">Training Program</h3>
        <p className="text-gray-300 mb-2">MernStack Development</p>
         <p className="text-gray-400 mb-2">Company:Bepoj Technology Pvt. Ltd.</p>
        <p className="text-gray-400 mb-2">Duration: 1-8-2025 – 29-1-2026</p>
        <p className="text-gray-400 text-sm">Description: MERN Stack Intern with a strong focus on frontend development using
React.js, JavaScript, HTML, and CSS. Currently gaining hands-on experience
in building responsive user interfaces and integrating APIs.Gained basic
working knowledge of backend technologies, including Node.js, Express.js,
and MongoDB</p>
      </div>

      {/* Internship */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transform transition duration-300 md:col-span-1">
        <h3 className="text-2xl font-semibold mb-2 text-white">Internship</h3>
        <p className="text-gray-300 mb-2">[Novem control Pvt. Ltd]</p>
        <p className="text-gray-400 mb-2">Duration: [jan-july 2024]</p>
        <p className="text-gray-400 text-sm">Description: Designed, developed, and maintained responsive and user-friendly web
interfaces.The internship focused on implementing modern UI/UX practices
and Optimized website performance for different devices and browsers. </p>
      </div>
    </div>

    {/* Certificate Section */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Certificate</h2>
      <p className="text-gray-300 mb-8">
        My achievement and completed certification.
      </p>
    </div>





{/* Compact Certificate Card */}
<div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col md:flex-row items-center">
  {/* Certificate Image */}
  <div className="md:w-1/3 p-4 flex items-center justify-center">
    <img
      src={certificate}
      alt="Certificate"
      className="w-40 h-40 object-contain rounded-lg bg-gray-900"
    />
  </div>

  {/* Certificate Text */}
  <div className="md:w-2/3 p-4 flex flex-col justify-center text-center md:text-left">
    <h3 className="text-2xl font-semibold mb-1 text-white">MERN Stack Development</h3>
    <p className="text-gray-300 mb-1 text-sm">Issued by: Bepoj Technology Pvt. Ltd.</p>
    <p className="text-gray-400 mb-2 text-xs">Completion Date: Jan 2026</p>
    <p className="text-gray-400 text-sm">
      Demonstrates ability to build full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with responsive frontend design and backend integration.
    </p>
  </div>
</div>
  </div>
</section>
  );
}