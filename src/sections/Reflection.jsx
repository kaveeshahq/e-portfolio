import { SectionTitle, Card, Badge } from "../components/SharedComponents";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Reflection() {
  const skills = [
    "Community needs assessment",
    "IPAQ administration",
    "Dietary questionnaire design",
    "Anthropometric measurement",
    "Drama-based health education",
    "Participatory facilitation",
    "Data analysis & interpretation",
    "Teamwork under resource constraints",
    "Community communication in Sinhala",
  ];

  return (
    <>
      <SectionTitle>Reflection</SectionTitle>

      {/* Main Reflection */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-green-100 border-l-4 border-green-600 rounded-lg p-6 mb-8 italic text-gray-800 leading-relaxed relative"
      >
        <Quote className="w-8 h-8 text-green-600 opacity-20 absolute top-4 right-4" />
        <p>
          "This field assignment was a transformative experience that took me
          far beyond the textbooks and into the heart of a real community.
          Walking into Mediriwila, meeting the Sanwardrana Niladhari and the
          Public Health Midwife, and then eventually standing before a room full
          of community members with a drama script in hand — I realised that
          nutrition is not just a science. It is deeply human."
        </p>
      </motion.div>

      {/* Skills Gained */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Skills gained
        </h3>
        <Card variant="green">
          <div className="flex flex-wrap gap-2 mb-5">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Badge variant={idx < 3 ? "green" : idx < 6 ? "amber" : "teal"}>
                  {skill}
                </Badge>
              </motion.span>
            ))}
          </div>

          <div className="space-y-4 text-sm text-gray-700">
            <p className="leading-relaxed">
              Through this assignment I developed competency in multiple
              community nutrition assessment methods — from the technical (IPAQ,
              anthropometric measurements, dietary habit questionnaires) to the
              interpersonal (key informant interviews, community facilitation in
              Sinhala). Analysing the data and seeing that 66.7% of community
              members rarely used protein sources made the problem feel real and
              urgent in a way that classroom statistics never quite achieve.
            </p>
            <p className="leading-relaxed">
              Preparing the drama, clay food models, recipe sheets, and
              community notice as a group required creativity, coordination, and
              genuine teamwork within a tight budget of Rs. 4,000. This
              experience taught me that the most meaningful educational tools
              are not necessarily expensive — a handmade clay fish can teach
              more than a printed poster if used correctly. The seed
              distribution was a personal highlight: giving participants the
              literal means to grow their own protein sources at home was the
              most tangible action we could take as nutrition students.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Personal Learning Moment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          Personal learning moment
        </h3>
        <Card variant="teal">
          <p className="text-sm text-gray-700 leading-relaxed">
            The most memorable moment of the entire project was during the clay
            food model game, when an elderly community member confidently picked
            up the clay legume model and named it correctly — and then said she
            had never thought of it as "protein food" before. That small shift
            in understanding, that visible moment of recognition, was the entire
            purpose of the project made real. It reinforced my belief that
            nutrition education, when done with care and cultural sensitivity,
            can genuinely change how people see and choose their food.
          </p>
        </Card>
      </motion.div>

      {/* Edit Note */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic"
      >
        Personalise this section further in your own words — add specific
        conversations you had with community members, personal challenges you
        overcame, and how this experience will shape your future as a nutrition
        professional.
      </motion.div> */}
    </>
  );
}
