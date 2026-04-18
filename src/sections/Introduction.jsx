import { motion } from "framer-motion";
import {
  SectionTitle,
  Card,
  StatCard,
  Badge,
} from "../components/SharedComponents";

export default function Introduction() {
  return (
    <>
      <SectionTitle>Introduction to the identified problems</SectionTitle>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8"
      >
        <StatCard num="2" label="Priority problems" />
        <StatCard num="66.7%" label="Low protein source usage" />
        <StatCard num="70%" label="Sedentary lifestyle" />
        <StatCard num="6" label="Group members" />
      </motion.div>

      {/* Target Community */}
      <Card variant="green">
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          Target community
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          The targeted community for this field assignment was the{" "}
          <strong>Mediriwila Grama Niladhari Division</strong> adult community.
          This rural community was selected based on preliminary information
          gathered from key informants, suggesting potential nutritional
          deficiencies and limited awareness of healthy dietary practices among
          adults in the area.
        </p>
      </Card>

      {/* Charts Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid md:grid-cols-2 gap-6 my-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <h4 className="text-sm font-medium text-green-900 mb-4 text-center">
            Protein source usage in the community
          </h4>
          <div className="flex justify-center mb-4">
            <svg
              width="120"
              height="120"
              viewBox="0 0 110 110"
              className="w-24 h-24"
            >
              <circle
                cx="55"
                cy="55"
                r="40"
                fill="none"
                stroke="#4a90d9"
                strokeWidth="40"
                strokeDasharray="167 85"
                strokeDashoffset="0"
              />
              <circle
                cx="55"
                cy="55"
                r="40"
                fill="none"
                stroke="#e05a3a"
                strokeWidth="40"
                strokeDasharray="28 224"
                strokeDashoffset="-167"
              />
              <circle
                cx="55"
                cy="55"
                r="40"
                fill="none"
                stroke="#639922"
                strokeWidth="40"
                strokeDasharray="56 196"
                strokeDashoffset="-195"
              />
              <circle cx="55" cy="55" r="22" fill="#fff" />
            </svg>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#4a90d9" }}
              />
              <span className="text-gray-600">Never / Rarely — 66.7%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#e05a3a" }}
              />
              <span className="text-gray-600">Sometimes — 11.1%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#639922" }}
              />
              <span className="text-gray-600">Regularly — 22.2%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
        >
          <h4 className="text-sm font-medium text-green-900 mb-4 text-center">
            Physical activity levels (IPAQ)
          </h4>
          <div className="flex justify-center mb-4">
            <svg
              width="120"
              height="120"
              viewBox="0 0 110 110"
              className="w-24 h-24"
            >
              <circle
                cx="55"
                cy="55"
                r="40"
                fill="none"
                stroke="#4a90d9"
                strokeWidth="40"
                strokeDasharray="176 76"
                strokeDashoffset="0"
              />
              <circle
                cx="55"
                cy="55"
                r="40"
                fill="none"
                stroke="#e07a3a"
                strokeWidth="40"
                strokeDasharray="50 202"
                strokeDashoffset="-176"
              />
              <circle
                cx="55"
                cy="55"
                r="40"
                fill="none"
                stroke="#aaa"
                strokeWidth="40"
                strokeDasharray="25 227"
                strokeDashoffset="-226"
              />
              <circle cx="55" cy="55" r="22" fill="#fff" />
            </svg>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#4a90d9" }}
              />
              <span className="text-gray-600">Sedentary — 70%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#e07a3a" }}
              />
              <span className="text-gray-600">Irregularly active — 20%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#aaa" }}
              />
              <span className="text-gray-600">Active — 10%</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Problem 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-medium text-gray-800 mt-8 mb-3">
          Problem 1 — Low usage of protein sources
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          The dietary habit assessment revealed that{" "}
          <strong>66.7% of community members</strong> rarely or never consumed
          sufficient protein-rich foods. Intake of plant-based protein sources
          such as legumes, dhal, and soy was particularly low. Key reasons
          identified include:
        </p>
        <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
          {[
            "Limited knowledge about plant-based protein sources and their health benefits",
            "Cultural preference for rice-centred meals with minimal protein accompaniments",
            "Low awareness of daily protein requirements for adults",
            "Misconception that only animal protein (meat/fish) is a valid protein source",
            "Economic constraints limiting access to animal-sourced protein foods",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-green-600 flex-shrink-0 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Problem 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
          Problem 2 — Low physical activity levels
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          The IPAQ (International Physical Activity Questionnaire) short form
          assessment showed that <strong>70% of adults were sedentary</strong>{" "}
          and only 10% were sufficiently active. Contributing factors include:
        </p>
        <ul className="space-y-1.5 text-sm text-gray-700">
          {[
            "Predominantly home-based daily routines with limited movement",
            "Lack of knowledge about recommended physical activity levels for adults",
            "Absence of structured physical activity facilities or programmes in the community",
            "Cultural norms that do not prioritise exercise as part of daily life",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-green-600 flex-shrink-0 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Prioritised Problems */}
      <Card variant="teal" className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          Prioritised problems
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Both <strong>low protein intake</strong> and{" "}
          <strong>low physical activity</strong> were prioritised as
          inter-related issues contributing to poor nutritional status and
          increased NCD risk among Mediriwila adults. The intervention was
          designed to address both problems together.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="green">Low protein intake</Badge>
          <Badge variant="green">Plant protein awareness</Badge>
          <Badge variant="amber">Sedentary lifestyle</Badge>
          <Badge variant="teal">Mediriwila Grama Niladhari</Badge>
        </div>
      </Card>
    </>
  );
}
