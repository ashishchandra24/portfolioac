import React from "react";
import "remixicon/fonts/remixicon.css";

const Section2 = () => {
  const skills = [
    {
      icon: "ri-html5-fill",
      title: "HTML",
      level: "Advanced",
    },
    {
      icon: "ri-css3-fill",
      title: "CSS",
      level: "Advanced",
    },
    {
      icon: "ri-javascript-fill",
      title: "JavaScript",
      level: "Intermediate",
    },
    {
      icon: "ri-reactjs-line",
      title: "React.js",
      level: "Intermediate",
    },
    {
      icon: "ri-tailwind-css-fill",
      title: "Tailwind CSS",
      level: "Intermediate",
    },
    {
      icon: "ri-nodejs-line",
      title: "Node.js",
      level: "Basic",
    },
    {
      icon: "ri-database-2-line",
      title: "MongoDB",
      level: "Basic",
    },
    {
      icon: "ri-git-branch-line",
      title: "Git / GitHub",
      level: "Intermediate",
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        text-white
        px-4
        sm:px-6
        lg:px-10
        xl:px-20
        2xl:px-40
        py-14
        sm:py-20
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[200px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-700/5 blur-[100px] rounded-full pointer-events-none"></div>


      <div className="relative max-w-6xl mx-auto w-full">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-10 sm:mb-14">

          <p className="text-[11px] sm:text-xs text-blue-400 font-semibold tracking-[4px] uppercase">
            MY EXPERTISE
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 tracking-tight">
            My{" "}
            <span className="text-blue-500">
              Skills
            </span>
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4">

            <span className="w-8 h-px bg-slate-700"></span>

            <span className="w-2 h-2 rounded-full bg-blue-500"></span>

            <span className="w-8 h-px bg-slate-700"></span>

          </div>

          <p className="max-w-xl mx-auto mt-5 text-slate-400 text-sm sm:text-base leading-7">
            Technologies and tools I use to build modern,
            responsive and user-friendly web experiences.
          </p>

        </div>


        {/* ================= SKILLS GRID ================= */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-[#0b1220]/80
                backdrop-blur-sm
                p-4
                sm:p-6
                text-center
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/60
                hover:bg-[#0d1729]
                hover:shadow-[0_15px_40px_rgba(37,99,235,0.12)]
              "
            >

              {/* ================= CARD GLOW ================= */}

              <div
                className="
                  absolute
                  -top-16
                  left-1/2
                  -translate-x-1/2
                  w-32
                  h-32
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              ></div>
      


              {/* ================= ICON ================= */}

              <div
                className="
                  relative
                  mx-auto
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-2xl
                  border
                  border-slate-700
                  bg-[#111827]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:border-blue-500/60
                  group-hover:bg-blue-500/10
                  group-hover:rotate-3
                "
              >

                <i
                  className={`
                    ${skill.icon}
                    text-3xl
                    sm:text-4xl
                    text-blue-400
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  `}
                ></i>

              </div>


              {/* ================= TITLE ================= */}

              <h3
                className="
                  relative
                  mt-4
                  text-sm
                  sm:text-base
                  font-semibold
                  text-slate-200
                  group-hover:text-white
                  transition-colors
                "
              >
                {skill.title}
              </h3>


              {/* ================= LEVEL ================= */}

              <p
                className="
                  relative
                  mt-1
                  text-[10px]
                  sm:text-xs
                  text-slate-500
                  group-hover:text-blue-400
                  transition-colors
                "
              >
                {skill.level}
              </p>


              {/* ================= BOTTOM LINE ================= */}

              <div className="relative mt-4 mx-auto h-px w-6 bg-slate-700 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500"></div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM TEXT ================= */}

        <div className="flex items-center justify-center gap-3 mt-8">

          <div className="h-px w-12 bg-slate-800"></div>

          <span className="text-[10px] tracking-[2px] text-slate-600 uppercase">
            Always learning
          </span>

          <div className="h-px w-12 bg-slate-800"></div>

        </div>

      </div>
    </section>
  );
};

export default Section2;