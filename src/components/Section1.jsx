import React from "react";
import "remixicon/fonts/remixicon.css";
import resume from "../assets/RESUME1.pdf";

const Section1 = () => {
  return (
    <section
      id="about"
      className="section2 min-h-screen bg-[#020817] text-white px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-40 py-16 sm:py-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* ================= MAIN LAYOUT ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT SIDE ================= */}

          <div className="relative flex justify-center">
            {/* Blue Glow */}

            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-600/20 blur-[100px] rounded-full"></div>

            {/* ================= DOT PATTERN ================= */}

            {/* ================= DOT PATTERN ================= */}

            <div className="absolute left-0 sm:left-4 top-16 grid grid-cols-4 gap-x-3 gap-y-3 opacity-60">
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="w-1.5 h-1.5 bg-slate-300 rounded-full"
                ></span>
              ))}
            </div>

            {/* ================= IMAGE FRAME ================= */}

            {/* ================= IMAGE FRAME ================= */}

            <div className="relative w-[270px] sm:w-[330px] h-[380px] sm:h-[450px] translate-x-4 sm:translate-x-8">
              {/* Outer Blue Box */}
              <div
                className="
      absolute
      -top-4
      -left-5
      w-full
      h-full
      rounded-[30px]
      bg-blue-300/30
      border
      border-blue-500/40
    "
              ></div>

              {/* Main Image Box */}
              <div
                className="
      relative
      w-full
      h-full
      rounded-[28px]
      overflow-hidden
      border
      border-slate-600
      bg-[#0b1220]
      shadow-[0_0_50px_rgba(37,99,235,0.18)]
    "
              >
                <img
                  src="/images/AC.png"
                  alt="Profile"
                  className="
        w-full
        h-full
        object-cover
        object-top
        transition-transform
        duration-700
        hover:scale-105
      "
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/70 via-transparent to-transparent"></div>
              </div>

              {/* ================= EXPERIENCE CARD ================= */}

              <div
                className="
      absolute
      -bottom-5
      left-1/2
      -translate-x-1/2
      w-[220px]
      sm:w-[250px]
      bg-[#111827]/95
      backdrop-blur-md
      border
      border-slate-700
      rounded-xl
      p-3
      sm:p-4
      flex
      items-center
      justify-around
      shadow-xl
    "
              >
                {/* Fresher */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <i className="ri-code-s-slash-line text-blue-400"></i>
                  </div>

                  <div>
                    <p className="text-sm font-bold">Fresher</p>

                    <p className="text-[10px] text-slate-400">Web Developer</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-8 bg-slate-700"></div>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <i className="ri-map-pin-line text-blue-400"></i>
                  </div>

                  <div>
                    <p className="text-sm font-bold">India</p>

                    <p className="text-[10px] text-slate-400">Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div>
            {/* Small Heading */}

            <div className="flex items-center gap-4 mb-4">
              <span className="text-blue-500 text-sm sm:text-base font-semibold tracking-widest">
                Get to know
              </span>

              <div className="h-px bg-slate-700 flex-1"></div>
            </div>

            {/* Main Heading */}

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              ABOUT
              <span className="text-blue-500"> ME</span>
            </h2>

            {/* Small Line */}

            <div className="w-10 h-1 bg-blue-500 mt-5 mb-6"></div>

            {/* ================= DESCRIPTION ================= */}

            <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-7">
              <p>
                I'm a passionate Frontend Developer focused on creating clean,
                modern and responsive web experiences.
              </p>

              <p>
                I enjoy turning ideas into interactive websites using modern
                technologies and thoughtful UI design. I focus on writing clean
                code while keeping the user experience simple and engaging.
              </p>
            </div>

            {/* ================= FEATURE BOXES ================= */}

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
              {/* Box 1 */}

              <div className="text-center border-r border-slate-700 pr-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                  <i className="ri-code-s-slash-line text-blue-400 text-lg"></i>
                </div>

                <h3 className="text-xs sm:text-sm font-semibold">Clean Code</h3>
              </div>

              {/* Box 2 */}

              <div className="text-center border-r border-slate-700 pr-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                  <i className="ri-palette-line text-blue-400 text-lg"></i>
                </div>

                <h3 className="text-xs sm:text-sm font-semibold">UI Focused</h3>
              </div>

              {/* Box 3 */}

              <div className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                  <i className="ri-rocket-line text-blue-400 text-lg"></i>
                </div>

                <h3 className="text-xs sm:text-sm font-semibold">
                  Performance
                </h3>
              </div>
            </div>

            {/* ================= BUTTONS ================= */}

            <div className="flex flex-wrap items-center gap-4 mt-9">
              {/* View Work */}

              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition flex items-center gap-3 text-sm sm:text-base font-semibold"
              >
                View My Work
                <i className="ri-arrow-right-line"></i>
              </a>

              {/* Download CV */}

              <a
                href={resume}
                download="RESUME1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition flex items-center gap-3 text-sm sm:text-base font-semibold"
              >
                Download
                <i className="ri-download-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
