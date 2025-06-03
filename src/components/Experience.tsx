import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer / Data Science Intern",
      company: "Retica Technologies (CosmosGenerate, Inc.)",
      location: "Remote / New York, USA",
      duration: "May 2025 - Present",
      type: "Internship",
      logo: "/images/logos/retica.png",
      achievements: [
        "Developed and optimized biometric authentication APIs using secure, scalable prototypes",
        "Analyzed biometric data and supported cryptographic protocol research to improve match precision",
        "Engineered privacy-preserving techniques including data fragmentation and distribution",
        "Collaborated cross-functionally on API integrations and identity verification technologies"
      ]
    },
    {
      title: "Software Analyst",
      company: "Accenture Solution PVT.LTD",
      location: "Mumbai, India",
      duration: "Dec 2021 - Jul 2024",
      type: "Full-time",
      logo: "/images/logos/accenture.png",
      achievements: [
        "Analyzed large datasets using SQL in Oracle SQL Developer for actionable business insights",
        "Optimized data workflows with Shell scripting and UNIX commands, improving efficiency by 15%",
        "Improved data quality and integrity by 20% through rigorous validation checks",
        "Automated incident tracking in ServiceNow, reducing resolution time by 25%"
      ]
    },
    {
      title: "Data Science Intern",
      company: "Internship Program",
      location: "Mumbai, India",
      duration: "Jun 2020 - Aug 2020",
      type: "Internship",
      logo: "/images/logos/intern.png",
      achievements: [
        "Developed classification and regression models using Python for predictive analytics",
        "Engineered a K-NN-based Heart Disease Classifier with supervised learning techniques",
        "Implemented advanced data preprocessing on large datasets for disease risk prediction"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience in software development, data science, and machine learning
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-gray-200 hidden md:block"></div>
              )}
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex items-start gap-4 mb-4 lg:mb-0">
                        <img 
                          src={exp.logo.startsWith('http') ? exp.logo : getAssetPath(exp.logo)} 
                          alt={`${exp.company} logo`}
                          className="w-24 h-16 object-contain rounded-lg bg-white p-2 border border-gray-200"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                          <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end text-gray-600">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
