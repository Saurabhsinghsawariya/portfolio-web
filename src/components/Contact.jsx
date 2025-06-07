import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import {
  ContactMail,
  Email,
  GitHub,
  LinkedIn,
  Phone,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

// ✅ Proper particles init function
const particlesInit = async (main) => {
  await loadFull(main);
};

// 🌌 Particle options
const particlesOptions = {
  background: {
    color: { value: "#000000" }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#888",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    collisions: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false,
    },
    number: { value: 50, density: { enable: true, area: 800 } },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-5 py-20 md:py-32 text-slate-100">
      {/* 🌌 Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center gap-12 max-w-7xl mx-auto z-10">
        {/* 📬 Contact Info */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 0.6)}
          className="flex-[0.7] bg-gray-900 bg-opacity-70 rounded-3xl p-10 shadow-xl backdrop-blur-md border border-gray-700"
        >
          <p className={`${styles.sectionSubText} text-indigo-400`}>
            Get in touch
          </p>
          <h3 className={`${styles.sectionHeadText} mb-8 text-white`}>
            Contact.
          </h3>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3 text-indigo-400">
              <Phone />
              <span>9258382181</span>
            </div>
            <div className="flex items-center gap-3 text-indigo-400">
              <Email />
              <span>sawariyasaurabh@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
<a href="mailto:mern.dev.saurabh@gmail.com" className="w-full sm:w-auto">
              <Button
                variant="outlined"
                startIcon={<Email />}
                className="w-full sm:w-auto text-indigo-400 border-indigo-400 hover:bg-indigo-600 hover:text-white transition"
              >
                Email
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/saurabh-singh-41567b26a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                className="w-full sm:w-auto text-blue-500 border-blue-500 hover:bg-blue-700 hover:text-white transition"
              >
                LinkedIn
              </Button>
            </a>

            <a
              href="https://github.com/Saurabhsinghsawariya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                className="w-full sm:w-auto text-gray-400 border-gray-400 hover:bg-gray-700 hover:text-white transition"
              >
                GitHub
              </Button>
            </a>
          </div>
        </motion.div>

        {/* 🧑‍🎨 Right Icon */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 0.6)}
          className="flex-[0.6] flex items-center justify-center"
        >
          <ContactMail
            style={{ fontSize: "15rem", color: "rgba(147, 197, 253, 0.7)" }}
            className="drop-shadow-lg"
          />
        </motion.div>
      </div>

      <hr className="border-gray-700 mt-20 max-w-7xl mx-auto" />
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
