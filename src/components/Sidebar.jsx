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
} from "react-icons/fa";
import clsx from "clsx";

const Sidebar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    clsx(
      "flex items-center text-lg gap-3 px-2 py-1 rounded transition duration-200",
      location.pathname === path
        ? "text-cyan-400 font-semibold bg-white/10"
        : "text-white hover:text-cyan-400 hover:bg-white/5"
    );

  const toggleTheme = () => {
    // Placeholder for future theme toggle logic
    console.log("Theme toggled");
  };

  return (
    <motion.div
      className="w-72 h-full bg-white/10 backdrop-blur-lg shadow-xl p-6 flex flex-col justify-between border-r border-white/10"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/ayyshuad-profile.png"
            alt="Rashad Thomas"
            className="w-40 h-40 rounded-full border-2 border-cyan-400 shadow-md mb-4 object-cover"
          />
          <h1 className="text-xl text-center font-bold text-white tracking-wide">
            Stanley Rashad Thomas
          </h1>
          <p className="text-sm text-gray-400">Cloud Engineer | Air Force Member</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4 mt-8">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/" className={linkClasses("/")}>
              <FaHome /> Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/about" className={linkClasses("/about")}>
              <FaUser /> About
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/projects" className={linkClasses("/projects")}>
              <FaProjectDiagram /> Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/certifications" className={linkClasses("/certifications")}>
              <FaAward /> Certifications
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/resume" className={linkClasses("/resume")}>
              <FaFileAlt /> Resume
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/contact" className={linkClasses("/contact")}>
              <FaEnvelope /> Contact
            </Link>
          </motion.div>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="mt-12 space-y-4">
        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Shadthomas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-cyan-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/stanley-thomas-38405518a/ "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-cyan-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 mx-auto"
          aria-label="Toggle Theme"
        >
          <FaSun /> Toggle Theme
        </button>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Rashad Thomas
        </p>
      </div>
    </motion.div>
  );
};

export default Sidebar;
