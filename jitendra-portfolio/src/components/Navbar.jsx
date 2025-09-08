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
          <img
            src={radheImg}
            alt="Radhe"
            className="w-8 h-8 md:w-10 md:h-10 object-contain mb-1"
          />
          <h1 className="text-lg md:text-xl font-extrabold text-cyan-400">
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
          <img
            src={krishnaImg}
            alt="Krishna"
            className="w-8 h-8 md:w-10 md:h-10 object-contain mb-1"
          />
          <h1 className="text-lg md:text-xl font-extrabold text-pink-400">
            Krishna
          </h1>
        </div>
      </div>
    </motion.nav>
  );
}
