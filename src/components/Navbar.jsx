import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className="
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-50
          w-[92%]
          max-w-3xl
          px-3
          py-2
          rounded-full
          border
          border-slate-700/70
          bg-[#08111f]/85
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}

          <a
            href="#home"
            onClick={closeMenu}
            className="
              w-10
              h-10
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-lg
              shadow-lg
              shadow-blue-600/30
            "
          >
            A
          </a>


          {/* DESKTOP MENU */}

          <div className="hidden md:flex items-center gap-1">

            <a
              href="#home"
              className="px-4 py-2 rounded-full text-sm text-white bg-blue-600/20 hover:bg-blue-600 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="px-4 py-2 rounded-full text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="px-4 py-2 rounded-full text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="px-4 py-2 rounded-full text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Contact
            </a>

          </div>


          {/* DESKTOP LET'S TALK */}

          <a
            href="#contact"
            className="
              hidden
              sm:flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-blue-500/40
              text-blue-400
              text-sm
              hover:bg-blue-500
              hover:text-white
              transition-all
              duration-300
            "
          >
            Let's Talk
            <i className="ri-arrow-right-up-line"></i>
          </a>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              text-white
              hover:bg-white/10
              transition
            "
            aria-label="Toggle menu"
          >
            <i
              className={`${
                menuOpen
                  ? "ri-close-line"
                  : "ri-menu-3-line"
              } text-xl`}
            ></i>
          </button>

        </div>
      </nav>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          fixed
          inset-0
          z-40
          md:hidden
          transition-all
          duration-500
          ${menuOpen ? "visible" : "invisible"}
        `}
      >

        {/* BACKDROP */}

        <div
          onClick={closeMenu}
          className={`
            absolute
            inset-0
            bg-black/50
            backdrop-blur-sm
            transition-opacity
            duration-500
            ${menuOpen ? "opacity-100" : "opacity-0"}
          `}
        ></div>


        {/* RIGHT SIDE MENU */}

        <div
          className={`
            absolute
            top-0
            right-0
            h-full
            w-[280px]
            max-w-[80%]
            bg-[#08111f]
            border-l
            border-slate-700/70
            shadow-[-20px_0_60px_rgba(0,0,0,0.45)]
            px-6
            pt-28
            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >

          {/* MENU LINKS */}

          <div className="flex flex-col gap-2">

            <a
              href="#home"
              onClick={closeMenu}
              className="
                px-5
                py-3.5
                rounded-xl
                bg-blue-600/15
                text-blue-400
                font-medium
                transition
                hover:bg-blue-600
                hover:text-white
              "
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="
                px-5
                py-3.5
                rounded-xl
                text-slate-300
                font-medium
                hover:bg-white/5
                hover:text-white
                transition
              "
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="
                px-5
                py-3.5
                rounded-xl
                text-slate-300
                font-medium
                hover:bg-white/5
                hover:text-white
                transition
              "
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="
                px-5
                py-3.5
                rounded-xl
                text-slate-300
                font-medium
                hover:bg-white/5
                hover:text-white
                transition
              "
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                px-5
                py-3.5
                rounded-xl
                text-slate-300
                font-medium
                hover:bg-white/5
                hover:text-white
                transition
              "
            >
              Contact
            </a>

          </div>


          {/* MOBILE LET'S TALK */}

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              mt-8
              w-full
              px-5
              py-3.5
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              hover:bg-blue-500
              transition
            "
          >
            Let's Talk
            <i className="ri-arrow-right-up-line"></i>
          </a>


          {/* SMALL TEXT */}

          <div className="absolute bottom-8 left-6 right-6">
            <div className="h-px bg-slate-800 mb-4"></div>

            <p className="text-xs text-slate-500">
              © 2026 Ashish Chandra
            </p>
          </div>

        </div>

      </div>
    </>
  );
};

export default Navbar;