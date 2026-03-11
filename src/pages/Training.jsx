// src/pages/Training.jsx
import React from "react";



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

    {/* Single Certificate Card with Image */}
    <div className="max-w-sm mx-auto bg-gray-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
      <img
        src="/images/certificate.png" // Replace with your certificate image path
        alt="Certificate"
        className="w-full h-64 object-cover rounded-t-xl"
      />
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-2 text-white">MernStack </h3>
        <p className="text-gray-300 mb-1">Issued by: Bepoj technology pvt ltd</p>
        <p className="text-gray-400 text-sm">Completion Date: [jan-2026]</p>
      </div>
    </div>
  </div>
</section>
  );
}