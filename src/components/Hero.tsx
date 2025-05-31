
import { ArrowDown, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Mohit Bhoir
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Data Science Graduate & Software Development Engineer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Graduate student in Data Science with hands-on experience in AI/ML, data pipelines, algorithm design, and dashboarding. 
            Known for strong attention to detail and analytical thinking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-200 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto w-64 h-64 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Mohit Bhoir"
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
