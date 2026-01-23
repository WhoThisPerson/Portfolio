import { useEffect, useState } from "react";

const Projects = () => {

    const projectInfo = [
        {
            name: "IBM DevOps and Software Engineering Capstone Project",
            description: "Application that extends an account microservice that manages customer data for a mock-ecommerce platform.",
            techStack: "Python, Flask, Kubernetes, Docker, PostgreSQL",
            link: "https://github.com/WhoThisPerson/devops-capstone-project",
        },
        {
            name: "Computer Networks",
            description: "Collection of networking programming assignments including implementation of a web-proxy server, pcap analysis, and implementation of a multi-thread chat application using sockets",
            techStack: "Python",
            link: "https://github.com/WhoThisPerson/CSE-310-Spring-2025",
        },
        {
            name: "Computer Security Fundamentals",
            description: "Collection of computer security programming assignments including viginere cipher encryption/decryption, password cracker using brute-force and dictionary attacks, and labs involving both",
            techStack: "Python",
            link: "https://github.com/WhoThisPerson/CSE-331-Fall-2024",
        },
        {
            name: "System Fundamentals II",
            description: "Collection of low-level programming assignments which include implementing C's memory functions, daemon process management, and a charla chat program using sockets and multi-threading",
            techStack: "C",
            link: "https://github.com/WhoThisPerson/CSE-320-Spring-2024",
        },
        {
            name: "Fake Stack Overflow",
            description: "Mock version of Q&A platform, Stack Overflow built in collaboration with another developer. Features include user account creation, posting questions and answers, commenting, voting, and searching.",
            techStack: "React, Node.js, Express, MongoDB",
            link: "https://github.com/WhoThisPerson/FakeStackOverflow",
        },
        {
            name: "Scripting Languages",
            description: "Collection of scripting language programming assignments including a grep implementation, unit testing, and mock file management system",
            techStack: "Python, Ruby, Shell",
            link: "https://github.com/WhoThisPerson/CSE-337-Fall-2023",
        },
        {
            name: "Data Structures",
            description: "Collection of data structure programming assignments including implementations of a playlist using dynamic arrays, elevator simulator using queues, and mailbox system using arraylists",
            techStack: "Java",
            link: "https://github.com/WhoThisPerson/CSE-214-Summer-2022",
        }
    ];

    const [event, setEvent] = useState<any | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/WhoThisPerson/events/public")
            .then((response) => response.json())
            .then((events: any[]) => {
                const latestPush = events.find(
                    (e) => (e.type === "PushEvent") 
                );
                
                if (latestPush) setEvent(latestPush);
            })
            .catch(() => {});
    }, []);

    const latestCommit = event ? {
            repo: event.repo.name,
            url: `https://github.com/${event.repo.name}`,
            date: new Date(event.created_at).toLocaleDateString(),
            avatar_icon: event.actor.avatar_url,
        } : null;

    return (
        <div className="max-w-10xl mx-auto px-4 py-5 h" id="Projects">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

            {/* Wrapper for the GitHub Stats Section */}
            <div className="flex items-center justify-center mb-10">
                {/* Contribution Graph */}
                <div>
                    <img src="https://github-readme-activity-graph.vercel.app/graph?username=WhoThisPerson&theme=github-compact"></img>
                </div>

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
                            className="text-blue hover:underline"
                        >
                            {latestCommit.repo}
                        </a>
                        </p>

                        <p className="italic ml-5">Made on: {latestCommit.date}</p>
                    </div>
                )}
            </div>
            
            {/* Projects List Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectInfo.map((project, index) => (
                    <div key={index} className="w-full border rounded-xl p-4 mb-4 transition hover:-translate-y-3">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-bold text-blue hover:underline"
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
    )
}

export default Projects;