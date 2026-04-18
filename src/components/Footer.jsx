import { motion } from "framer-motion";

export default function Footer() {
  const members = [
    "218081 W.M.I.B.Wasala",
    "218028 S.D.Kannangara",
    "218057 S.T.N.Rashini",
    "218095 R.P.D.D.S.Wijesiri",
    "218124 D.A.K.Umayangana",
    "218033 H.M.L.S.Lakshan",
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-900 text-white py-12 px-6 mt-16 rounded-t-2xl"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="font-serif text-lg md:text-xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          S.D. Kannangara · Index No. 218028
        </motion.div>

        <motion.p
          className="text-white/60 text-sm mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Group 2 — Mediriwila Adult Community · NTN 3212 Field Assignment in
          Nutrition · Wayamba University of Sri Lanka
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {members.map((member, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-xs text-white/80 hover:bg-white/15 transition-colors"
            >
              {member}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-white/40 text-xs mt-8 pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
