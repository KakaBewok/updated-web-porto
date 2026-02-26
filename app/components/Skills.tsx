import { skillCategories } from "../data/data";

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-sm tracking-widest text-text-tertiary uppercase mb-4">
          Toolkit
        </p>
        <div className="w-12 h-px bg-border-strong mb-6" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-4 md:mb-0">
            Skills & Technologies
          </h2>
          <p className="text-text-secondary text-sm max-w-sm">
            Tools and technologies I use to bring products to life.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-sm tracking-widest text-text-tertiary uppercase font-medium">
                {category.title}
              </h3>
              <div className="space-y-0">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3.5 border-b border-border group"
                  >
                    <span className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors">
                      {skill}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
