import { ArrowDown, Download } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-50 via-white to-blue-50 px-4">
      <div className="text-center">
        <div className="mb-8">
          <img
            src={getAssetPath("images/Photo1.jpg")}
            alt="Siddhi Nalawade"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-600 shadow-xl"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Siddhi Nalawade
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Data Science and Software Engineering graduate student with expertise in
          biometric authentication, machine learning, and secure API development.
          Passionate about developing data-driven solutions for real-world
          applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            View My Work
            <ArrowDown
              size={20}
              className="group-hover:translate-y-1 transition-transform duration-200"
            />
          </a>
          <a
            href={getAssetPath("resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-200 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
