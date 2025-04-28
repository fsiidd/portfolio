import React from "react";
import intuit_logo from "../assets/intuit_logo.jpeg";
import autodesk_logo from "../assets/autodesk_logo.jpeg";
import monstrartity_logo from "../assets/monstrartity_logo.jpeg";

const Experiences = () => {
  const experiences = [
    {
      company: "Autodesk - Software Engineer Intern",
      logo: autodesk_logo,
      dates: "May 2025",
      description:
        "Incoming SWE Intern on the Cloud Licensing Platform Team. Working on the cloud licensing platform for Autodesk's products.",
    },
    {
      company: "Intuit - Software Engineer Intern",
      logo: intuit_logo,
      dates: "Jan 2024 - Aug 2024",
      description:
        "Worked on Intuit's Design Systems Team, focusing on the Product Development Web Team. Built reusable web components, drove a Figma-to-code proof of concept, tackled tickets to enhance design consistency, and optimized CI/CD pipelines for seamless development and deployment.",
    },
    {
      company: "monstrARTity - Web Developer",
      logo: monstrartity_logo,
      dates: "Oct 2022 - Apr 2024",
      description:
        "Worked on making the website faster and more user-friendly. Reduced load times, boosted traffic by over 10k users, and added secure payment integration for artist programs. Focused on improving performance and ensuring users had a smooth experience exploring and booking programs. Fun mix of creativity and optimization!",
    },
  ];

  return (
    <div
      id="experiences-section"
      className="flex flex-col py-16  text-gray-900 dark:text-gray-200"
    >
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl font-bold mb-8 ">
        where i've been!
      </span>
      <div className="max-w-6xl w-full space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-start space-x-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300"
          >
            {/* Logo Section */}
            <div className="flex-shrink-0 relative ">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="h-16 w-16 rounded-full"
              />
            </div>

            {/* Content Section */}
            <div>
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.dates}
              </p>
              <p className="mt-2 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
