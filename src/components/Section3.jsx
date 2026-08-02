import React from "react";
import "remixicon/fonts/remixicon.css";

const Section3 = () => {
  const projects = [
    {
      image: "/images/project1.png",
      title: "Hotel Management",
      description: "Modern hotel website with booking & responsive UI.",
      tech: ["HTML", "CSS", "JS"],
      github:"https://github.com/ashishchandra24/rphsystem",
      live: "https://rphsystem-ghid.vercel.app/"
    },
    {
      image: "/images/project2.png",
      title: "College Website",
      description: "Responsive college website with multiple sections.",
      tech: ["HTML", "CSS", "JS"],
      github:"https://github.com/ashishchandra24/collegeprosystem",
      live: "https://collegeestc.vercel.app",
    },
    {
      image: "/images/project3.png",
      title: "Golf Website",
      description: "Interactive golf website with smooth animations.",
      tech: ["HTML", "GSAP", "JS"],
      github:"https://github.com/ashishchandra24/TFGacadmy",
      live: "https://tfgacadmy.vercel.app/",

    },
    {
      image: "/images/project4.png",
      title: "Digital Agency Website",
      description: "Great for modern and creative website designs.",
      tech: ["JavaScript", "Tailwind"],
      github:"https://github.com/ashishchandra24/RESPONSIVEWEB",
       live: "https://frstproject1.vercel.app",
    },
    {
      image: "/images/project5.png",
      title: "Gallery Website",
      description: "Responsive image gallery with dynamic content.",
      tech: ["React", "API"],
      github:"https://github.com/ashishchandra24/GelleryApi-Photes",
      live: "https://gelleryaphs.vercel.app",
    },
    {
      image: "/images/project6.png",
      title: "Landing Page",
      description: "Clean and modern landing page design.",
      tech: ["HTML", "CSS", "JS"],
      github:"https://github.com/ashishchandra24/landing-page",
      live:"https://landing-page-nu-tawny-63.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="section3 min-h-screen bg-[#020817] text-white px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-40 py-16 sm:py-20"
    >
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <p className="text-lg sm:text-xl font-semibold text-gray-400">
          My Recent Work
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mt-1">
          Projects
        </h2>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group w-full max-w-[300] mx-auto bg-[#111827] border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all duration-500 shadow-lg"
          >

            {/* Image */}
            <div className="relative w-full h-44 overflow-hidden bg-[#0b1220]">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>

            </div>

            {/* Content */}
            <div className="p-4">

              {/* Title + Arrow */}
              <div className="flex items-center justify-between gap-2 mb-2">

                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <a
                  target="_blank"
                  href={project.live}
                  className="shrink-0 w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <i className="ri-arrow-right-up-line text-base"></i>
                </a>

              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies + GitHub */}
              <div className="flex items-center justify-between gap-2 mt-4">

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((item, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/10 text-blue-400 text-[10px] sm:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* GitHub Icon */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition"
                >
                  <i className="ri-github-fill text-lg"></i>
                </a>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Section3;