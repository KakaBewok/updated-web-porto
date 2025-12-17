import { educationData } from "../data/data";

function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-12 text-center">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu: any, index: number) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-4 border-gray-400 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-6 h-6 bg-linear-to-r from-gray-800 to-gray-700 rounded-full transform -translate-x-2.75 shadow-lg"></div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.institution}
                  </h3>
                  <span className="text-sm font-medium text-gray-700 bg-gray-200 px-3 py-1 rounded-full mt-1 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-1 font-medium">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-500">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
