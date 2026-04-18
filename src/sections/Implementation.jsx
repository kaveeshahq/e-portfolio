import {
  SectionTitle,
  Card,
  StatCard,
  ProgrammeStep,
} from "../components/SharedComponents";

export default function Implementation() {
  return (
    <>
      <SectionTitle>Implementation of the intervention</SectionTitle>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
        <StatCard num="7 Apr" label="Programme date" />
        <StatCard num="10:00 AM" label="Start time" />
        <StatCard num="45–60" label="Duration (mins)" />
        <StatCard num="6" label="Group members" />
      </div>

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
      <div className="mt-8">
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
      </div>

      {/* Drama Practice Video */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Drama performance — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Drama practice session showing the opening performance that captured
          participants' attention and created engagement for the programme
        </p>

        {/* Video Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative bg-gray-900 aspect-video w-full">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Drama Performance Practice"
                aria-label="Drama performance practice video showing opening session performance"
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
                Drama Performance Practice
              </p>
              <p className="text-xs text-green-600 mt-2">
                Opening Session • Engagement Activity
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                💾 Video file format: MP4
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Notice Photo */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Community notice — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          A community poster distributed to the community to invite
          participation
        </p>
        <div className="max-w-md mx-auto">
          <div className="group">
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
          </div>
        </div>
      </div>

      {/* Recipe Sheets Photo */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Recipe sheets — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Take-home recipe cards featuring high-protein dishes prepared from
          affordable, locally available plant protein sources
        </p>
        <div className="max-w-md mx-auto">
          <div className="group">
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
          </div>
        </div>
      </div>

      {/* Seeds for Distribution Photo */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Seeds for distribution — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Protein-rich plant seeds packaged for distribution to community
          participants as a practical, sustainable take-home action
        </p>
        <div className="max-w-md mx-auto">
          <div className="group">
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
          </div>
        </div>
      </div>

      {/* Drama Script Document */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Drama script — Evidence
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          A drama script portraying relatable village-life scenarios showing the
          consequences of insufficient protein intake and sedentary lifestyle
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
      {/* <div className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic">
        Add photos of: drama performance, recipe guessing session, physical
        activity session, clay model game, feedback session, and programme
        video. Include exact number of community participants.
      </div> */}
    </>
  );
}
