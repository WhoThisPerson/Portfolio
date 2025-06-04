import React, {useState, useEffect} from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {

  const [pageMode, setPageMode] = useState(false);

  useEffect(() => {
    if (pageMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  }, [pageMode]);

  const togglePageMode = () => setPageMode(!pageMode);

  return (
    <header className="bg-white dark:bg-gray text-black dark:text-white shadow-md px-4 py-3 fixed top-0 w-full z-50 font-bold">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">

        <ul className="flex space-x-6 text-sm">
          <li><a href="#About" className="hover:text-blue-500">About</a></li>
          <li><a href="#Education" className="hover:text-blue-500">Education</a></li>
          <li><a href="#Projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#Experience" className="hover:text-blue-500">Experience</a></li>
        </ul>

        <ul className="flex space-x-4 text-lg">
        <li>
          <a
            href="https://github.com/WhoThisPerson"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-blue-500"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/qirongwu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-blue-500"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
