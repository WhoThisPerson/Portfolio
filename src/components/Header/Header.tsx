import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

interface HeaderProps {
    pageToggle: "About" | "Projects" | "Resume" | "Contact";
    setPageToggle: (page: HeaderProps["pageToggle"]) => void;
}

const Header = ({ pageToggle, setPageToggle }: HeaderProps) => {

    const navLink = (page: HeaderProps["pageToggle"]) =>
        `transition-colors duration-200 ${
            pageToggle === page
                ? "text-emerald-500"
                : "hover:text-blue"
        }`;

    const iconLink = "flex items-center space-x-1 hover:text-blue";

    return (
        <header className="bg-gray-dark text-gray-light shadow-md px-4 py-3 fixed top-0 w-full z-50 font-bold">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">

                <ul className="flex space-x-6 text-lg">
                    <li>
                        <button
                            onClick={() => setPageToggle("About")}
                            className={navLink("About")}
                        >
                            About
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => setPageToggle("Projects")}
                            className={navLink("Projects")}
                        >
                            Projects
                        </button>
                    </li>

                    {/* <li>
                        <button
                            onClick={() => setPageToggle("Contact")}
                            className={navLink("Contact")}
                        >
                            Contact
                        </button>
                    </li> */}
                </ul>

                <ul className="flex space-x-4 text-lg">
                    <li>
                        <button
                            onClick={() => setPageToggle("Resume")}
                            className={`${iconLink} ${navLink("Resume")}`}
                        >
                            <HiDocumentText />
                            <span>Resume</span>
                        </button>
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