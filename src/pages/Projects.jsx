import { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "image-labels",
    title: "Image Labels Generator",
    description: "Label images using AWS Rekognition with CLI & S3.",
    details:
      "This project demonstrates AWS Rekognition's image detection capabilities using CLI tools and S3. It's designed to scan, analyze, and label images for future ML workflows.",
    github: "https://github.com/yourusername/aws-3tier-app",
    demo: null,
    tech: ["S3", "IAM", "CLI", "Rekognition"],
    hasDiagram: true,
    diagramCaption: "AWS Rekognition flow using S3, IAM, and CLI with Python",
    diagramImage: "/image-labels.png",
  },
  {
    id: "text-narrator",
    title: "Amazon Polly Text",
    description: "Text-to-speech app using Amazon Polly and S3.",
    details:
      "Upload text files into S3 and convert them to speech with Amazon Polly. Customize pitch, rate, and voice.",
    github: "https://github.com/yourusername/cloud-security-dashboard",
    demo: null,
    tech: ["Amazon Polly", "IAM", "S3", "Lambda"],
    hasDiagram: true,
    diagramCaption: "AWS Polly text-to-speech pipeline using Lambda and S3",
    diagramImage: "/text-narrator-diagram.jpeg",
  },
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalCaption, setModalCaption] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (image, caption) => {
    setModalImage(image);
    setModalCaption(caption);
    setIsModalOpen(true);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalCaption("");
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <PageWrapper>
      <section
        aria-labelledby="projects-title"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-12 rounded-2xl shadow-xl"
      >
        <motion.h2
          id="projects-title"
          className="text-4xl font-extrabold mb-10 text-white tracking-wide text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg group-hover:ring-1 group-hover:ring-cyan-500 transition-transform hover:scale-[1.01]">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                    {project.details}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-cyan-700 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mb-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>

                  {project.hasDiagram && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(project.diagramImage, project.diagramCaption);
                      }}
                      className="text-sm text-cyan-300 underline hover:text-cyan-200 transition"
                    >
                      Show Architecture Diagram
                    </button>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* === Diagram Modal === */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-slate-900 border border-cyan-700 rounded-xl p-4 shadow-2xl max-w-5xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              >
                <button
                  onClick={closeModal}
                  className="text-white text-sm mb-4 hover:text-cyan-300 float-right"
                >
                  ✖ Close
                </button>

                <div className="cursor-zoom-in" onClick={toggleZoom}>
                  <img
                    src={modalImage}
                    alt="Architecture Diagram"
                    className={`transition-transform duration-500 rounded w-full mx-auto ${
                      isZoomed ? "scale-150 cursor-zoom-out" : "scale-100"
                    }`}
                  />
                </div>

                {modalCaption && (
                  <p className="mt-4 text-gray-400 text-sm text-center">
                    {modalCaption}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageWrapper>
  );
}
