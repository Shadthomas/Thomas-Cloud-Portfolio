import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaAward,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import clsx from "clsx";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const linkClasses = (path) =>
    clsx(
      "flex items-center text-lg gap-3 px-2 py-1 rounded transition duration-200",
      location.pathname === path
        ? "text-cyan-500 font-semibold bg-black/10 dark:bg-white/10"
        : "text-gray-700 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-black/5 dark:hover:bg-white/5"
    );

  return (
    <motion.div
      className="w-72 h-full bg-white/80 dark:bg-white/10 backdrop-blur-lg shadow-xl p-6 flex flex-col justify-between border-r border-black/10 dark:border-white/10 transition-colors duration-300"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <div className="flex flex-col items-center mb-6">
          <img
            src="/Thomas_Profile_Pic.jpg"
            alt="Stanley Rashad Thomas"
            className="w-40 h-40 rounded-full border-2 border-cyan-400 shadow-md mb-4 object-cover"
          />
          <h1 className="text-xl text-center font-bold text-gray-900 dark:text-white tracking-wide">
            Stanley Rashad Thomas
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Cloud Engineer | Air Force Veteran</p>
        </div>

        <nav className="space-y-4 mt-8">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/" className={linkClasses("/")}><FaHome /> Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/about" className={linkClasses("/about")}><FaUser /> About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/projects" className={linkClasses("/projects")}><FaProjectDiagram /> Projects</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/certifications" className={linkClasses("/certifications")}><FaAward /> Certifications</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/resume" className={linkClasses("/resume")}><FaFileAlt /> Resume</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/contact" className={linkClasses("/contact")}><FaEnvelope /> Contact</Link>
          </motion.div>
        </nav>
      </div>

      <div className="mt-12 space-y-4">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Shadthomas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/stanley-thomas-38405518a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 mx-auto transition"
          aria-label="Toggle Theme"
        >
          {isDark ? <FaSun /> : <FaMoon />}
          {isDark ? "Light mode" : "Dark mode"}
        </button>

        <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
          © {new Date().getFullYear()} Rashad Thomas
        </p>
      </div>
    </motion.div>
  );
};

export default Sidebar;
