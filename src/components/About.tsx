
import { GraduationCap, Brain, Database, Code } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "MS in Data Science (UConn) - GPA: 3.78/4.0, BE in Electronics Engineering"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Expertise", 
      description: "Machine Learning, Deep Learning, NLP, Classification, Regression, Time-Series Forecasting"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Data pipelines, ETL processes, PostgreSQL, MongoDB, Power BI dashboards"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Development",
      description: "Python, R, SQL, JavaScript, automation tools, API testing"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a graduate student in Data Science at the University of Connecticut with hands-on experience 
              in AI/ML, data pipelines, algorithm design, and dashboarding. I have over 3 years of professional 
              experience as a Software Development Engineer at Amdocs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My expertise spans machine learning, deep learning, natural language processing, and data mining. 
              I'm passionate about improving data quality and operational efficiency through machine learning, 
              cloud computing, and statistics.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Known for strong attention to detail and analytical thinking, I'm an excellent communicator 
              and team collaborator, seeking to leverage my background to support impactful, data-driven decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
