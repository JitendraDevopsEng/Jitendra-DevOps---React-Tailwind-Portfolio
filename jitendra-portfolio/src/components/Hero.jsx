import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl w-full text-center">
        {/* Profile Photo */}
        <motion.img
          src={profile}
          alt="Jitendra"
          className="mx-auto w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 90 }}
        />

        {/* Name */}
        <motion.h1
          className="mt-6 text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Jitendra Kumar
        </motion.h1>

        {/* Open To Work Animated Line */}
        <motion.p
          className="mt-4 text-lg md:text-xl font-bold text-pink-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "🎉 Open To Work 🚀",
              2000,
              "⏱️ Immediate Joiner",
              2000,
              "⏳ DevOps Engineer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-pink-400 font-extrabold"
          />
        </motion.p>

        {/* Animated Subtitle */}
        <motion.div
          className="mt-3 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="font-semibold text-yellow-300">
            DevOps Engineer —{" "}
          </span>
          <TypeAnimation
            sequence={[
              "☁️ Azure (Cloud Infrastructure)", 2000,
              "⚙️ Terraform (IaC)", 2000,
              "🐳 Docker", 2000,
              "☸️ Kubernetes", 2000,
              "🚀 CI/CD (☁️Azure DevOps, 🐙GitHub Actions)", 2000,
              "📊 Monitoring (Prometheus, Grafana, ELK)", 2000,
              "🐧 Linux, ⚡PowerShell, 💻Bash, ✍️Scripting", 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-cyan-300 font-semibold"
          />
        </motion.div>

        {/* Qualifications */}
        <motion.div
          className="mt-6 text-gray-300 text-sm md:text-base bg-gray-800 p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="text-lg font-bold text-cyan-400 mb-2">
            Qualifications
          </h3>
          <ul className="space-y-1 text-gray-300">
            <li>📘 10th — U.P. Board (2009)</li>
            <li>📗 12th — U.P. Board (2011)</li>
            <li>💻 Diploma — IASE University (2014)</li>
          </ul>
        </motion.div>

        {/* Download CV Button */}
        <motion.a
          href="/Jitendra-Resume.pdf"
          download
          className="mt-6 inline-block px-6 py-3 text-lg font-bold text-white rounded-lg 
          bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 
          shadow-lg hover:scale-105 transform transition 
          animate-gradient-x animate-pulse-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          📄 Download CV
        </motion.a>
      </div>
    </section>
  );
}
