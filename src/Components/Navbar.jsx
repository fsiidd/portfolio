import React, { useState, useEffect } from "react";
import { FaRegMoon, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-opacity-80 bg-gray-200 dark:bg-gray-800 dark:bg-opacity-80 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-sm font-bold font-sans sm:text-2xl text-gray-900 dark:text-gray-100">
              Faryal Siddiqui
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a
              href="/"
              className="text-sm sm:text-lg hover:text-gray-500 dark:hover:text-gray-300 font-semibold text-gray-900 dark:text-gray-100"
            >
              About
            </a>
            <a
              href="/Faryal_Siddiqui_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-lg hover:text-gray-500 dark:hover:text-gray-300 font-semibold text-gray-900 dark:text-gray-100"
            >
              Resume
            </a>
            <a
              href="https://github.com/fsiidd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              <FaGithub className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900 dark:text-gray-100" />
            </a>
            <a
              href="https://www.linkedin.com/in/faryalsiddiqui/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900 dark:text-gray-100" />
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none"
            >
              {darkMode ? (
                <FaMoon className="text-gray-900 dark:text-gray-100 text-lg" />
              ) : (
                <FaRegMoon className="text-gray-900 dark:text-gray-100 text-lg" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
