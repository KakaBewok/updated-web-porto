import { Calendar, GraduationCap, MapPin, School } from "lucide-react";
import { educationData } from "../data/data";

function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-cyan-200 relative overflow-hidden border-t-8 border-black"
    >
      {/* Bold geometric background shapes */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 border-8 border-black rotate-12 opacity-40"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 border-8 border-black -rotate-6 opacity-40"></div> */}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black uppercase mb-3 tracking-tight">
            Education
          </h2>
          <p className="text-black max-w-2xl mx-auto text-base md:text-lg font-bold">
            My educational background and learning journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-2 bg-black"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-7 top-8 w-8 h-8 bg-lime-400 border-4 border-black transform -translate-x-1/2 z-10"></div>

                {/* Education Card */}
                <div className="md:ml-20 bg-white border-6 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200">
                  {/* Card Header with Icons */}
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <div className="flex-1">
                      {/* Degree with icon */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="shrink-0 w-14 h-14 bg-black border-4 border-black flex items-center justify-center">
                          <GraduationCap className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-black text-black leading-tight mb-1 uppercase">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-black italic font-bold">
                            {edu.field}
                          </p>
                        </div>
                      </div>

                      {/* Institution */}
                      <div className="flex items-center gap-3 mb-3 pl-16">
                        <School className="w-5 h-5 text-black shrink-0" />
                        <p className="text-base md:text-lg font-black text-black">
                          {edu.institution}
                        </p>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-3 pl-16">
                        <MapPin className="w-4 h-4 text-black shrink-0" />
                        <p className="text-sm text-black font-bold">{edu.location}</p>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="w-fit inline-flex items-center gap-2 px-4 py-2 bg-pink-300 border-4 border-black font-black">
                      <Calendar className="w-4 h-4 text-black" />
                      <span className="text-sm font-black text-black uppercase">
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
