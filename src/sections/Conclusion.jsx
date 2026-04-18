import { SectionTitle, Card, Badge } from "../components/SharedComponents";
import { motion } from "framer-motion";

export default function Conclusion() {
  const references = [
    "WHO global recommendations on physical activity for health (2020)",
    "Sri Lanka Dietary Guidelines — Nutrition Division, Ministry of Health",
    "IPAQ scoring protocol — Craig et al. (2003). Medicine & Science in Sports & Exercise",
    "FAO/WHO protein requirements for adults report",
    "Sri Lanka PDHS data on NCD prevalence in rural communities",
  ];

  return (
    <>
      <SectionTitle>Conclusion</SectionTitle>

      {/* Main Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card variant="green">
          <div className="space-y-4 text-sm text-gray-700">
            <p className="leading-relaxed">
              This field assignment provided an invaluable opportunity to apply
              academic nutrition knowledge within a real community setting.
              Through systematic problem identification using validated tools —
              the IPAQ short form, dietary habit assessments, socio-demographic
              questionnaires, and anthropometric measurements including handgrip
              dynamometry — two inter-related priority problems were confirmed
              in the Mediriwila adult community:{" "}
              <strong>low usage of protein sources (66.7%)</strong> and{" "}
              <strong>low physical activity levels (70% sedentary)</strong>.
            </p>
            <p className="leading-relaxed">
              A creative, multi-component intervention programme titled{" "}
              <em>"නිරෝගී හෙතකට — සවිය දෙන පෝෂණය"</em> was successfully designed
              and implemented at the Mediriwila Grama Sabha on 7 April. The
              programme combined a community drama performance, a recipe
              guessing session, a physical activity session, a clay food model
              identification game, seed and recipe distribution, and a
              structured feedback session — all within 45–60 minutes and within
              the allocated budget of Rs. 4,000.
            </p>
            <p className="leading-relaxed">
              The programme demonstrated that community nutrition education can
              be highly engaging, culturally sensitive, and practically
              actionable even within significant resource and time constraints.
              Participant feedback confirmed positive reception and increased
              awareness of plant protein sources and physical activity. While a
              single session has inherent limitations for producing lasting
              behavioural change, it laid an important foundation. Future
              efforts should incorporate follow-up sessions, community
              partnerships, and formal pre/post evaluation to sustain and
              measure impact.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* References */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8"
      >
        <Card variant="teal">
          <h3 className="text-lg font-medium text-gray-800 mb-4">References</h3>
          {/* <p className="text-xs text-gray-600 mb-4 italic">
            Add your references below in APA format. Suggested sources:
          </p> */}
          <ul className="space-y-2 mb-4">
            {references.map((ref, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="text-xs text-gray-600 flex gap-2"
              >
                <span className="text-teal-600 flex-shrink-0">{idx + 1}.</span>
                <span>{ref}</span>
              </motion.li>
            ))}
          </ul>
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-2 text-xs text-amber-700 italic"
          >
            Aim for at least 6–8 peer-reviewed and authoritative references for
            full marks on content quality.
          </motion.div> */}
        </Card>
      </motion.div>

      {/* Key Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Key takeaways
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              emoji: "🎯",
              title: "Problem Identification",
              desc: "Systematic use of validated assessment tools revealed clear, actionable priority problems in the community",
            },
            {
              emoji: "🎭",
              title: "Culturally Sensitive Design",
              desc: "Participatory, multi-method approaches resonate with adult communities far more than traditional lectures",
            },
            {
              emoji: "🌱",
              title: "Practical Sustainability",
              desc: "Tangible take-home actions like seed distribution bridge the gap between awareness and real behavioural change",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h4 className="font-medium text-gray-800 text-sm mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
