import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import PageWrapper from "../components/PageWrapper";

export default function Intro() {
  return (
    <PageWrapper>
      <section
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-indigo-900 to-gray-900 text-white px-6 py-24 text-center animate-gradient border border-white/10 backdrop-blur-lg rounded-2xl shadow-2xl"
        aria-labelledby="intro-title"
      >
        {/* 👤 Professional Headshot with gradient halo */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Halo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,0.35), rgba(59,130,246,0.35), rgba(147,51,234,0.35), rgba(34,211,238,0.35))",
              filter: "blur(30px)",
            }}
          />
          <motion.img
            src="/Thomas_Profile_Pic.jpg"
            alt="Stanley Rashad Thomas"
            loading="eager"
            decoding="async"
            className="rounded-full aspect-square object-cover border-4 border-white/20 shadow-2xl
                       w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            // Optional: supply higher-DPI sources if you have them
            // srcSet="/Thomas_Profile_Pic@1x.jpg 1x, /Thomas_Profile_Pic@2x.jpg 2x"
          />
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          id="intro-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stanley Rashad Thomas
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mt-4 mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typewriter
            words={[
              "U.S. Air Force Veteran turned Cloud Engineer",
              "Building cloud-native solutions in AWS",
              "Automating infrastructure with Terraform & CI/CD",
              "Inspiring others through tech and service",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link
            to="/projects"
            className="inline-block bg-cyan-500 text-black font-semibold px-8 py-4 rounded-full shadow-md hover:bg-cyan-400 hover:scale-105 hover:shadow-cyan-400/50 transition duration-300 ease-in-out text-lg"
          >
            Explore My Portfolio
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a
            href="https://github.com/Shadthomas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-cyan-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/stanley-thomas-38405518a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-cyan-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
