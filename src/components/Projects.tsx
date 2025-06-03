import { ExternalLink, Github } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

export const Projects = () => {
  const projects = [
    {
      title: "Handwritten Digit Classification Pipeline",
      description: "Developed an end-to-end machine learning pipeline for handwritten digit recognition using the MNIST dataset. Achieved 99% accuracy with XGBoost and Random Forest, leveraging SQL-based data transformation, feature engineering, and PCA for dimensionality reduction. Deployed a real-time Streamlit app with Docker and MLFlow integration.",
      image: "images/projects/digit-recognition.png",
      tech: ["Logistic Regression", "Random Forest", "XGBoost", "MLFlow", "Docker", "Streamlit"],
      github: "https://github.com/siddhisunil17/digit-recognition",
      live: "#",
      featured: true
    },
    {
      title: "Short-Term Temperature Forecasting",
      description: "Created and optimized a hybrid ARIMA-LSTM model to forecast short-term temperature fluctuations across 35 U.S. cities, achieving RMSE < 0.03 through advanced time series analysis. Supported data-driven decision-making in agriculture, energy, and urban development.",
      image: "images/projects/temperature-forecast.png",
      tech: ["R", "ARIMA", "LSTM", "Time Series", "Statistical Analysis"],
      github: "https://github.com/siddhisunil17/temperature-forecast",
      live: "#",
      featured: true
    },
    {
      title: "Caption Bot with Assistive Voice",
      description: "Designed and deployed an interactive image captioning system combining CNN (ResNet-50) and LSTM models, achieving 95% caption accuracy through effective model training and evaluation. Integrated assistive voice API to enhance accessibility for visually impaired users.",
      image: "images/projects/caption-bot.png",
      tech: ["CNN", "LSTM", "Flask", "ResNet-50", "API Integration"],
      github: "https://github.com/siddhisunil17/caption-bot",
      live: "#",
      featured: false
    },
    {
      title: "Personalized Tourism Recommender",
      description: "Constructed a rule-based recommendation engine with AI-driven chatbot integration via Dialogflow, delivering personalized travel suggestions. Increased user engagement by 30% through dynamic UI design, API-based data integration, and cloud functionalities.",
      image: "images/projects/tourism-recommender.png",
      tech: ["Django", "Dialogflow", "API Integration", "Machine Learning", "Cloud Computing"],
      github: "https://github.com/siddhisunil17/tourism-recommender",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing data science, machine learning, and software development skills
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden lg:grid lg:grid-cols-2 h-[500px]"
            >
              <div className="relative overflow-hidden h-full">
                <img
                  src={project.image.startsWith('http') ? project.image : getAssetPath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github className="text-blue-600" size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink className="text-blue-600" size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
