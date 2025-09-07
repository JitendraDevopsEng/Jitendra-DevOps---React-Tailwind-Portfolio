import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">About</h2>
        <p className="mt-4 text-gray-300 text-lg">
          Passionate DevOps Engineer with <strong>10 years</strong> of IT & DevOps experience
          (including <strong>4.5 years in Azure</strong>). I build reliable infra using Terraform,
          automate delivery with CI/CD, containerize apps with Docker & Kubernetes,
          and implement monitoring with Prometheus & Grafana.
        </p>
      </div>
    </motion.section>
  );
}
