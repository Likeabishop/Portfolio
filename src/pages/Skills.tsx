import { Code2 } from "lucide-react";

const Skills = () => {

    const skills = [
        { name: 'React', level: 70, icon: Code2 },
        { name: 'TypeScript', level: 65, icon: Code2 },
        { name: 'Spring Boot', level: 50, icon: Code2 },
        { name: 'Java', level: 75, icon: Code2 },
        { name: 'TailwindCSS', level: 65, icon: Code2 },
        { name: 'SQL', level: 70, icon: Code2 },
        { name: 'Data Structures And Algorithms', level: 70, icon: Code2 },
    ];

    return (
        <section id="skills" className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center mb-3">
                <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 inline-block">
                {skill.level}% Proficiency
              </span>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Skills;