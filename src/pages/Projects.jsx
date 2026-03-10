import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const fullText = "My Projects";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-br from-black via-[#0f0c1a] to-[#2b2545] transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto">

        {/* Animated Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          {text}
          <span className="animate-pulse text-cyan-400">|</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <ProjectCard
            title="Learning Management System"
            image="https://thumbs.dreamstime.com/b/logo-learning-management-system-lms-e-learning-software-application-vector-icon-style-illustration-administration-82838349.jpg"
            desc="A learning platform where students can register, access courses and track their progress. Admins manage users, upload materials and monitor progress. Built with responsive UI and modern design."
            cardClass="bg-white/5 backdrop-blur-md text-white hover:scale-105 transition-transform duration-300"
          />

          <ProjectCard
            title="Chat Application"
            image="https://img.freepik.com/premium-vector/chat-robot-head-monogram-logo-chatbot-logo-design-template_72830-26.jpg"
            desc="A real-time messaging application allowing users to communicate instantly. Designed with a clean interface and responsive layout demonstrating live communication."
            cardClass="bg-white/5 backdrop-blur-md text-white hover:scale-105 transition-transform duration-300"
          />

          <ProjectCard
            title="Travel Website"
            image="https://tse4.mm.bing.net/th/id/OIP.Oeb5S-qnoZOY6EpFxIsuogHaHa?pid=Api&P=0&h=180"
            desc="A modern travel landing page showcasing destinations and packages with responsive layout, smooth hover effects and engaging UI."
            cardClass="bg-white/5 backdrop-blur-md text-white hover:scale-105 transition-transform duration-300"
          />

        </div>
      </div>
    </section>
  );
}