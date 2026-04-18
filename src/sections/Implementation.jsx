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

      {/* Step by Step - Only descriptions, videos below each */}
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-6">
          What happened on the day — Evidence
        </h3>

        {/* Step 1: Drama Performance */}
        <div className="mb-12">
          <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">
              1
            </span>
            Drama performance — opening the session
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The session was opened with the drama portraying a relatable
            scenario from everyday Mediriwila village life. The drama depicted
            how a family's low protein intake and sedentary habits led to health
            problems. It immediately captured participants' attention and
            created engagement for the rest of the programme.
          </p>

          {/* Video */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative bg-gray-900 aspect-video w-full">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  title="Drama Performance"
                  aria-label="Drama performance video showing opening session"
                >
                  <source
                    src="/assets/videos/programme/drama-doing.mp4"
                    type="video/mp4"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                    Your browser does not support the video tag.
                  </p>
                </video>
              </div>
              <div className="p-3 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
                <p className="text-xs font-medium text-gray-800">
                  Drama Performance
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Opening Activity • Engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Recipe Guessing */}
        <div className="mb-12">
          <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">
              2
            </span>
            Recipe guessing session
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Group members presented actual foods that had been prepared in
            advance and invited community participants to smell, observe, and
            guess the dishes and their key ingredients. This interactive tasting
            activity introduced high-protein plant-based recipes in an
            enjoyable, hands-on format.
          </p>

          {/* Video */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative bg-gray-900 aspect-video w-full">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  title="Recipe Guessing Session"
                  aria-label="Recipe guessing session video"
                >
                  <source
                    src="/assets/videos/programme/recipi guession session .mp4"
                    type="video/mp4"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                    Your browser does not support the video tag.
                  </p>
                </video>
              </div>
              <div className="p-3 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
                <p className="text-xs font-medium text-gray-800">
                  Recipe Guessing Session
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Interactive Tasting • High-Protein Recipes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Physical Activity */}
        <div className="mb-12">
          <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">
              3
            </span>
            Physical activity session
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            A structured physical activity session was conducted, specially
            designed for adults of various fitness levels. Simple, low-impact
            exercises were demonstrated and participants were invited to join
            in. The session showed that physical activity can be done
            comfortably in everyday village settings.
          </p>

          {/* Video */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative bg-gray-900 aspect-video w-full">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  title="Physical Activity Session"
                  aria-label="Physical activity session video"
                >
                  <source
                    src="/assets/videos/programme/physical_activity_session.mp4"
                    type="video/mp4"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                    Your browser does not support the video tag.
                  </p>
                </video>
              </div>
              <div className="p-3 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
                <p className="text-xs font-medium text-gray-800">
                  Physical Activity Session
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Adult-Friendly Exercises • Community Session
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Clay Model Game */}
        <div className="mb-12">
          <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">
              4
            </span>
            Clay food model identification game
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            The handmade clay food models were used in an interactive
            identification game. Community members identified which models
            represented protein-rich foods and categorised them. Community
            members engaged enthusiastically with many correctly identifying
            plant protein sources they had not recognised before.
          </p>

          {/* Video */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative bg-gray-900 aspect-video w-full">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  title="Clay Model Game"
                  aria-label="Clay food model identification game video"
                >
                  <source
                    src="/assets/videos/programme/clay food model identification session.mp4"
                    type="video/mp4"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                    Your browser does not support the video tag.
                  </p>
                </video>
              </div>
              <div className="p-3 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
                <p className="text-xs font-medium text-gray-800">
                  Clay Food Model Game
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Interactive Activity • Protein Knowledge
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Distribution */}
        <div className="mb-12">
          <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">
              5
            </span>
            Distribution of seeds and recipe sheets
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Seeds of protein-rich plants were distributed to each participant to
            encourage home growing as a practical, sustainable long-term
            strategy. Recipe sheets featuring affordable, high-protein dishes
            using locally available ingredients were also distributed as
            take-home resources.
          </p>
        </div>

        {/* Step 6: Feedback */}
        <div className="mb-12">
          <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm">
              6
            </span>
            Feedback session
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            A structured feedback session was conducted using a dot-sticker
            board, where participants placed stickers to indicate their
            responses and level of understanding. Verbal feedback was also
            invited. Participants gave positive feedback about the programme's
            content, drama, and interactive activities.
          </p>

          {/* Video */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative bg-gray-900 aspect-video w-full">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  title="Feedback Session"
                  aria-label="Feedback session video"
                >
                  <source
                    src="/assets/videos/programme/feeedback.mp4"
                    type="video/mp4"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-sm bg-gray-900">
                    Your browser does not support the video tag.
                  </p>
                </video>
              </div>
              <div className="p-3 bg-gradient-to-t from-green-50 to-white border-t border-green-100">
                <p className="text-xs font-medium text-gray-800">
                  Feedback Session
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Structured Evaluation • Participant Feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Note */}
      {/* <div className="mt-6 bg-amber-100 border-l-4 border-amber-600 rounded-r-lg p-3 text-xs text-amber-700 italic">
        Implementation Phase Complete — Shows what actually happened during the
        programme execution (5th week).
      </div> */}
    </>
  );
}
