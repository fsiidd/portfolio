import profileImg1 from "../assets/portfolio_pic.jpg";
import React from "react";
import FadeInWrapper from "./FadeInWrapper";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { shuffleArray } from "../lib/shuffleArray";
import { FaArrowDown } from "react-icons/fa";
import { LIGHT_COLORS } from "../lib/constants";

const About = () => {
  // eslint-disable-next-line
  const [colors, setColors] = React.useState([]);
  React.useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  const scrollToExperiences = () => {
    document.getElementById("experiences-section").scrollIntoView({
      behavior: "smooth",
      block: "start", // Align the Experiences section to the top of the viewport
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen lg:px-20 text-gray-900 dark:text-gray-200 transition duration-300 lg:mt-16">
      <FadeInWrapper>
        <div className="container max-w-6xl mx-auto py-16 rounded-lg">
          <RoughNotationGroup show={true}>
            {/* Wrapper Div */}
            <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
              {/* Text Section */}
              <div className="lg:w-2/3 mb-10 lg:mb-0">
                <h1 className="text-4xl font-bold leading-tight text-center lg:text-left">
                  Hey, I’m{" "}
                  <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Faryal
                  </span>{" "}
                  :)
                </h1>
                <div className=" mt-2 space-y-8 ">
                  {/* Highlighted Role */}
                  <div className="text-center lg:text-left font-semibold">
                    {" "}
                    <p className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 text-gray-900 dark:text-gray-200 px-6 py-3 rounded-lg shadow-md inline-block text-xs">
                      Incoming Software Engineer Intern at{" "}
                      <a
                        href="https://www.autodesk.com/"
                        className="text-indigo-600 font-medium hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition duration-300 ease-in-out hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Autodesk
                      </a>
                    </p>
                  </div>

                  {/* About Section */}
                  <p className="text-md">
                    I’m a Computer Science student at Toronto Metropolitan
                    University, and I love building software that makes a{" "}
                    <span className="font-semibold">real impact</span>. Over the
                    years, I’ve honed my skills in{" "}
                    <span className="font-semibold">
                      full-stack development
                    </span>
                    ,<span className="font-semibold"> web technologies</span>,
                    and{" "}
                    <span className="font-semibold">
                      optimizing system performance
                    </span>
                    .
                  </p>

                  <p className="text-md">
                    At{" "}
                    <a
                      href="https://www.intuit.com/"
                      className="text-indigo-600 font-medium hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition duration-300 ease-in-out hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Intuit
                    </a>
                    , I worked with high-traffic platforms like TurboTax and
                    QuickBooks, designing{" "}
                    <span className="font-semibold">
                      reusable web components
                    </span>{" "}
                    to improve user experience and streamline workflows.
                  </p>

                  <p className="text-md">
                    At{" "}
                    <a
                      href="https://monstrartity.com/"
                      className="text-indigo-600 font-medium hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition duration-300 ease-in-out hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      monstrARTity
                    </a>
                    , I improved{" "}
                    <span className="font-semibold">website performance</span>{" "}
                    by reducing load times and increasing traffic, making it
                    easier for users to discover and engage with artist
                    programs.
                  </p>

                  <p className="text-md">
                    I’ll be joining{" "}
                    <a
                      href="https://www.autodesk.com/"
                      className="text-indigo-600 font-medium hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition duration-300 ease-in-out hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Autodesk
                    </a>{" "}
                    as an{" "}
                    <span className="font-semibold">
                      Incoming Software Engineer Intern
                    </span>{" "}
                    on their Cloud Licensing Platform Team. I’ll be working on
                    backend development and cloud engineering, diving deeper
                    into scalable systems and distributed architectures.
                  </p>

                  {/* What I'm Up To Section */}
                  <p className="mt-4 text-md">
                    🚀 Looking for
                    <span className="font-semibold text-indigo-600 mx-1">
                      Fall 2025 internships
                    </span>
                    where I can create impactful software solutions.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/3 flex justify-center sm:w-2/3 md:2/3">
                <img
                  src={profileImg1}
                  alt="Faryal's Profile"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </RoughNotationGroup>
        </div>
      </FadeInWrapper>
      <RoughNotationGroup show={true}>
        <div className=" flex flex-col items-center">
          <RoughNotation type="box" order="3" color="purple">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Check out my experiences
            </p>
          </RoughNotation>

          <FaArrowDown
            onClick={scrollToExperiences}
            className="text-gray-700 dark:text-gray-300 text-2xl mt-2 animate-bounce cursor-pointer"
          />
        </div>
      </RoughNotationGroup>
    </div>
  );
};

export default About;
