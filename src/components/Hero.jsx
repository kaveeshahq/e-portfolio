import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 px-6 md:py-20 md:px-10"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl translate-y-1/2" />

      <motion.div variants={itemVariants} className="relative z-10 max-w-3xl">
        <motion.div
          variants={itemVariants}
          className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/50 mb-4"
        >
          NTN 3212 · Field Assignment in Nutrition · 2024/2025 Semester II
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-4 text-white"
        >
          E-Portfolio: Field Assignment
          <br />
          in Nutrition
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/70 text-base md:text-lg mb-6"
        >
          S.D. Kannangara · Index No. 218028 · Group 2 · Wayamba University of
          Sri Lanka
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 pt-2"
        >
          {[
            "Mediriwila Adult Community",
            "Low Protein Intake",
            "Low Physical Activity",
            "නිරෝගී හෙතකට — සවිය දෙන පෝෂණය",
          ].map((tag, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 border border-white/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-white/80 backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
