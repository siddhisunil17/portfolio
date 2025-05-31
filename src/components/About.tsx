
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

  const education = [
    {
      university: "University of Connecticut",
      degree: "Master of Science in Data Science",
      duration: "Aug 2024 - Present",
      gpa: "3.78/4.0",
      location: "Storrs, CT",
      logo: "https://logos-world.net/wp-content/uploads/2023/01/University-of-Connecticut-Logo.png"
    },
    {
      university: "University of Mumbai",
      degree: "Bachelor of Engineering in Electronics Engineering", 
      duration: "Aug 2017 - Jul 2021",
      gpa: "7.78/10",
      location: "Mumbai, India",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/University_of_Mumbai_Logo.svg/1200px-University_of_Mumbai_Logo.svg.png"
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

            {/* Education Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-start gap-4">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.university} logo`}
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">{edu.university}</h4>
                        <p className="text-blue-600 font-semibold">{edu.degree}</p>
                        <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                          <span className="text-gray-600">{edu.duration}</span>
                          <span className="text-gray-600">{edu.location}</span>
                        </div>
                        <p className="text-green-600 font-semibold mt-1">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
