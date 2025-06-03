export const Skills = () => {
  const skillCategories = [
    {
      category: "ML & Data Science",
      skills: [
        { name: "Machine Learning", color: "from-blue-500 to-cyan-500" },
        { name: "Statistical Modeling", color: "from-purple-500 to-purple-700" },
        { name: "Predictive Modeling", color: "from-indigo-500 to-indigo-700" },
        { name: "Feature Engineering", color: "from-blue-600 to-blue-800" },
        { name: "Time Series Analysis", color: "from-cyan-500 to-teal-500" }
      ]
    },
    {
      category: "Programming & ML Frameworks",
      skills: [
        { name: "Python", color: "from-green-500 to-green-700" },
        { name: "SQL", color: "from-blue-500 to-blue-700" },
        { name: "R", color: "from-red-500 to-red-700" },
        { name: "Java", color: "from-orange-500 to-red-500" },
        { name: "PyTorch", color: "from-orange-400 to-red-600" },
        { name: "TensorFlow", color: "from-blue-600 to-indigo-600" },
        { name: "Scikit-learn", color: "from-teal-500 to-teal-700" }
      ]
    },
    {
      category: "Data Engineering & Tools",
      skills: [
        { name: "Apache Spark", color: "from-orange-500 to-red-500" },
        { name: "Hadoop", color: "from-yellow-500 to-yellow-700" },
        { name: "Google BigQuery", color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", color: "from-blue-600 to-indigo-600" },
        { name: "MongoDB", color: "from-green-600 to-green-800" },
        { name: "MLFlow", color: "from-purple-500 to-purple-700" }
      ]
    },
    {
      category: "Visualization & Tools",
      skills: [
        { name: "Tableau", color: "from-blue-500 to-blue-700" },
        { name: "Power BI", color: "from-yellow-500 to-orange-500" },
        { name: "Matplotlib", color: "from-purple-400 to-purple-600" },
        { name: "Seaborn", color: "from-teal-500 to-teal-700" },
        { name: "GitHub", color: "from-gray-600 to-gray-800" },
        { name: "Docker", color: "from-blue-500 to-blue-700" }
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
            Comprehensive expertise in data science, machine learning, and software development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center pb-2 border-b border-gray-100">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${skill.color} transition-transform hover:scale-105 hover:shadow-md`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
