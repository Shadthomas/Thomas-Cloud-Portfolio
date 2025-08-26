import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section
        aria-labelledby="about-title"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-12 rounded-2xl shadow-xl"
      >
        {/* Background animated visual (optional future upgrade with particles or SVGs) */}

        <motion.h2
          id="about-title"
          className="text-4xl font-extrabold mb-10 text-white tracking-wide text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="space-y-8 text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            I'm a dedicated and disciplined{" "}
            <strong className="text-white">10-year U.S. Air Force veteran</strong> transitioning into a career in IT.
            Highly organized, self-motivated, and proficient with computer systems, I thrive in learning new tools and
            methodologies quickly. My strengths include{" "}
            <strong className="text-white">problem-solving</strong>,{" "}
            <strong className="text-white">cloud technologies</strong>, and building{" "}
            <strong className="text-white">user-centered solutions</strong>.
          </p>

          <p>
            My military experience sharpened my{" "}
            <strong className="text-white">leadership</strong> and instilled a deep appreciation for{" "}
            <strong className="text-white">teamwork and resilience</strong>. I’ve managed complex operations and
            transformed ideas into real-world results. These experiences shape my approach as a future{" "}
            <strong className="text-white">cloud engineer</strong> and content creator.
          </p>

          <p>
            Through my portfolio, I aim to{" "}
            <strong className="text-white">educate, inspire, and empower</strong> others navigating the world of tech.
            I share personal lessons, hands-on projects, and reflections from my journey. Thanks for visiting—I'm
            excited to connect and grow with you!
          </p>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
