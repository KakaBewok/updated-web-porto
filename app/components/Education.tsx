import { educationData } from "../data/data";

function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-linear-to-br from-gray-100 to-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-12 text-center">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index: number) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-4 border-gray-300 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-5 h-5 bg-linear-to-r from-gray-600 to-gray-500 rounded-full transform -translate-x-3 shadow-xs"></div>

              <div className="bg-white p-5 rounded-xl shadow-xs hover:shadow-xs transition-shadow border border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.institution}
                  </h3>
                  <p className="w-fit text-xs md:sm font-medium text-gray-700 bg-gray-200 px-3 py-1 rounded-full mt-1 md:mt-0">
                    {edu.period}
                  </p>
                </div>
                <p className="text-md md:text-lg text-gray-500 mb-1 ">
                  {edu.degree}
                </p>
                <p className="text-xs text-gray-500">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
