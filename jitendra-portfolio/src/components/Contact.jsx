import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Contact</h2>

        <div className="flex flex-col items-center gap-4 text-gray-300">
          <a href="mailto:Jitendra.devops.eng@gmail.com" className="flex items-center gap-2 hover:text-cyan-300">
            <Mail size={20} /> Jitendra.devops.eng@gmail.com
          </a>

          <p className="flex items-center gap-2">
            <Phone size={20} /> +91 7017720023
          </p>

          <a href="https://www.linkedin.com/in/jitendra-kumar-devopseng" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-300">
            <Linkedin size={20} /> linkedin.com/in/jitendra-kumar-devopseng
          </a>

          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-300">
            <Briefcase size={20} /> Naukri Profile
          </a>
        </div>
      </div>
    </motion.section>
  );
}
