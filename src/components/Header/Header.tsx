import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const Header = () => {

  const navLink = "hover:text-blue";

  const iconLink = "flex items-center space-x-1 hover:text-blue";

  return (
    <header className="bg-gray-dark text-gray-light shadow-md px-4 py-3 fixed top-0 w-full z-50 font-bold">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">

        <ul className="flex space-x-6 text-lg">
          <li><a href="#About" className={navLink}>About</a></li>
          <li><a href="#Education" className={navLink}>Education</a></li>
          <li><a href="#Projects" className={navLink}>Projects</a></li>
          <li><a href="#Experience" className={navLink}>Experience</a></li>
        </ul>

        <ul className="flex space-x-4 text-lg">
        <li>
          <a
            href="https://docs.google.com/document/d/1JqgTJTaxdq7ZYWogMZGDSY903alMzro75JrulJvKc1M/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={iconLink}
          >
            <HiDocumentText />
            <span>Resume</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/WhoThisPerson"
            target="_blank"
            rel="noopener noreferrer"
            className={iconLink}
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
            className={iconLink}
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
