import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["Azure", "Terraform", "Azure DevOps", "CI/CD", "Docker", "Kubernetes", "Prometheus", "Grafana", "Linux", "GitHub Actions", "PowerShell", "YAML"];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              className="p-3 bg-gray-800 rounded-lg border border-gray-700 text-sm text-gray-200"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

