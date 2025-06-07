import { Switch, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ParticlesContainer from "./ParticlesContainer";

const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:640px)");

  return (
    <section
      className={`relative flex h-screen w-full flex-col justify-between overflow-hidden ${
        darkMode ? "dark-hero" : "bg-white"
      } transition-all duration-500`}
    >
      <ParticlesContainer darkMode={darkMode} />

      {/* Theme Toggle */}
      <div className="absolute right-6 top-6 z-30 text-white">
        <span className="mr-2 text-sm font-semibold">
          {darkMode ? "Dark" : "Light"}
        </span>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="default"
        />
      </div>

      {/* Content */}
      <div className="z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 pt-32 sm:flex-row sm:gap-0 sm:px-12">
        {/* Left */}
        <div className="flex flex-row items-start gap-5">
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>
          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroHeadText} ${darkMode ? "text-white" : "text-black"}`}>
              Hi, I'm <span className="text-[#915EFF]">Saurabh</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-4 max-w-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <Typewriter
                words={[
                  "I develop Full Stack Web Applications",
                  "I use the MERN Stack",
                  "I build scalable solutions",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#915EFF] px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-[#915EFF] px-5 py-2 text-sm font-semibold text-[#915EFF] transition hover:bg-[#915EFF] hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: PNG Avatar */}
        <motion.img
          src="/myImage.png"
          alt="Saurabh's Avatar"
          className="z-10 rounded-2xl object-cover"
          style={{
            width: isSmallScreen ? 120 : 200,
            height: isSmallScreen ? 240 : 400,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
          variants={fadeIn("left", "spring", 0.3, 1)}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="z-10 mb-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
