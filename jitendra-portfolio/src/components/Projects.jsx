import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Azure Infra Automation", desc: "Terraform modules for VNet, AKS, Storage and KeyVault." },
    { title: "CI/CD Pipelines", desc: "Azure DevOps + GitHub Actions pipelines with blue/green deployments." },
    { title: "Monitoring Stack", desc: "Prometheus + Grafana dashboards and alerting for applications." }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} className="p-4 bg-gray-800 rounded-lg border border-gray-700" whileHover={{ y: -6 }}>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
