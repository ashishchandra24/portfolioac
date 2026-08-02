import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Section4 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <section
      id="contact"
      className="
        section4
        bg-[#020817]
        text-white
        px-4
        sm:px-6
        lg:px-10
        xl:px-20
        2xl:px-40
        py-12
        sm:py-16
      "
    >
      {/* ================= HEADING ================= */}

      <div className="text-center mb-8 sm:mb-10 tracking-tight">
        <h2 className="text-sm sm:text-base font-semibold text-gray-300">
          Get in touch
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl text-blue-400 font-bold mt-1">
          Contact Me
        </h3>
      </div>

      {/* ================= MAIN GRID ================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[0.8fr_1.2fr]
          gap-7
          lg:gap-10
          items-start
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <div className="space-y-4">
          {/* Email */}

          <div
            className="
              border
              border-slate-700
              bg-[#111827]
              rounded-xl
              p-4
              sm:p-6
               md:p-7
              flex
              items-center
              gap-4
              hover:border-blue-500
              transition
            "
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Mail className="text-blue-400" size={20} />
            </div>

            <div className="min-w-0">
              <h3 className="font-semibold text-sm sm:text-base">Email</h3>

              <p className="text-slate-400 mt-0.5 text-xs sm:text-sm break-all">
               ashuchandra370@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}

          <div
            className="
              border
              border-slate-700
              bg-[#111827]
              rounded-xl
              p-3.5
              sm:p-4
              flex
              items-center
              gap-4
              hover:border-blue-500
              transition
            "
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Phone className="text-blue-400" size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base">Phone</h3>

              <p className="text-slate-400 mt-0.5 text-xs sm:text-sm">
                +91 8279964675
              </p>
            </div>
          </div>

          {/* Location */}

          <div
            className="
              border
              border-slate-700
              bg-[#111827]
              rounded-xl
              p-3.5
              sm:p-4
              flex
              items-center
              gap-4
              hover:border-blue-500
              transition
            "
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <MapPin className="text-blue-400" size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base">Location</h3>

              <p className="text-slate-400 mt-0.5 text-xs sm:text-sm">
                Delhi, India
              </p>
            </div>
          </div>

          {/* ================= SOCIAL ================= */}

          <div className="pt-1">
            <h3 className="text-base sm:text-lg font-bold mb-3">
              Connect With Me
            </h3>

            <div className="flex gap-3">
              {/* Github */}

              <a
                href="https://github.com/ashishchandra24"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#1e293b]
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  transition
                "
              >
                <i className="ri-github-fill text-xl"></i>
              </a>

              {/* Linkedin */}

              <a
                href="https://www.linkedin.com/in/ashish-chandra24/"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#1e293b]
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  transition
                "
              >
                <i className="ri-linkedin-box-fill text-xl"></i>
              </a>

             
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE FORM ================= */}

        <div
          className="
            border
            border-slate-700
            bg-[#111827]
            rounded-xl
            p-4
            sm:p-5
            md:p-6
          "
        >
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              const body = `
Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}
`;

              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=ashuchandra370@gmail.com&su=${encodeURIComponent(
                  formData.subject,
                )}&body=${encodeURIComponent(body)}`,
                "_blank",
              );
            }}
          >
            {/* Name + Email */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}

              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="
                    w-full
                    bg-[#1a2433]
                    border
                    border-slate-700
                    rounded-lg
                    px-4
                    py-2.5
                    outline-none
                    text-sm
                    text-slate-200
                    placeholder:text-slate-500
                    focus:border-blue-500
                    transition
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="
                    w-full
                    bg-[#1a2433]
                    border
                    border-slate-700
                    rounded-lg
                    px-4
                    py-2.5
                    outline-none
                    text-sm
                    text-slate-200
                    placeholder:text-slate-500
                    focus:border-blue-500
                    transition
                  "
                />
              </div>
            </div>

            {/* Subject */}

            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Subject
              </label>

              <input
                name="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="How can I help you?"
                className="
                  w-full
                  bg-[#1a2433]
                  border
                  border-slate-700
                  rounded-lg
                  px-4
                  py-2.5
                  outline-none
                  text-sm
                  text-slate-200
                  placeholder:text-slate-500
                  focus:border-blue-500
                  transition
                "
              />
            </div>

            {/* Message */}

            <div>
              <label className="block text-sm font-semibold mb-1.5">
                Message
              </label>

              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message here..."
                className="
                  w-full
                  bg-[#1a2433]
                  border
                  border-slate-700
                  rounded-lg
                  px-4
                  py-2.5
                  outline-none
                  resize-none
                  text-sm
                  text-slate-200
                  placeholder:text-slate-500
                  focus:border-blue-500
                  transition
                "
              ></textarea>
            </div>

            {/* Button */}

            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                hover:bg-blue-500
                rounded-lg
                py-2.5
                font-semibold
                text-sm
                flex
                items-center
                justify-center
                gap-3
                transition
              "
            >
              <Send size={17} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section4;
