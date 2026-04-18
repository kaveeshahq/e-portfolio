import {
  SectionTitle,
  Card,
  TimelineItem,
  MethodCard,
} from "../components/SharedComponents";
import { motion } from "framer-motion";

export default function Activities() {
  return (
    <>
      <SectionTitle>Activities and observations during 4 weeks</SectionTitle>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-8"
      >
        <TimelineItem
          week="Week 1"
          title="Initial discussion with key informants"
          body="Selected the Mediriwila Grama Niladhari Division as the target community. Met with the Sanwardrana Niladhari (Community Development Officer) and visited the local Public Health Midwife (PHM) clinic to discuss common health concerns. These meetings helped narrow down potential nutrition problems and established good rapport with community gatekeepers."
        />
        <TimelineItem
          week="Week 2"
          title="Problem identification — data collection"
          body="Conducted comprehensive community assessment using validated tools: the IPAQ Short Form to assess physical activity levels, socio-demographic questionnaire, and dietary habit assessment questionnaire via Google Forms. Anthropometric measurements including height, weight, waist and hip circumferences, and handgrip strength were taken."
        />
        <TimelineItem
          week="Week 3"
          title="Data analysis and intervention planning"
          body="Analysed collected data confirming two priority problems: low protein source usage (66.7%) and low physical activity (70% sedentary). Designed the multi-component intervention programme. Coordinated with Dr. Thilanka Ranathunga to confirm the programme date, time, and venue."
        />
        <TimelineItem
          week="Week 4"
          title="Material preparation and programme implementation"
          body="Prepared all materials: clay food models, recipe sheets, seeds for distribution, drama script, and Sinhala community notice. The intervention programme was implemented at the Mediriwila Grama Sabha on 7 April at 10:00 AM with all six group members participating actively."
        />
      </motion.div>

      {/* Problem Identification — Data Collection Evidence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 mb-8"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Problem identification — data collection evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Photos from Week 2: Community assessment activities, questionnaire
          administration, anthropometric measurements, and key informant
          interviews
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              num: 1,
              label: "",
              file: "01-community-assessment-setup.jfif",
            },
            {
              num: 2,
              label: "",
              file: "02-ipaq-administration.jfif",
            },
            {
              num: 3,
              label: "",
              file: "03-socio-demographic-questionnaire.jfif",
            },
            {
              num: 4,
              label: "",
              file: "04-height-weight-measurement.jfif",
            },
            {
              num: 5,
              label: "",
              file: "05-waist-hip-circumference.jfif",
            },
            {
              num: 6,
              label: "",
              file: "06-handgrip-strength-test.jfif",
            },
            {
              num: 7,
              label: "",
              file: "07-key-informant-interview.jfif",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group"
            >
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden relative">
                  <img
                    src={`/assets/photos/activities/${item.file}`}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EImage not loaded%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  {/* Photo number badge */}
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.num}/7
                  </div>
                </div>

                {/* Caption */}
                <div className="p-3 bg-gradient-to-t from-green-50 to-white">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.label}
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Week 2 • Data Collection
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tools Used */}
      <Card variant="green">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Material preparation and programme implementation
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Photos from Week 4: Materials preparation, drama rehearsal, seeds
          packaging, and community engagement activities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            {
              num: 1,
              label: "",
              file: "01-clay-food-models-preparation.jfif",
            },
            {
              num: 2,
              label: "",
              file: "02-recipe-sheets-materials.jfif",
            },
            {
              num: 3,
              label: "",
              file: "03-community-notice-posters.jfif",
            },
            {
              num: 4,
              label: "",
              file: "04-seeds-packaging-distribution.jfif",
            },
            {
              num: 5,
              label: "",
              file: "05-drama-script-rehearsal.jfif",
            },
            {
              num: 6,
              label: "",
              file: "06-overall-materials-setup.jfif",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group"
            >
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden relative">
                  <img
                    src={`/assets/photos/activities/${item.file}`}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EImage not loaded%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  {/* Photo number badge */}
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.num}/6
                  </div>
                </div>

                {/* Caption */}
                <div className="p-3 bg-gradient-to-t from-green-50 to-white">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.label}
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Week 4 • Materials & Implementation
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Tools Used */}
      <Card variant="green">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Tools used to identify problems
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <MethodCard
            name="IPAQ Short Form"
            desc="Assessed physical activity levels — categorised participants as sedentary, irregularly active, or active"
          />
          <MethodCard
            name="Dietary habit assessment"
            desc="Sinhala questionnaire on frequency of consumption of protein sources and other food groups"
            link="https://docs.google.com/forms/d/e/1FAIpQLSdR9rfW-UfXaEVVkMnuNQekAUfetI1LqfvqAypLAm64JVH6kA/viewform?usp=publish-editor"
          />
          <MethodCard
            name="Socio-demographic questionnaire"
            desc="Collected age, sex, occupation, and household data to contextualise findings"
          />
          <MethodCard
            name="Anthropometric measurements"
            desc="Height, weight, waist & hip circumferences, and handgrip dynamometer measurements"
          />
          <MethodCard
            name="Key informant interviews"
            desc="Face-to-face discussions with the Sanwardrana Niladhari and Public Health Midwife"
          />
          <MethodCard
            name="Direct observations"
            desc="Community visits and observational assessments of daily dietary and activity patterns"
          />
        </div>
      </Card>

      {/* Edit Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic"
      >
        
      </motion.div>
    </>
  );
}
