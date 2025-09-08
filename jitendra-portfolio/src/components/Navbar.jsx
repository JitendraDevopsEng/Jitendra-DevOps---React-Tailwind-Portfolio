import { motion } from "framer-motion";

export default function Navbar() {
  const items = ["About","Experience","Skills","Projects","Contact"];
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-transparent"
    >
      <div className="max-w-3xl mx-auto px-6 py-4">
        <ul className="flex justify-center gap-8 text-sm md:text-base text-gray-300 font-medium">
          {items.map((it) => (
            <li key={it}>
              <a href={`#${it}`} className="relative group lowercase">
                {it}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 group-hover:w-full transition-all"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
