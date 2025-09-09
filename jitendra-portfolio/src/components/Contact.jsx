import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Briefcase } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mkgvyoez", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("✅ Message Sent Successfully!");
      e.target.reset();
    } else {
      setStatus("❌ Oops! Something went wrong.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Contact</h2>

        {/* Direct Links */}
        <div className="flex flex-col items-center gap-4 text-gray-300 mb-8">
          <a
            href="mailto:Jitendra.devops.eng@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-300"
          >
            <Mail size={20} /> Jitendra.devops.eng@gmail.com
          </a>

          <p className="flex items-center gap-2">
            <Phone size={20} /> +91 7017720023
          </p>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/jitendra-kumar-devopseng"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            <Linkedin size={20} /> LinkedIn Profile
          </a>

          {/* Naukri Button */}
          <a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            <Briefcase size={20} /> Naukri Profile
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-green-400 font-medium">{status}</p>}
      </div>
    </motion.section>
  );
}
