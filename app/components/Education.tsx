import { educationData } from "../data/data";

function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-linear-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full filter blur-3xl opacity-30 -z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-3">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-md md:text-lg">
            My educational background and learning journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-8.25 top-8 w-5 h-5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300 z-10">
                  <span className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></span>
                </div>

                {/* Education Card */}
                <div className="md:ml-20 bg-white border border-gray-100 hover:border-gray-200 rounded-md p-6 md:p-8 shadow-lg hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-md md:text-md text-gray-900 font-semibold flex items-center gap-2 mb-2">
                            {edu.institution}
                          </p>
                          <p className="text-xs md:text-sm text-gray-500 flex items-center">
                            {edu.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-fit inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-slate-50 to-slate-100 border border-blue-100 rounded-full">
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs md:text-sm font-semibold text-gray-700">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Education;
