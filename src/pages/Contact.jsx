import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <PageWrapper>
      <section
        aria-labelledby="contact-title"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-12 rounded-2xl shadow-xl"
      >
        {/* === Heading === */}
        <motion.h2
          id="contact-title"
          className="text-4xl font-extrabold mb-10 text-white tracking-wide text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        {/* === Intro Text === */}
        <motion.div
          className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            I'd love to hear from you—whether you have a question, want to collaborate, or just want to connect.
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* === Contact Options === */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:shadow-md transition">
            <FaEnvelope className="text-cyan-400 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-white">Email</h3>
            <p className="text-gray-300 mt-2">
              <a
                href="mailto:rashadthomas396@gmail.com"
                className="text-cyan-300 hover:text-cyan-200 underline"
              >
                rashadthomas396@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:shadow-md transition">
            <FaLinkedin className="text-cyan-400 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
            <p className="text-gray-300 mt-2">
              <a
                href="https://www.linkedin.com/in/stanley-thomas-38405518a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline"
              >
                linkedin.com/in/stanley-thomas
              </a>
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:shadow-md transition">
            <FaGithub className="text-cyan-400 text-3xl mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-white">GitHub</h3>
            <p className="text-gray-300 mt-2">
              <a
                href="https://github.com/Shadthomas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline"
              >
                github.com/Shadthomas
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
