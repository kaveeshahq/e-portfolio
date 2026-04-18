import { SectionTitle, Card, Badge } from "../components/SharedComponents";

export default function Intervention() {
  const materials = [
    {
      title: "Recipe sheets",
      desc: "Take-home recipe cards featuring high-protein dishes prepared from affordable, locally available plant protein sources.",
      variant: "green",
      image: "/assets/photos/intervention/03-recipe-sheets.png",
    },
    {
      title: "Seeds for distribution",
      desc: "Seeds of protein-rich plants selected for home growing. Distributed to every participant as a practical, sustainable follow-up action.",
      variant: "amber",
      image: "/assets/photos/intervention/02-seeds-for-distribution.jfif",
    },
    {
      title: "Feedback evaluation form",
      desc: "A dot-sticker feedback board designed to visually collect participant responses and assess overall satisfaction with the intervention.",
      variant: "amber",
      image: "/assets/photos/intervention/04-feedback-form.jpeg",
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

      {/* Drama Practice Video — Evidence of Planning */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Drama practice session — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Rehearsal and practice session showing the drama preparation for the
          opening performance
        </p>

        {/* Video Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative bg-gray-900 aspect-video w-full">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Drama Practice Session"
                aria-label="Drama practice session video showing rehearsal preparation"
              >
                <source
                  src="/assets/videos/programme/drama practice.mp4"
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
                Drama Practice Session
              </p>
              <p className="text-xs text-green-600 mt-2">
                Planning Phase • Rehearsal & Preparation
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                💾 Video file format: MP4
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Materials Prepared */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Materials prepared for the intervention
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {materials.map((material, idx) => (
            <div key={idx} className="group">
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="aspect-square bg-gray-100 overflow-hidden relative">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23e5e7eb' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3EImage not loaded%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Info */}
                <div
                  className={`p-4 bg-gradient-to-t from-${
                    material.variant === "green"
                      ? "green"
                      : material.variant === "teal"
                        ? "teal"
                        : "amber"
                  }-50 to-white`}
                >
                  <p className="text-sm font-medium text-gray-800 mb-2">
                    {material.title}
                  </p>
                  <p
                    className={`text-xs text-${
                      material.variant === "green"
                        ? "green"
                        : material.variant === "teal"
                          ? "teal"
                          : "amber"
                    }-600`}
                  >
                    {material.desc}
                  </p>
                  <Badge variant={material.variant} className="mt-3 text-xs">
                    Planning Evidence
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drama Script Download */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Drama script — Document
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Full drama script used in the intervention planning phase
        </p>
        <div className="max-w-md mx-auto">
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
        </div>
      </div>

      {/* Edit Note */}
      <div className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic">
        Planning Phase Complete — Shows what was prepared and planned for the
        intervention (3rd week).
      </div>
    </>
  );
}
