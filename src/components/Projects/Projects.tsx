import { useEffect, useState } from "react";
import * as GitHubService from "../../services/GitHubService";

const Projects = () => {

    const projectInfo = [
        {
            name: "Chatbot That Remembers You",
            description: "AI Chatbot with ability to remember facts from user conversations. Uses vector embeddings and pgvector cosine similarity search to provide relevant user context",
            techStack: "TypeScript, Next.js, PostgresSQL, pgvector, Vercel AI SDK",
            link: "https://github.com/WhoThisPerson/chatbot-that-remembers-you",
        },
        {
            name: "IBM DevOps and Software Engineering Capstone Project",
            description: "Application that extends an account microservice that manages customer data for a mock-ecommerce platform.",
            techStack: "Python, Flask, Kubernetes, Docker, PostgreSQL",
            link: "https://github.com/WhoThisPerson/devops-capstone-project",
        },
        {
            name: "Fake Stack Overflow",
            description: "Mock version of Q&A platform, Stack Overflow built in collaboration with another developer. Features include user account creation, posting questions and answers, commenting, voting, and searching.",
            techStack: "React, Node.js, Express, MongoDB",
            link: "https://github.com/WhoThisPerson/FakeStackOverflow",
        },
    ];

    const [event, setEvent] = useState<GitHubService.LatestPushEvent | null>(null);
    const [userProjects, setUserProjects] = useState<GitHubService.ProjectDetails[]>([]);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;

        const fetchGitHubData = async () => {
            try {
                setLoading(true);

                const [projects, latestPush] = await Promise.all([
                    GitHubService.getProjectDetails(),
                    GitHubService.getLatestPushEvent(),
                ]);

                if (ignore) return;

                setUserProjects(projects);
                setEvent(latestPush);

            } catch (error) {
                if (!ignore) {
                    setError("Failed to retrieve GitHub information.");
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        };

        fetchGitHubData();

        return () => {
            ignore = true;
        };
    }, []);

    const latestCommit = event ? {
            repo: event.repoName,
            url: event.repoUrl,
            date: event.createdAt ? new Date(event.createdAt).toLocaleDateString() : "Unknown Date",
            avatar_icon: event.avatarUrl,
        } : null;

    return (
        <div className="max-w-10xl mx-auto px-4 py-14" id="Projects">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

            {/* Wrapper for the GitHub Stats Section */}
            <div className="flex items-center justify-center mb-10">
                <img
                    src={latestCommit ? latestCommit.avatar_icon : ""}
                    alt="Avatar Icon"
                    className="w-16 h-16 rounded-full ml-5"
                >
                </img>
                {/* Latest Commit Section*/}
                {latestCommit && (
                    <div>
                        <h3 className="text-xl font-semibold ml-5">Most Recent GitHub Commit:</h3>

                        <p>
                        <span className="font-medium ml-5">Repo:</span>{" "}
                        <a
                            href={latestCommit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-500 hover:underline"
                        >
                            {latestCommit.repo}
                        </a>
                        </p>

                        <p className="italic ml-5">Made on: {latestCommit.date}</p>
                    </div>
                )}
            </div>
            
            {/* Featured Projects Section */}
            <div className="max-w-7xl mx-auto px-4 py-5 mt-10">
                <h3 className="text-2xl font-bold mb-6 text-center">
                    Featured Projects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectInfo.map((project, index) => (
                        <div key={index} className="border rounded-xl p-4 mb-4 transition hover:-translate-y-3">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl font-bold text-emerald-500 hover:underline"
                            >
                                {project.name}
                            </a>
                            <p className="mb-2">{project.description}</p>
                            <div>
                                {project.techStack.split(", ").map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="border inline-block text-sm px-2 py-1 rounded-full mr-2 mb-2 transition hover:bg-white hover:text-gray-dark"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Recently Updated Projects Section */}
            <div className="max-w-7xl mx-auto px-4 py-5 mt-10">
                <h3 className="text-2xl font-bold mb-6 text-center">
                    Recently Updated Projects
                </h3>

                {loading && <p>Loading repositories...</p>}

                {error && <p>{error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {userProjects.map((project) => (
                            <div
                                key={project.repoName}
                                className="border rounded-xl p-4 mb-4 transition hover:-translate-y-3"
                            >
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl font-bold text-emerald-500 hover:underline"
                                >
                                    {project.repoName}
                                </a>

                                <p className="mb-3 mt-2">
                                    {project.description ?? "No description available."}
                                </p>

                                <div>
                                    {project.primaryLanguage && (
                                        <span className="border inline-block text-sm px-2 py-1 rounded-full mr-2 mb-2 transition hover:bg-white hover:text-gray-dark">
                                            {project.primaryLanguage}
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm italic mt-2">
                                    {project.lastUpdated
                                        ? `Last pushed: ${new Date(project.lastUpdated).toLocaleDateString()}`
                                        : "Push date unavailable"}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects;