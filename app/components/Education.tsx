import { Calendar, GraduationCap, MapPin, School } from "lucide-react";
import { educationData } from "../data/data";

function Education() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-3">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            My educational background and learning journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - with linear */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-8.25 top-8 w-5 h-5 bg-linear-to-r from-blue-400 to-purple-400 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300 z-10">
                  <span className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></span>
                </div>

                {/* Education Card */}
                <div className="md:ml-20 bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Card Header with Icons */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <div className="flex-1">
                      {/* Degree with icon and linear background */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-gray-600 italic">
                            {edu.field}
                          </p>
                        </div>
                      </div>

                      {/* Institution */}
                      <div className="flex items-center gap-3 mb-3 pl-16">
                        <School className="w-5 h-5 text-slate-700 shrink-0" />
                        <p className="text-base md:text-lg font-semibold text-gray-800">
                          {edu.institution}
                        </p>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-3 pl-16">
                        <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                        <p className="text-sm text-gray-600">{edu.location}</p>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="w-fit inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full shadow-sm">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">
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
