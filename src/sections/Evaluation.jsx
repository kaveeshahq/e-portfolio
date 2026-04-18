import { SectionTitle, Card } from "../components/SharedComponents";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";

export default function Evaluation() {
  const strengths = [
    "Multi-method approach (drama, game, physical activity, tasting, seeds) sustained participant engagement",
    "Drama was highly culturally appropriate and instantly created rapport with the adult village community",
    "Clay food models made learning visual and tactile — well suited for adults with varied literacy levels",
    "Seed distribution moved the intervention beyond awareness to a practical, sustainable take-home action",
    "Dot-sticker feedback board was simple and inclusive for a community setting",
    "All six group members participated actively, ensuring professional delivery throughout",
  ];

  const weaknesses = [
    "A single one-time session is insufficient to produce sustained long-term behavioural change",
    "No formal follow-up assessment was conducted to measure whether participants actually changed their protein consumption",
    "Community sample size was limited, reducing generalisability of the identified problems",
    "IPAQ self-reported data is subject to recall bias and social desirability bias",
    "Budget constraints (Rs. 4,000) limited the scale of seed distribution and quality of printed recipe materials",
  ];

  const suggestions = [
    "Conduct a follow-up session one month after the programme using the same dietary habit questionnaire",
    "Partner with the local PHM and Sanwardrana Niladhari to integrate protein education into existing community health outreach",
    "Use pre- and post-knowledge tests on the day of the programme to objectively measure immediate impact",
    "Expand the physical activity session into a regular community exercise group with volunteer leaders",
    "Develop an illustrated bilingual (Sinhala/English) booklet covering protein sources and simple recipes",
    "Increase the sample size in the problem identification stage to include more households across the full Grama Niladhari division",
  ];

  return (
    <>
      <SectionTitle>
        Evaluation: strengths, limitations and suggestions
      </SectionTitle>

      {/* Strengths & Weaknesses Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid md:grid-cols-2 gap-6 mb-8"
      >
        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="card bg-gradient-to-br from-green-50 to-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
            <h3 className="text-lg font-medium text-green-900">
              Strengths of the intervention
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {strengths.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-green-600 flex-shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Weaknesses */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="card bg-gradient-to-br from-red-50 to-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <h3 className="text-lg font-medium text-red-900">
              Weaknesses and limitations
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {weaknesses.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-red-600 flex-shrink-0 mt-0.5">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card variant="amber">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <h3 className="text-lg font-medium text-amber-900">
              Suggestions to improve the intervention
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {suggestions.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-amber-600 flex-shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      {/* Edit Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic"
      >
        Add your own specific observations — what you personally noticed about
        participant reactions, any unexpected challenges on the day, and what
        you would do differently if repeating the programme.
      </motion.div>
    </>
  );
}
