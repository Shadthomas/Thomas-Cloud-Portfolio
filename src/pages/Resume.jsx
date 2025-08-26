import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Resume() {
  return (
    <PageWrapper>
      <section
        aria-labelledby="resume-title"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-12 rounded-2xl shadow-xl"
      >
        <motion.h2
          id="resume-title"
          className="text-4xl font-extrabold mb-10 text-white tracking-wide text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        {/* === Contact & Links === */}
        <motion.div
          className="text-center text-gray-300 mb-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p>📍 Panama City, FL • 📞 (912) 432-0339 • ✉️ shadthomas71@gmail.com</p>
          <div className="flex justify-center gap-4 text-cyan-400 text-2xl">
            <a href="https://www.linkedin.com/in/stanley-thomas-38405518a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-cyan-300 transition" />
            </a>
            <a href="https://github.com/Shadthomas" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-cyan-300 transition" />
            </a>
            <a
              href="/Dev-Resume-Thomas-Updated.pdf"
              download
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-base mt-2 underline"
            >
              <FaDownload /> Download PDF
            </a>
          </div>
        </motion.div>

        {/* === Summary === */}
        <Section title="Professional Summary">
          <p>
            Disciplined and results-driven U.S. Air Force Staff Sergeant transitioning into a Cloud Engineering role.
            Proven ability to design, deploy, and secure scalable cloud solutions using AWS and Azure. Adept in
            scripting, automation, and DevOps practices with a passion for infrastructure as code and cloud security.
            Brings a mission-critical mindset, leadership experience, and hands-on technical ability to support
            enterprise cloud operations.
          </p>
        </Section>

        {/* === Skills === */}
        <Section title="Key Skills">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside">
            <li><strong>Cloud:</strong> AWS (SAA - In Progress), Azure (Certified), GCP</li>
            <li><strong>DevOps:</strong> Bash, PowerShell, Git, CI/CD Pipelines</li>
            <li><strong>Programming:</strong> Java, Python, C#, JavaScript</li>
            <li><strong>Web:</strong> HTML, CSS, PHP</li>
            <li><strong>Security:</strong> CompTIA Security+, CISSP (Studying)</li>
            <li><strong>Databases:</strong> MySQL, SQL</li>
          </ul>
        </Section>

        {/* === Experience === */}
        <Section title="Experience">
          <ExperienceItem
            role="Systems Administrator / Cloud Engineer"
            company="AERMOR LLC"
            date="Jul 2023 – Present"
            bullets={[
              "Designed and deployed secure cloud infrastructure using AWS EC2, S3, IAM, and VPC.",
              "Automated deployment tasks using PowerShell and Bash, improving system reliability.",
              "Integrated cloud-native features into enterprise portfolio solutions.",
              "Conducted security assessments and created custom exploits to identify vulnerabilities.",
              "Presented technical findings to senior leadership and stakeholders."
            ]}
          />
          <ExperienceItem
            role="Software Developer Student"
            company="SkillStorm – Remote"
            date="Feb 2023 – Jun 2023"
            bullets={[
              "Completed 16-week Java development bootcamp with cloud deployment focus.",
              "Built Spring Boot apps with MySQL and containerized environments.",
              "Delivered projects ahead of schedule by leveraging agile development.",
              "Worked with security teams to validate and patch vulnerabilities."
            ]}
          />
        </Section>



        {/* === Certifications & Education === */}
        <Section title="Certifications">
          <ul className="list-disc list-inside space-y-1">
            <li>CompTIA Security+ (2023)</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>AWS Solutions Architect – Associate (In Progress)</li>
            <li>Google Associate Cloud Engineer (In Progress)</li>
            <li>CISSP (Studying)</li>
          </ul>
        </Section>

        <Section title="Education">
          <p><strong>Park University</strong> – B.S. in Information and Computer Science (Matriculating)</p>
        </Section>

        <Section title="Additional Development">
          <ul className="list-disc list-inside space-y-1">
            <li>Building personal home labs for AWS and Azure practice</li>
            <li>Active contributor on GitHub and in cloud communities</li>
            <li>Practicing DevSecOps workflows and automation projects</li>
          </ul>
        </Section>
      </section>
    </PageWrapper>
  );
}

// === Helper Components ===

function Section({ title, children }) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <div className="text-gray-300 text-lg leading-relaxed">{children}</div>
    </motion.div>
  );
}

function ExperienceItem({ role, company, date, bullets }) {
  return (
    <div className="mb-8">
      <h4 className="text-xl font-bold text-cyan-400">{role}</h4>
      <p className="text-sm text-gray-400 italic mb-1">{company} • {date}</p>
      <ul className="list-disc list-inside space-y-1">
        {bullets.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

