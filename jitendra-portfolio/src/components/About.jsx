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
          Experienced Azure DevOps Engineer with a proven track record of implementing streamlined solutions.
          Proficient in deploying automation and infrastructure through code. Overall <strong>9.9 years</strong> of experience, 
          processing <strong>4.3 years of Azure cloud industry experience</strong>, I am adept at using Prometheus, Grafana for 
          real time Monitoring, alerting, enabling proactive performance management and troubleshooting and 
          Microsoft Azure, Terraform(Iac) and CI/CD pipelines with Git/GitHub, Azure Repos, to streamline 
          infrastructure management. My skills in minimizing downtime and optimizing system performance have 
          consistently contributed to successful project outcomes.
        </p>
      </div>
    </motion.section>
  );
}
