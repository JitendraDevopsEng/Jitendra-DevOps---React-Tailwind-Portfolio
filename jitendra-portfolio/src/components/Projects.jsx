import azureInfra from "../assets/azure-infra.png";
import cicd from "../assets/cicd.png";
import monitoring from "../assets/monitoring.png";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">🚀 Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Azure Infra Automation */}
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={azureInfra} alt="Azure Infra" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Azure Infra Automation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Automated provisioning of Azure infra with reusable Terraform modules:
                RG, VNet, Subnet, SQL DB, VM, VMSS, App Gateway, AKS, Storage & KeyVault etc.
              </p>
            </div>
          </div>

          {/* CI/CD Pipelines */}
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={cicd} alt="CI/CD Pipelines" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">CI/CD Pipelines</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Built CI/CD pipelines using Azure DevOps & GitHub Actions with
                blue/green deployments for zero downtime and faster delivery.
              </p>
            </div>
          </div>

          {/* Monitoring Stack */}
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={monitoring} alt="Monitoring Stack" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Monitoring Stack</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Full monitoring solution with Prometheus & Grafana — real-time metrics,
                custom dashboards & intelligent alerting for reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
