import { SectionTitle, Card, Badge } from "../components/SharedComponents";

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
      <div className="mt-6">
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
      </div>

      {/* Programme Components */}
      <div className="mt-6">
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
      </div>

      {/* Physical Activity Session Video */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Physical activity session — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          A structured, adult-friendly exercise session demonstrating practical
          physical activity suitable for community settings
        </p>

        {/* Video Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative bg-gray-900 aspect-video w-full">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Physical Activity Session"
                aria-label="Physical activity session video demonstrating structured, adult-friendly exercises"
              >
                <source
                  src="/assets/videos/programme/physical_activity_session.mp4"
                  type="video/mp4"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                  Your browser does not support the video tag. Please update
                  your browser to watch this video.
                </p>
              </video>
            </div>

            {/* Video Info */}
            <div className="p-4 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
              <p className="text-sm font-medium text-gray-800">
                Physical Activity Session
              </p>
              <p className="text-xs text-green-600 mt-2">
                Adult-Friendly Exercises • Community Session
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                💾 Video file size: 2.78 MB • Format: MP4
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Guessing Session Video */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Recipe guessing session — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          An interactive tasting activity using real foods to introduce
          high-protein plant-based recipes in an enjoyable, hands-on format
        </p>

        {/* Video Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative bg-gray-900 aspect-video w-full">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Recipe Guessing Session"
                aria-label="Recipe guessing session video featuring interactive tasting activity with high-protein plant-based foods"
              >
                <source
                  src="/assets/videos/programme/recipi guession session .mp4"
                  type="video/mp4"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                  Your browser does not support the video tag. Please update
                  your browser to watch this video.
                </p>
              </video>
            </div>

            {/* Video Info */}
            <div className="p-4 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
              <p className="text-sm font-medium text-gray-800">
                Recipe Guessing Session
              </p>
              <p className="text-xs text-green-600 mt-2">
                Interactive Tasting Activity • High-Protein Recipes
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                💾 Video file format: MP4
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Clay Food Model Identification Game Video */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Clay food model identification game — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          An interactive game using handmade clay food models to assess
          knowledge of protein sources and engage community members
        </p>

        {/* Video Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative bg-gray-900 aspect-video w-full">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Clay Food Model Identification Game"
                aria-label="Clay food model identification game video showing interactive activity to assess protein source knowledge"
              >
                <source
                  src="/assets/videos/programme/clay food model identification session.mp4"
                  type="video/mp4"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                  Your browser does not support the video tag. Please update
                  your browser to watch this video.
                </p>
              </video>
            </div>

            {/* Video Info */}
            <div className="p-4 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
              <p className="text-sm font-medium text-gray-800">
                Clay Food Model Identification Game
              </p>
              <p className="text-xs text-green-600 mt-2">
                Interactive Activity • Protein Source Knowledge
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                💾 Video file format: MP4
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Session Video */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Feedback session — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          A structured evaluation session using a dot-sticker feedback board to
          collect participant responses and assess understanding
        </p>

        {/* Video Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative bg-gray-900 aspect-video w-full">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Feedback Session"
                aria-label="Feedback session video showing structured evaluation using dot-sticker board for participant understanding assessment"
              >
                <source
                  src="/assets/videos/programme/feeedback.mp4"
                  type="video/mp4"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                  Your browser does not support the video tag. Please update
                  your browser to watch this video.
                </p>
              </video>
            </div>

            {/* Video Info */}
            <div className="p-4 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
              <p className="text-sm font-medium text-gray-800">
                Feedback Session
              </p>
              <p className="text-xs text-green-600 mt-2">
                Structured Evaluation • Participant Feedback
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                💾 Video file format: MP4
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Evaluation Form Photo */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Feedback evaluation form — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          A dot-sticker feedback board designed to visually collect participant
          responses and assess overall satisfaction with the intervention
        </p>
        <div className="max-w-md mx-auto">
          <div className="group">
            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden relative">
                <img
                  src="/assets/photos/intervention/04-feedback-form.jpeg"
                  alt="Feedback Evaluation Form"
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
                  Feedback Evaluation Form
                </p>
                <p className="text-xs text-amber-600 mt-2">
                  Dot-Sticker Feedback Board • Participant Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Materials */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Materials prepared for the intervention
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {materials.map((material, idx) => (
            <div key={idx} className="card hover:shadow-md transition-shadow">
              <div className="mb-2">
                <Badge variant={material.variant}>{material.title}</Badge>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                {material.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Note */}
      {/* <div className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic">
        Attach photos of your clay models, community notice poster, and any
        other materials you prepared in this section.
      </div> */}
    </>
  );
}
