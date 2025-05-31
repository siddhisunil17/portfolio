
export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "R", level: 85, color: "from-blue-600 to-blue-800" },
        { name: "SQL", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Java", level: 80, color: "from-red-500 to-red-700" },
        { name: "JavaScript", level: 75, color: "from-yellow-400 to-yellow-600" }
      ]
    },
    {
      category: "Libraries/Frameworks",
      skills: [
        { name: "TensorFlow", level: 85, color: "from-orange-500 to-orange-700" },
        { name: "PyTorch", level: 80, color: "from-red-500 to-red-700" },
        { name: "Scikit-Learn", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "Pandas", level: 95, color: "from-purple-500 to-purple-700" },
        { name: "Flask", level: 75, color: "from-gray-600 to-gray-800" }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 85, color: "from-blue-700 to-indigo-700" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-800" },
        { name: "Power BI", level: 90, color: "from-yellow-500 to-orange-500" },
        { name: "Tableau", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 70, color: "from-orange-400 to-orange-600" }
      ]
    },
    {
      category: "AI/ML Specializations",
      skills: [
        { name: "Machine Learning", level: 90, color: "from-purple-500 to-purple-700" },
        { name: "Deep Learning", level: 85, color: "from-indigo-500 to-indigo-700" },
        { name: "NLP", level: 80, color: "from-green-500 to-green-700" },
        { name: "Time Series", level: 75, color: "from-cyan-500 to-cyan-700" },
        { name: "Data Mining", level: 85, color: "from-pink-500 to-pink-700" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across data science, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
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
