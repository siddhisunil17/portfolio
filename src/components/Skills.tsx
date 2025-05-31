
export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
        { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-green-700" },
        { name: "Python", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 70, color: "from-green-600 to-green-800" },
        { name: "PostgreSQL", level: 75, color: "from-blue-700 to-indigo-700" },
        { name: "Express.js", level: 80, color: "from-gray-600 to-gray-800" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 65, color: "from-yellow-500 to-orange-500" },
        { name: "Firebase", level: 75, color: "from-yellow-400 to-red-500" },
        { name: "Figma", level: 80, color: "from-purple-500 to-pink-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
