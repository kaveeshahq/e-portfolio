import { SectionTitle, Card, Badge } from "../components/SharedComponents";
import { motion } from "framer-motion";

export default function Intervention() {
  const materials = [
    {
      title: "Clay food models",
      desc: "Handmade clay models of multiple protein sources — fish, chicken, eggs, legumes, soy — painted and labelled in Sinhala. Used in the identification game.",
      variant: "green",
    },
    {
      title: "Recipe sheets",
      desc: "Take-home recipe cards featuring high-protein dishes prepared from affordable, locally available plant protein sources.",
      variant: "green",
    },
    {
      title: "Community notice (Sinhala)",
      desc: "A bilingual invitation poster designed in Sinhala and distributed in the community. Stated the date, time, and venue.",
      variant: "green",
    },
    {
      title: "Drama script",
      desc: "A drama script portraying relatable village-life scenarios showing the consequences of insufficient protein intake and sedentary lifestyle.",
      variant: "teal",
    },
    {
      title: "Seeds for distribution",
      desc: "Seeds of protein-rich plants selected for home growing. Distributed to every participant as a practical, sustainable follow-up action.",
      variant: "amber",
    },
    {
      title: "Feedback evaluation form",
      desc: "A dot-sticker feedback board designed to visually collect participant responses and assess overall satisfaction with the intervention.",
      variant: "amber",
    },
  ];

  return (
    <>
      <SectionTitle>The planned intervention</SectionTitle>

      {/* Programme Concept */}
      <Card variant="green">
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          Programme concept
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Based on the identified problems, a multi-component community
          nutrition intervention programme titled{" "}
          <strong>"නිරෝගී හෙතකට — සවිය දෙන පෝෂණය"</strong> (Nutrition for a
          Healthy Life) was designed for the Mediriwila adult community. The
          programme was planned to address both{" "}
          <strong>low protein intake</strong> and{" "}
          <strong>low physical activity</strong> simultaneously through
          participatory, culturally appropriate methods.
        </p>
      </Card>

      {/* Rationale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          Rationale for this approach
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          A participatory, multi-method approach was chosen because the root
          cause of low protein intake in this community was a{" "}
          <strong>knowledge and awareness gap</strong> — not a food access
          issue. Adults in Mediriwila were simply unaware that locally
          available, affordable plant foods are rich protein sources.
          Interactive methods (drama, games, tasting) were preferred over
          lecture-based delivery to maximise engagement with an adult audience
          and improve retention of health messages.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Distributing seeds and protein-rich recipes was intentionally included
          as a <strong>practical, sustainable take-home action</strong> — moving
          the intervention beyond awareness toward real dietary behaviour
          change.
        </p>
      </motion.div>

      {/* Programme Components */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Planned programme components
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            "Drama performance — to open the session in a culturally engaging way",
            "Recipe guessing session — using real foods to introduce high-protein plant-based recipes",
            "Physical activity session — a structured, adult-friendly exercise session",
            "Clay food model identification game — interactive game to assess knowledge of protein sources",
            "Seed distribution — encouraging home growing for long-term dietary change",
            "Recipe distribution — take-home recipe cards with affordable high-protein dishes",
            "Feedback session — structured evaluation to assess participant understanding",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-green-600 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Materials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Materials prepared for the intervention
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {materials.map((material, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="card hover:shadow-md transition-shadow"
            >
              <div className="mb-2">
                <Badge variant={material.variant}>{material.title}</Badge>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                {material.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Notice Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-8 mb-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Community notice (Sinhala) — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Bilingual invitation poster designed in Sinhala and English,
          distributed to the community
        </p>
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group"
          >
            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden relative">
                <img
                  src="/assets/photos/intervention/01-community-notice-sinhala.jfif"
                  alt="Community Notice (Sinhala)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EImage not loaded%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Caption */}
              <div className="p-4 bg-gradient-to-t from-green-50 to-white">
                <p className="text-sm font-medium text-gray-800">
                  Community Notice — නිරෝගී හෙතකට
                </p>
                <p className="text-xs text-green-600 mt-2">
                  Sinhala & English Poster • Community Invitation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Seeds for Distribution Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 mb-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Seeds for distribution — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Protein-rich plant seeds packaged for distribution to community
          participants
        </p>
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group"
          >
            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden relative">
                <img
                  src="/assets/photos/intervention/02-seeds-for-distribution.jfif"
                  alt="Seeds for Distribution"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EImage not loaded%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Caption */}
              <div className="p-4 bg-gradient-to-t from-amber-50 to-white">
                <p className="text-sm font-medium text-gray-800">
                  Seeds for Home Growing
                </p>
                <p className="text-xs text-amber-600 mt-2">
                  Sustainable Take-home Action • Community Empowerment
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Recipe Sheets Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-8 mb-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Recipe sheets — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Take-home recipe cards featuring high-protein dishes prepared from
          affordable, locally available plant protein sources
        </p>
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group"
          >
            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden relative">
                <img
                  src="/assets/photos/intervention/03-recipe-sheets.png"
                  alt="Recipe Sheets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EImage not loaded%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Caption */}
              <div className="p-4 bg-gradient-to-t from-green-50 to-white">
                <p className="text-sm font-medium text-gray-800">
                  Recipe Sheets for Distribution
                </p>
                <p className="text-xs text-green-600 mt-2">
                  High-Protein Plant-Based Recipes • Take-home Resources
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Drama Script Document */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 mb-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Drama script — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          A drama script portraying relatable village-life scenarios showing the
          consequences of insufficient protein intake and sedentary lifestyle
        </p>
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group"
          >
            <a
              href="/assets/documents/සවිය දෙන පෝෂණය.docx"
              download
              className="block relative bg-white border-2 border-teal-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              {/* Icon Area */}
              <div className="aspect-square bg-gradient-to-br from-teal-50 to-teal-100 overflow-hidden relative flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📄</div>
                  <p className="text-xs font-medium text-teal-700">
                    Word Document
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-gradient-to-t from-teal-50 to-white border-t border-teal-100">
                <p className="text-sm font-medium text-gray-800 group-hover:text-teal-700 transition-colors">
                  සවිය දෙන පෝෂණය
                </p>
                <p className="text-xs text-teal-600 mt-2">
                  Drama Script • Click to Download
                </p>
                <p className="text-xs text-gray-500 mt-3 italic">
                  ↓ Download DOCX file
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Edit Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic"
      >
        Attach photos of your clay models, recipe sheets, community notice
        poster, and any other materials you prepared in this section.
      </motion.div>
    </>
  );
}
