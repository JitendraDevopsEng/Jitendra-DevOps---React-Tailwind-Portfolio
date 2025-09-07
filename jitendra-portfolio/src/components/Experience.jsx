import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      company: "Reliance Industries Limited",
      role: "DevOps Engineer",
      duration: "Sep 2023 – Present",
      responsibilities: [
        "Automated Azure infrastructure provisioning using Terraform modules.",
        "Implemented CI/CD pipelines in Azure DevOps for multiple microservices.",
        "Configured and managed AKS clusters for production workloads.",
        "Integrated monitoring and alerting using Prometheus and Grafana.",
        "Applied security best-practices and governance in Azure (RBAC, policies)."
      ]
    },
    {
      company: "Quess Corp Limited",
      role: "DevOps Engineer",
      duration: "Jul 2022 – Aug 2023",
      responsibilities: [
        "Designed and implemented Azure DevOps pipelines for automated builds and releases.",
        "Provisioned cloud resources through Terraform and modularized code.",
        "Built Grafana dashboards for application & infra observability.",
        "Worked with dev teams to optimize release cycles and rollback strategies.",
        "Maintained access control and governance in cloud environments."
      ]
    },
    {
      company: "Retrofit Technology Pvt Ltd",
      role: "DevOps Engineer",
      duration: "May 2021 – Jul 2022",
      responsibilities: [
        "Developed CI/CD pipelines to reduce manual deployment effort.",
        "Built reusable Terraform modules for Azure infrastructure.",
        "Managed Docker images and Kubernetes deployments for staging & prod.",
        "Automated provisioning and improved release automation."
      ]
    },
    {
      company: "Kutumbh Care Pvt Ltd",
      role: "IT Support Engineer",
      duration: "Aug 2015 – Feb 2021",
      responsibilities: [
        "Provided IT infrastructure support and troubleshooting across offices.",
        "Managed Active Directory, user accounts and group policies.",
        "Handled network setup, backups and system maintenance.",
        "Supported cross-functional teams with software/hardware issues."
      ]
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-400 mb-8">Experience</h2>

        <div className="space-y-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <p className="text-sm text-gray-300">{job.role}</p>
                </div>
                <div className="text-sm text-gray-400">{job.duration}</div>
              </div>

              <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
                {job.responsibilities.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
