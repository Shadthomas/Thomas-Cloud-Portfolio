import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { FaAws, FaLinux, FaPython, FaDocker } from "react-icons/fa";
import { SiTerraform, SiAnsible } from "react-icons/si";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const milestones = [
  {
    year: "2014",
    title: "Enlisted, U.S. Air Force",
    desc: "Started a 10-year career maintaining mission-critical communications and DoD systems around the clock.",
  },
  {
    year: "2023",
    title: "Joined AERMOR LLC",
    desc: "Brought military discipline to the private sector — administering 100+ Windows and Linux systems in hybrid cloud environments.",
  },
  {
    year: "2023",
    title: "CompTIA Security+ & Azure Fundamentals",
    desc: "Formalized the security knowledge built over a decade of working inside classified, hardened networks.",
  },
  {
    year: "Now",
    title: "Building in the cloud",
    desc: "Hands-on AWS projects, studying for Solutions Architect, and documenting everything so others can follow the path.",
  },
];

const skills = [
  { icon: <FaAws size={22} />, label: "AWS" },
  { icon: <FaLinux size={22} />, label: "Linux" },
  { icon: <FaPython size={22} />, label: "Python" },
  { icon: <FaDocker size={22} />, label: "Docker" },
  { icon: <SiTerraform size={22} />, label: "Terraform" },
  { icon: <SiAnsible size={22} />, label: "Ansible" },
];

export default function About() {
  return (
    <PageWrapper>
      <section
        aria-labelledby="about-title"
        className="relative bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black px-6 py-12 rounded-2xl shadow-xl transition-colors duration-300"
      >
        {/* Heading */}
        <motion.h2
          id="about-title"
          className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white tracking-wide text-center"
          {...fadeUp(0)}
        >
          About Me
        </motion.h2>

        {/* Hero paragraph — the hook */}
        <motion.div className="max-w-3xl mx-auto mb-14 space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300" {...fadeUp(0.1)}>
          <p>
            For ten years I kept communications running in some of the most demanding environments the Air Force could
            throw at me — classified networks, 24/7 operations centers, multi-domain systems where downtime wasn't an
            option. I didn't have the luxury of rebooting a problem and hoping it went away. I had to{" "}
            <strong className="text-gray-900 dark:text-white">understand it, fix it, and document it</strong> before
            the next shift hit the floor.
          </p>
          <p>
            When I transitioned out, I brought that same mindset into cloud engineering. The tooling changed — AWS
            instead of secure enclaves, Terraform instead of MDT task sequences — but the discipline didn't. I'm
            drawn to infrastructure because I believe{" "}
            <strong className="text-gray-900 dark:text-white">well-built systems are invisible</strong>: nobody notices
            them working, and everybody notices when they don't.
          </p>
          <p>
            Right now I'm at AERMOR LLC managing hybrid Windows/Linux environments while spending nights and weekends
            building hands-on AWS projects, earning my Solutions Architect cert, and writing up everything I learn so
            the next person transitioning from the military into tech has a clearer path than I did.
          </p>
        </motion.div>

        {/* Skills strip */}
        <motion.div {...fadeUp(0.2)} className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 text-center mb-6">
            Tools I work with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
              >
                {icon}
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div {...fadeUp(0.3)} className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 text-center mb-8">
            The journey so far
          </p>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200 dark:bg-white/10" />

            <div className="space-y-8">
              {milestones.map(({ year, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
                >
                  {/* dot */}
                  <div className="mt-1 w-6 h-6 flex-shrink-0 rounded-full border-2 border-cyan-400 bg-white dark:bg-gray-900 z-10" />
                  <div>
                    <span className="text-xs font-bold text-cyan-500 dark:text-cyan-400 uppercase tracking-wider">
                      {year}
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mt-0.5">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.p
          className="text-center text-gray-500 dark:text-gray-400 text-base mt-14 max-w-xl mx-auto"
          {...fadeUp(0.7)}
        >
          If you're a recruiter, a fellow vet making the switch, or just someone who wants to talk cloud — my inbox is
          always open.{" "}
          <a
            href="/contact"
            className="text-cyan-500 dark:text-cyan-400 underline underline-offset-2 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
          >
            Let's connect.
          </a>
        </motion.p>
      </section>
    </PageWrapper>
  );
}
