import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { FaCertificate } from "react-icons/fa";
import azureBadge from "../assets/azure.png";
import securityPlusBadge from "../assets/securityplus.jpg";

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate (COMING SOON!)",
    image: null,
  },
  {
    name: "AWS Machine Learning (COMING SOON!)",
    image: null,
  },
  {
    name: "CompTIA Security+",
    image: securityPlusBadge,
  },
  {
    name: "Microsoft Azure Fundamentals",
    image: azureBadge,
  },
  
];

export default function Certifications() {
  return (
    <PageWrapper>
      <section
        aria-labelledby="certifications-title"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-12 rounded-2xl shadow-xl"
      >
        <motion.h2
          id="certifications-title"
          className="text-4xl font-extrabold mb-10 text-white tracking-wide text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <motion.div
          className="space-y-8 text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-center">
            These certifications highlight my technical foundation and my commitment to continuous learning in the cloud,
            security, and infrastructure space. Each one reflects a milestone in my journey as a cloud engineer.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl shadow border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.02]"
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-16 h-16 object-contain rounded-md bg-white p-1"
                />
              ) : (
                <FaCertificate className="text-cyan-400 text-3xl" />
              )}
              <p className="text-base sm:text-lg font-medium text-gray-200">
                {cert.name}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  );
}
