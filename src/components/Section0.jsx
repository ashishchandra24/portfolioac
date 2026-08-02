import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import resume from "../assets/ACResume.pdf";

const SectionO = () => {
  // ================= TYPING EFFECT =================

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Frontend Developer",
    "Software Developer",
    "Web Developer",
    "React Developer",
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let speed = isDeleting ? 100 : 150;

    if (!isDeleting && text === currentRole) {
      speed = 1500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setIsDeleting(true);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#020817] text-white px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-40 overflow-hidden"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      {/* ================= DOT PATTERN ================= */}

      <div className="absolute top-32 left-8 sm:left-16 grid grid-cols-4 gap-3 opacity-40">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="w-1 h-1 bg-blue-400 rounded-full"></span>
        ))}
      </div>

      {/* ================= SOCIAL ICONS ================= */}

      {/* ================= SOCIAL ICONS ================= */}

      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ashish-chandra24"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-slate-700 bg-[#0b1220]/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-300"
        >
          <i className="ri-linkedin-fill text-xl"></i>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ashishchandra24"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-slate-700 bg-[#0b1220]/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-300"
        >
          <i className="ri-github-fill text-xl"></i>
        </a>

        {/* Email */}
        <a
          href="mailto:ashuchandra370@gmail.com"
          className="w-10 h-10 rounded-full border border-slate-700 bg-[#0b1220]/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-300"
        >
          <i className="ri-mail-line text-xl"></i>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918279964675"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-slate-700 bg-[#0b1220]/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-300"
        >
          <i className="ri-whatsapp-line text-xl"></i>
        </a>
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center text-center pt-20 pb-16">
        {/* ================= PROFILE IMAGE ================= */}

        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-125"></div>

          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-[4px] bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111827] border-4 border-[#020817]">
              <img
                src="/images/A2.png"
                alt="Ashish"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ================= INTRO ================= */}

        <div className="mb-3">
          <span className="text-blue-400 text-base sm:text-lg font-medium tracking-wide">
            Hello, I'm
          </span>
        </div>

        {/* ================= MAIN HEADING ================= */}

        <h1
          className="
    text-center
    leading-tight
    tracking-tight
  "
        >
          {/* HELLO I'M */}

          {/* NAME */}

          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white">
            Ashish Chandra
          </div>

          {/* TYPING ROLE */}

          <div
            className="
      min-h-[1.2em]
      mt-2
      text-xl
      sm:text-2xl
      md:text-3xl
      lg:text-3xl
      text-blue-400
      font-semibold
    "
          >
            <span>{text}</span>

            <span className="ml-1 text-blue-300 animate-pulse">|</span>
          </div>
        </h1>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            max-w-2xl
            mt-7
            text-sm
            sm:text-base
            md:text-lg
            text-slate-400
            leading-7
          "
        >
          Computer Science student and passionate web developer focused on
          building modern, responsive and user-friendly websites. I love turning
          creative ideas into real-world web experiences.
        </p>

        {/* ================= BUTTONS ================= */}

        <div className="flex flex-wrap justify-center gap-4 mt-9">
          {/* Let's Talk */}

          <a
            href="#contact"
            className="
              px-6
              sm:px-7
              py-3
              rounded-lg
              bg-blue-600
              hover:bg-blue-500
              text-white
              font-semibold
              text-sm
              sm:text-base
              flex
              items-center
              gap-3
              transition-all
              duration-300
              hover:-translate-y-1
              shadow-lg
              shadow-blue-600/20
            "
          >
            Let's Talk
            <i className="ri-arrow-right-line"></i>
          </a>

          {/* Resume */}

          <a
            href={resume}
            download="ACResume.pdf"
            className="
              px-6
              sm:px-7
              py-3
              rounded-lg
              border
              border-blue-500
              text-blue-400
              hover:bg-blue-500
              hover:text-white
              font-semibold
              text-sm
              sm:text-base
              flex
              items-center
              gap-3
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            Resume
            <i className="ri-download-line"></i>
          </a>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        <div
          className="
    absolute
    bottom-4
    left-1/2
    -translate-x-1/2
    flex
    flex-col
    items-center
    gap-2
    text-slate-500
  "
        >
          <span className="text-[10px] sm:text-xs tracking-[3px] uppercase -mb-2">
            Scroll
          </span>

          <div className="w-px h-14 sm:h-10 bg-blue-500/60 -mb-6"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionO;
