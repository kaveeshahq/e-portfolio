import { motion } from "framer-motion";

export default function Navigation({
  activeSection,
  setActiveSection,
  sections,
}) {
  const sectionKeys = Object.keys(sections);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md bg-white/95"
    >
      <div className="flex overflow-x-auto scrollbar-hide">
        {sectionKeys.map((key) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection(key)}
            className={`
              relative px-4 md:px-6 py-3.5 text-sm font-medium whitespace-nowrap transition-all
              ${
                activeSection === key
                  ? "text-green-700"
                  : "text-gray-500 hover:text-green-600"
              }
            `}
          >
            {sections[key].label}
            {activeSection === key && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
