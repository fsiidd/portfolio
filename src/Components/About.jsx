import profileImg1 from "../assets/profileImg1.jpg";
import profileImg2 from "../assets/profileImg2.jpg";
import profileImg3 from "../assets/profileImg3.jpg";
import React from "react";
import { RainbowHighlight } from "./RainbowHighlight";
import { shuffleArray } from "../lib/shuffleArray";
import { LIGHT_COLORS } from "../lib/constants";
import { RoughNotationGroup } from "react-rough-notation";

const About = () => {
  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <div className="container mx-auto mt-40 py-10 rounded-lg">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
        {/* Text Section */}
        <div className="lg:flex-1 lg:pr-10">
          <RoughNotationGroup show={true}>
            <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl mb-4">
              Hi there, I'm{" "}
              <RainbowHighlight color={colors[1]}>Faryal</RainbowHighlight> 👋
            </h1>
            <div className="mt-6 text-gray-800 space-y-4">
              <p className="text-xl mb-4">
                I'm currently in my 3rd year studying{" "}
                <RainbowHighlight color={colors[2]}>
                  Computer Science
                </RainbowHighlight>{" "}
                at Toronto Metropolitan University. As an aspiring Software
                Engineer, my passion lies in:
              </p>
              <ul className="list-disc list-inside pl-5 mb-4 text-xl">
                <li>Developing impactful technological solutions</li>
                <li>Creating innovative and user-friendly applications</li>
                <li>Continuously learning and improving my skills</li>
              </ul>
              <p className="text-xl mb-4">
                Previously, I worked at{" "}
                <a
                  href="https://www.intuit.com/ca/"
                  className="text-gray-600 underline font-bold hover:text-blue-400"
                >
                  <RainbowHighlight color={colors[3]}>Intuit</RainbowHighlight>
                </a>{" "}
                as a Software Developer Intern, where I developed and maintained
                reusable web components integral to the functionality of
                multiple high-traffic products.
              </p>
              <p className="text-xl mb-4">
                At{" "}
                <a
                  href="https://monstrartity.com/"
                  className="text-gray-600 underline font-bold hover:text-blue-400"
                >
                  <RainbowHighlight color={colors[1]}>
                    monstrARTity
                  </RainbowHighlight>
                </a>
                , I leveraged several front-end technologies to architect and
                optimize high-performance web pages tailored for their diverse
                artist programs.
              </p>
              <p className="text-xl">
                I'm currently seeking{" "}
                <RainbowHighlight color={colors[2]}>
                  <strong>Summer 2025</strong>
                </RainbowHighlight>{" "}
                and{" "}
                <RainbowHighlight color={colors[3]}>
                  <strong>Fall 2025</strong>
                </RainbowHighlight>{" "}
                internships! I’m always open to new opportunities and
                interesting conversations.
              </p>
              <p className="text-xl font-bold underline hover:text-blue-400">
                <a href="mailto:faryall.siddiquii@gmail.com">
                  Let's get in touch!
                </a>
              </p>
            </div>
          </RoughNotationGroup>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row lg:items-center lg:justify-center">
          {/* Main Profile Picture */}
          <div className="flex-shrink-0 ">
            <img
              src={profileImg1}
              alt="Faryal's Profile"
              className="rounded-full shadow-lg w-72 h-72 object-cover hover:scale-110 transition-transform"
            />
          </div>
          {/* Secondary Images */}
          <div className="flex flex-col space-y-4 ">
            <img
              src={profileImg2}
              alt="Faryal infront of Intuit"
              className="rounded-full shadow-md w-48 h-48 object-cover hover:scale-110 transition-transform"
            />
            <img
              src={profileImg3}
              alt="Toronto at night"
              className="rounded-full shadow-md w-48 h-48 object-cover hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
