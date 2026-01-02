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
          <p>📍 Panama City, FL • ✉️ rashadthomas396@gmail.com</p>
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
          Cloud-focused Systems Engineer with 10+ years supporting mission-critical DoD environments and 24/7
operational networks. Experienced in AWS, Linux, Windows Server, Active Directory, virtualization, automation,
and secure hybrid architectures. Proven ability to harden systems, automate deployments, troubleshoot complex
outages, and support scalable, security-first infrastructure across enterprise and tactical environments.
          </p>
        </Section>

        {/* === Skills === */}
        <Section title="Key Skills">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside">
            <li><strong>CLOUD & DEVOPS:</strong> AWS (EC2, S3, IAM, VPC) • Azure Fundamentals • Docker • Jenkins • GitHub</li>
            <li><strong>SYSTEMS & OS:</strong> Linux • Windows Server • Active Directory • Hyper-V • MECM/MDT</li>
            <li><strong>AUTOMATION & SCRIPTING:</strong> Python • Bash • PowerShell</li>
            <li><strong>SECURITY & COMPLIANCE:</strong> CompTIA Security+ • STIG • ACAS/SCAP • Secure Enclaves • DoD Compliance</li>
            <li><strong>NETWORKING:</strong> Network Troubleshooting • WAN/LAN • IDS • Access Control</li>
          </ul>
        </Section>

        {/* === Experience === */}
        <Section title="Experience">
          <ExperienceItem
            role="Systems Administrator / Cloud Engineer"
            company="AERMOR LLC"
            date="Jul 2023 – Present"
            bullets={[
              "Administer and harden 100+ Windows and Linux systems across hybrid environments supporting 24/7 mission-critical operations.",
              "Manage Hyper-V virtualization infrastructure including VM deployment, clustering, resource allocation, and performance monitoring.",
              "Maintain Active Directory users, groups, OUs, certificates, and Group Policy Objects to support secure authentication workflows.",
              "Support network-attached storage, backup schedules, and recovery operations across multi-system environments.",
              "Assist in vulnerability assessments by validating ACAS/SCAP findings and implementing remediation actions.",
              "Troubleshoot system and network outages, restore services, and document root-cause analysis for leadership and engineering teams.",
              "Develop deployment task sequences using MECM/MDT methodologies and modern automation concepts.",
              "Deliver technical reports, architecture recommendations, and system improvement roadmaps to senior leadership."
            ]}
          />
          <ExperienceItem
            role="United State Air Force Member"
            date="Nov 2014 - Present"
            bullets={[
              "Operate and maintain mission-critical communications systems including radio networks, dispatch consoles, MDTs, and secure messaging platforms.",
              "Execute advanced troubleshooting on DoD systems to resolve outages and ensure operational continuity during high-tempo operations.",
              "Maintain digital security logs, incident reporting, and DoD-compliant record retention.",
              "Support multi-domain architectures including WAN, LAN, secure enclaves, CCTV, IDS, access control, and high-value asset protection systems.",
              "Collaborate with cybersecurity, intelligence, and IT teams during inspections, audits, and elevated threat responses.",
              "Mentor and train personnel while enforcing operational standards in classified environments."
            ]}
          />
        </Section>



        {/* === Certifications & Education === */}
        <Section title="Certifications">
          <ul className="list-disc list-inside space-y-1">
            <li>CompTIA Security+ (2023)</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>AWS Solutions Architect – Associate (In Progress)</li>
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

