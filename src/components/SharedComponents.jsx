import { motion } from "framer-motion";

export function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-serif font-light text-green-900 mb-6 pb-3 border-b-2 border-green-100"
    >
      {children}
    </motion.h2>
  );
}

export function Card({ children, className = "", variant = "default" }) {
  const variants = {
    default: "card",
    green: "card card-green",
    teal: "card card-teal",
    amber: "card card-amber",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function StatCard({ num, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="bg-green-100 border border-green-200 rounded-xl p-5 text-center hover:shadow-lg transition-all"
    >
      <div className="text-3xl md:text-4xl font-serif font-light text-green-900 mb-2">
        {num}
      </div>
      <div className="text-xs md:text-sm font-medium text-green-700 tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

export function Badge({ children, variant = "green" }) {
  const variants = {
    green: "badge",
    amber: "badge badge-amber",
    teal: "badge badge-teal",
  };

  return (
    <motion.span whileHover={{ scale: 1.05 }} className={variants[variant]}>
      {children}
    </motion.span>
  );
}

export function TimelineItem({ week, title, body }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 mb-6 pb-6 border-l-2 border-green-200 last:border-0 last:pb-0"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute -left-2.5 top-1 w-5 h-5 bg-green-600 rounded-full border-4 border-green-50"
      />
      <div className="text-xs font-semibold text-green-700 tracking-wider mb-1 uppercase">
        {week}
      </div>
      <h4 className="text-lg font-medium text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
    </motion.div>
  );
}

export function MethodCard({ name, desc, link = null }) {
  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05, y: -2 }}
        className="bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-300 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer group block"
      >
        <div className="flex items-start justify-between mb-2">
          <div className="font-medium text-green-900 text-sm flex-1">
            {name}
          </div>
          <div className="text-xl group-hover:scale-110 transition-transform ml-2">
            🔗
          </div>
        </div>
        <p className="text-xs text-green-700 leading-relaxed mb-3">{desc}</p>
        <div className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full group-hover:bg-green-700 transition-colors">
          Open Form →
        </div>
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="bg-green-100 border border-green-200 rounded-lg p-4 hover:shadow-md transition-all"
    >
      <div className="font-medium text-green-900 text-sm mb-2">{name}</div>
      <p className="text-xs text-green-700 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export function ProgrammeStep({ number, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 mb-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm"
      >
        {number}
      </motion.div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
