import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import close from "../assets/close.svg"; // Add your close icon here
import menu from "../assets/menu.svg"; // Add your hamburger icon here
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 w-full py-5 transition-all duration-300 ${
        scrolled ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="./logo.png" alt="logo" className="h-10 w-10 object-contain" />
          <p className="text-gradient hidden sm:block text-[18px] font-bold text-white">
            Saurabh <span className="text-sm font-normal text-gray-400">| MERN Stack Developer</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row items-center gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[17px] font-medium transition-colors duration-200 ${
                active === nav.title ? "text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="flex sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-7 w-7 cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } dark-glass absolute right-4 top-20 z-30 min-w-[180px] flex-col items-start rounded-xl bg-[#1a1a2e] p-6 shadow-2xl transition-all duration-300`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
