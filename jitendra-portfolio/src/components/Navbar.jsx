import { motion } from "framer-motion";
import radheImg from "../assets/radhe.png";
import krishnaImg from "../assets/krishna.png";

export default function Navbar() {
  const items = ["about", "experience", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left corner - Radhe */}
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Gradient Aura Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 opacity-60 blur-md animate-gradient-x"></div>
            <img
              src={radheImg}
              alt="Radhe"
              className="relative w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </motion.div>
          <h1 className="text-lg md:text-xl font-extrabold text-cyan-400 mt-1">
            Radhe
          </h1>
        </div>

        {/* Center - Navigation Links */}
        <ul className="flex gap-8 text-sm md:text-base text-gray-300 font-medium">
          {items.map((it) => (
            <li key={it}>
              <a
                href={`#${it}`}
                className="relative group lowercase"
              >
                {it}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 group-hover:w-full transition-all"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right corner - Krishna */}
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Gradient Aura Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 opacity-60 blur-md animate-gradient-x"></div>
            <img
              src={krishnaImg}
              alt="Krishna"
              className="relative w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </motion.div>
          <h1 className="text-lg md:text-xl font-extrabold text-pink-400 mt-1">
            Krishna
          </h1>
        </div>
      </div>
    </motion.nav>
  );
}
