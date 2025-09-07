import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
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

        {/* 🔥 Open to Work Banner */}
        <motion.div
          className="mt-4 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 text-black font-semibold shadow-lg animate-bounce"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          🚀 Open to Work — Last Working Day: <span className="font-bold">30 Sep 2025</span>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          className="mt-5 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="font-semibold text-yellow-300">DevOps Engineer — </span>
          <TypeAnimation
            sequence={[
              "Azure", 2000,
              "Terraform", 2000,
              "Docker", 2000,
              "Kubernetes", 2000,
              "CI/CD", 2000,
              "GitHub Actions", 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-cyan-300 font-semibold"
          />
        </motion.div>
      </div>
    </section>
  );
}
