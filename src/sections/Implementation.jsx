import {
  SectionTitle,
  Card,
  StatCard,
  ProgrammeStep,
} from "../components/SharedComponents";
import { motion } from "framer-motion";

export default function Implementation() {
  return (
    <>
      <SectionTitle>Implementation of the intervention</SectionTitle>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8"
      >
        <StatCard num="7 Apr" label="Programme date" />
        <StatCard num="10:00 AM" label="Start time" />
        <StatCard num="45–60" label="Duration (mins)" />
        <StatCard num="6" label="Group members" />
      </motion.div>

      {/* Programme Setting */}
      <Card variant="green">
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          Programme setting
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          The intervention programme was held at the{" "}
          <strong>Mediriwila Grama Sabha</strong> (community hall) on{" "}
          <strong>7 April (Wednesday) at 10:00 AM</strong>. A sufficient number
          of adult community members attended. All six group members
          participated actively throughout the entire programme.
        </p>
      </Card>

      {/* Step by Step */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-6">
          What happened on the day — step by step
        </h3>

        <ProgrammeStep
          number="1"
          title="Drama performance — opening the session"
          text="The session was opened with the drama portraying a relatable scenario from everyday Mediriwila village life. The drama depicted how a family's low protein intake and sedentary habits led to health problems. It immediately captured participants' attention and created engagement for the rest of the programme."
        />
        <ProgrammeStep
          number="2"
          title="Recipe guessing session"
          text="Group members presented actual foods that had been prepared in advance and invited community participants to smell, observe, and guess the dishes and their key ingredients. This interactive tasting activity introduced high-protein plant-based recipes in an enjoyable, hands-on format."
        />
        <ProgrammeStep
          number="3"
          title="Physical activity session"
          text="A structured physical activity session was conducted, specially designed for adults of various fitness levels. Simple, low-impact exercises were demonstrated and participants were invited to join in. The session showed that physical activity can be done comfortably in everyday village settings."
        />
        <ProgrammeStep
          number="4"
          title="Clay food model identification game"
          text="The handmade clay food models were used in an interactive identification game. Community members identified which models represented protein-rich foods and categorised them. Community members engaged enthusiastically with many correctly identifying plant protein sources they had not recognised before."
        />
        <ProgrammeStep
          number="5"
          title="Distribution of seeds and recipe sheets"
          text="Seeds of protein-rich plants were distributed to each participant to encourage home growing as a practical, sustainable long-term strategy. Recipe sheets featuring affordable, high-protein dishes using locally available ingredients were also distributed as take-home resources."
        />
        <ProgrammeStep
          number="6"
          title="Feedback session"
          text="A structured feedback session was conducted using a dot-sticker board, where participants placed stickers to indicate their responses and level of understanding. Verbal feedback was also invited. Participants gave positive feedback about the programme's content, drama, and interactive activities."
        />
      </motion.div>

      {/* Evidence Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Evidence of implementation
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "📷 Add photo: drama performance",
            "📷 Add photo: recipe guessing session",
            "📷 Add photo: physical activity session",
            "📷 Add photo: clay model game",
            "📷 Add photo: seed and recipe distribution",
            "📷 Add photo: feedback session / dot board",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-green-100 border-2 border-dashed border-green-600 rounded-lg p-8 text-center text-green-700 text-sm font-medium hover:bg-green-200 transition-colors"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Edit Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic"
      >
        Replace the photo placeholders above with your actual programme photos.
        Add the video link submitted to the course coordinator. Include the
        exact number of community participants who attended.
      </motion.div>
    </>
  );
}
