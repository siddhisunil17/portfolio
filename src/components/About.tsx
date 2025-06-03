import { GraduationCap, Brain, Database, Code, ChartBar } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Expertise in predictive modeling, classification, clustering, neural networks, and time series analysis"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      description: "Proficient in Python, SQL, R, Java, and ML frameworks like PyTorch, TensorFlow, and Scikit-learn"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Experience with Spark, Hadoop, BigQuery, PostgreSQL, MongoDB, and data pipeline development"
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Data Visualization",
      description: "Skilled in Tableau, Power BI, and creating executive dashboards for data-driven insights"
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
              I'm a Data Science and Software Engineering graduate student with extensive experience in biometric authentication, 
              cryptographic protocols, and machine learning. My expertise lies in building scalable ML pipelines, secure APIs, 
              and privacy-preserving systems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With experience at Retica Technologies and Accenture, I've developed strong skills in data analysis, 
              machine learning model development, and software engineering. I'm passionate about developing secure, 
              data-driven solutions for real-world applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I have a strong foundation in statistical learning, data intensive computing, and predictive modeling. 
              I'm always eager to tackle new challenges and collaborate on innovative projects that leverage data 
              science for meaningful impact.
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
